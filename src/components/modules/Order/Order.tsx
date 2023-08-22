import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  changeProductQuantity,
  selectProductsInCart,
} from "src/redux/orders";
import { formatPrice } from "src/helpers/formatPrice";
import { Box } from "src/components/global/Box";
import { Container } from "src/components/global/Container";
import { Button } from "src/components/global/Button";
import { QuantityButton } from "src/components/global/QuantityButton";
import { OrderForm } from "src/components/global/OrderForm";
import { OrderedProduct } from "src/interfaces/orderedProduct.interface";
import {
  Section,
  EmptyCartImg,
  ProductWrapper,
  ProductList,
  ProductItem,
  ProductDetailsWrapper,
  ProductImage,
  ProductNameWrapper,
  ProductName,
  ProductPriceWrapper,
  PriceOld,
  Price,
  ButtonsWrapper,
  RemoveProductButton,
  ProductSummary,
  Subtotal,
  TotalCost,
  Discount,
} from "./Order.styled";
import emptyCartImg from "src/images/empty-cart.png";

export const Order = () => {
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  const productsInCart = useSelector(selectProductsInCart);
  const dispatch = useDispatch();

  const handleRemoveProduct = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const cartIsEmpty = productsInCart.length === 0;

  const { total, subtotal, discount } = productsInCart.reduce(
    (acc, product) => {
      const productTotalPrice = product.price * product.quantity;
      const productOldTotalPrice = product.priceOld
        ? product.priceOld * product.quantity
        : productTotalPrice;
      const productDiscount = productOldTotalPrice - productTotalPrice;

      return {
        total: acc.total + productTotalPrice,
        subtotal: acc.subtotal + productOldTotalPrice,
        discount: acc.discount + productDiscount,
      };
    },
    { total: 0, subtotal: 0, discount: 0 }
  );

  const createHandlers = (product: OrderedProduct) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const intValue = parseInt(e.target.value);
      if (!isNaN(intValue) && intValue <= product.inStock) {
        dispatch(
          changeProductQuantity({
            _id: product._id,
            quantity: intValue,
          })
        );
      }
    };

    const handleIncrement = () => {
      if (product.quantity < product.inStock) {
        dispatch(
          changeProductQuantity({
            _id: product._id,
            quantity: product.quantity + 1,
          })
        );
      }
    };

    const handleDecrement = () => {
      if (product.quantity > 1) {
        dispatch(
          changeProductQuantity({
            _id: product._id,
            quantity: product.quantity - 1,
          })
        );
      }
    };

    return { handleInputChange, handleIncrement, handleDecrement };
  };

  return (
    <Section>
      <Container>
        {cartIsEmpty ? (
          <EmptyCartImg src={emptyCartImg} />
        ) : (
          <>
            <ProductWrapper>
              <ProductList>
                {productsInCart.map((product) => {
                  const {
                    handleInputChange,
                    handleIncrement,
                    handleDecrement,
                  } = createHandlers(product);
                  return (
                    <ProductItem key={product._id}>
                      <ProductDetailsWrapper>
                        <ProductImage src={product.imageURL} />
                        <ProductNameWrapper>
                          <ProductName>{product.name}</ProductName>
                          <ProductPriceWrapper>
                            <PriceOld>
                              {product.priceOld &&
                                `$${formatPrice(product.priceOld)}`}
                            </PriceOld>
                            <Price>${formatPrice(product.price)}</Price>
                          </ProductPriceWrapper>
                        </ProductNameWrapper>
                      </ProductDetailsWrapper>
                      <ButtonsWrapper>
                        Quantity:
                        <QuantityButton
                          value={product.quantity}
                          onInput={handleInputChange}
                          onIncrement={handleIncrement}
                          onDecrement={handleDecrement}
                        />
                        <RemoveProductButton
                          onClick={() => handleRemoveProduct(product._id)}
                        >
                          X
                        </RemoveProductButton>
                      </ButtonsWrapper>
                    </ProductItem>
                  );
                })}
              </ProductList>
              <ProductSummary>
                <Subtotal>Subtotal: ${formatPrice(subtotal)}</Subtotal>
                <Discount>Discount: ${formatPrice(discount)}</Discount>
                <TotalCost>Total: ${formatPrice(total)}</TotalCost>
              </ProductSummary>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                mt={80}
              >
                {!showSubmitForm && (
                  <Button onClick={() => setShowSubmitForm(true)}>
                    To order
                  </Button>
                )}
              </Box>
            </ProductWrapper>
            {showSubmitForm && (
              <OrderForm
                productsInCart={productsInCart}
                subtotal={subtotal}
                total={total}
                discount={discount}
              />
            )}
          </>
        )}
      </Container>
    </Section>
  );
};
