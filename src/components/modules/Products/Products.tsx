import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "src/redux/store";
import {
  selectIsLoading,
  selectProductsObject,
  selectProductCount,
} from "src/redux/products";
import { fetchAll } from "src/api/productsAPI";
import { Box } from "src/components/global/Box";
import { Container } from "src/components/global/Container";
import { Button } from "src/components/global/Button";
import { Portal } from "src/components/global/Portal";
import { ProductModal } from "src/components/global/ProductModal";
import { ProductCard } from "src/components/global/ProductCard";
import { Product } from "src/interfaces/product.interface";
import {
  Section,
  ProductsHeading,
  ProductsSubheading,
} from "./Products.styled";

export const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [productQuantity, setProductQuantity] = useState<string | number>(1);
  const [displayCount, setDisplayCount] = useState(8);
  const [nextPage, setNextPage] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productsObject = useSelector(selectProductsObject);
  const isLoading = useSelector(selectIsLoading);
  const productCount = useSelector(selectProductCount);
  const shouldLoadMore = productCount > displayCount * nextPage - 1;
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const intValue = parseInt(e.target.value);
    if (!isNaN(intValue)) {
      setProductQuantity(intValue);
    }
    if (!intValue) {
      setProductQuantity("");
    }
    if (selectedProduct && intValue > selectedProduct.inStock) {
      setProductQuantity(selectedProduct.inStock);
    }
  };

  const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (
      typeof productQuantity === "number" &&
      selectedProduct &&
      productQuantity + 1 > selectedProduct.inStock
    ) {
      return;
    } else if (typeof productQuantity === "string") {
      setProductQuantity(1);
    } else {
      setProductQuantity(productQuantity + 1);
    }
  };

  const handleDecrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof productQuantity === "number" && productQuantity - 1 > 0) {
      setProductQuantity(productQuantity - 1);
    }
  };

  useEffect(() => {
    if (!productsObject.products.length) {
      dispatch(fetchAll({ limit: "8" }));
    }
  }, [dispatch, productsObject.products.length]);

  return (
    <Section>
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
          {productsObject.products.slice(0, displayCount).map((productItem) => (
            <ProductCard
              key={productItem._id}
              category={productItem.category}
              imageURL={productItem.imageURL}
              name={productItem.name}
              priceOld={productItem.priceOld}
              price={productItem.price}
              rating={productItem.rating}
              openModal={() => {
                setSelectedProduct(productItem);
                setIsModalOpen(true);
              }}
            />
          ))}
        </Box>
        {!isLoading && shouldLoadMore && (
          <Button
            onClick={handleLoadMore}
            backgroundColor="#1E1E1E"
            mt={80}
            ml="auto"
            mr="auto"
          >
            Load More
          </Button>
        )}
        {isModalOpen && selectedProduct && (
          <Portal onClose={() => setIsModalOpen(false)}>
            <ProductModal
              selectedProduct={selectedProduct}
              productQuantity={productQuantity}
              handleInputChange={handleInputChange}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />
          </Portal>
        )}
      </Container>
    </Section>
  );
};
