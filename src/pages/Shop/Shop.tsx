import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useProductModal } from "src/hooks/useProductModal";
import { AppDispatch } from "src/redux/store";
import { selectProductsObject } from "src/redux/products";
import { fetchAll } from "src/redux/operations";
import { Portal } from "src/components/global/Portal";
import { Box } from "src/components/global/Box";
import { Container } from "src/components/global/Container";
import { PageBanner } from "src/components/global/PageBanner";
import { ProductCard } from "src/components/global/ProductCard";
import { ProductModal } from "src/components/global/ProductModal";
import { Subscription } from "src/components/modules/Subscription";
import { Section } from "./Shop.styled";
import shopImg from "src/images/cart.webp";

const Shop = () => {
  const MAX_ITEMS = 16;
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const productsObject = useSelector(selectProductsObject);
  const { selectedProduct, isModalOpen, openModalWithProduct, closeModal } =
    useProductModal();

  useEffect(() => {
    if (productsObject.products.length < MAX_ITEMS) {
      dispatch(fetchAll({ limit: MAX_ITEMS.toString() }));
    }
  }, [dispatch, productsObject.products.length]);

  return (
    <>
      <PageBanner backgroundImage={shopImg}>Shop</PageBanner>
      <Section>
        <Container py={150}>
          <Box
            display="grid"
            gridTemplateColumns="repeat(4, 1fr)"
            gridTemplateRows="auto"
            gridGap={20}
            mt={40}
          >
            {productsObject.products.map((productItem) => (
              <ProductCard
                key={productItem._id}
                category={productItem.category}
                imageURL={productItem.imageURL}
                name={productItem.name}
                priceOld={productItem.priceOld}
                price={productItem.price}
                rating={productItem.rating}
                openModal={() => openModalWithProduct(productItem)}
              />
            ))}
          </Box>
          {isModalOpen && selectedProduct && (
            <Portal onClose={closeModal}>
              <ProductModal
                onClose={closeModal}
                selectedProduct={selectedProduct}
              />
            </Portal>
          )}
        </Container>
      </Section>
      <Subscription />
    </>
  );
};

export default Shop;
