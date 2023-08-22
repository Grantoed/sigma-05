import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  changeProductQuantity,
  selectProductsInCart,
} from "src/redux/orders";
import { formatPrice } from "src/helpers/formatPrice";
import { Container } from "src/components/global/Container";
import { QuantityButton } from "src/components/global/QuantityButton";
import { OrderForm } from "src/components/global/OrderForm";
import { OrderedProduct } from "src/interfaces/orderedProduct.interface";
import {
  Section,
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

export const Order = () => {
  const productsInCart = useSelector(selectProductsInCart);
  const dispatch = useDispatch();

  const handleRemoveProduct = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const totalPrice = productsInCart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const totalOldPrice = productsInCart.reduce((acc, product) => {
    if (!product.priceOld) {
      return acc;
    } else {
      return acc + product.priceOld * product.quantity;
    }
  }, 0);
  const totalDiscount = totalOldPrice - totalPrice;

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
        <ProductWrapper>
          <ProductList>
            {productsInCart.map((product) => {
              const { handleInputChange, handleIncrement, handleDecrement } =
                createHandlers(product);
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
            <Subtotal>Subtotal: ${formatPrice(totalOldPrice)}</Subtotal>
            <Discount>Discount: ${formatPrice(totalDiscount)}</Discount>
            <TotalCost>Total: ${formatPrice(totalPrice)}</TotalCost>
          </ProductSummary>
        </ProductWrapper>
        <OrderForm
          productsInCart={productsInCart}
          totalPrice={totalPrice}
          totalDiscount={totalDiscount}
        />
      </Container>
    </Section>
  );
};
