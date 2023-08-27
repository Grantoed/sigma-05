import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useProductModal } from "src/hooks/useProductModal";
import { AppDispatch } from "src/redux/store";
import {
  selectIsLoading,
  selectProductsObject,
  selectFilteredProducts,
  selectProductCount,
  selectSearchQuery,
} from "src/redux/products";
import { fetchAll } from "src/redux/operations";
import { Box } from "src/components/global/Box";
import { Container } from "src/components/global/Container";
import { Button } from "src/components/global/Button";
import { Portal } from "src/components/global/Portal";
import { ProductModal } from "src/components/global/ProductModal";
import { ProductCard } from "src/components/global/ProductCard";
import {
  Section,
  ProductsHeading,
  ProductsSubheading,
} from "./Products.styled";

export const Products = () => {
  const [displayCount, setDisplayCount] = useState(8);
  const [nextPage, setNextPage] = useState(2);

  const { selectedProduct, isModalOpen, openModalWithProduct, closeModal } =
    useProductModal();

  const productsObject = useSelector(selectProductsObject);
  const filteredProducts = useSelector(selectFilteredProducts);
  const searchQuery = useSelector(selectSearchQuery);
  const isLoading = useSelector(selectIsLoading);
  const productCount = useSelector(selectProductCount);

  const shouldLoadMore =
    productCount > displayCount * nextPage - 1 || displayCount === 8;

  const dispatch: AppDispatch = useDispatch<AppDispatch>();

  const handleLoadMore = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setDisplayCount((prevCount) => prevCount + 8);

    if (productsObject.products.length < displayCount + 8) {
      dispatch(fetchAll({ limit: "8", page: nextPage.toString() }));
      setNextPage(nextPage + 1);
    }
  };

  useEffect(() => {
    if (!productsObject.products.length) {
      dispatch(fetchAll({ limit: "8" }));
    }
  }, [dispatch, productsObject.products.length]);

  const handleHideAll = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setDisplayCount(8);
  };

  return (
    <Section id="products">
      <Container py={150}>
        <ProductsSubheading>Categories</ProductsSubheading>
        <ProductsHeading>Our Products</ProductsHeading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(4, 1fr)"
          gridTemplateRows="auto"
          gridGap={20}
          mt={40}
        >
          {filteredProducts.length && searchQuery
            ? filteredProducts.map((productItem) => (
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
              ))
            : productsObject.products
                .slice(0, displayCount)
                .map((productItem) => (
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
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt={80}
          gridGap={30}
        >
          {!isLoading && shouldLoadMore && !filteredProducts.length && (
            <Button onClick={handleLoadMore} backgroundColor="#1E1E1E">
              Load More
            </Button>
          )}
          {!filteredProducts.length && displayCount > 8 && (
            <Button onClick={handleHideAll}>Hide All</Button>
          )}
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
  );
};
