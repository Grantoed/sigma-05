import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsLoading,
  selectProductsObject,
  selectProductCount,
} from "src/redux/products";
import { fetchAll } from "src/api/productsAPI";
import { Box } from "src/components/global/Box";
import { Container } from "src/components/global/Container";
import { Button } from "src/components/global/Button";
import { ProductsHeading, ProductsSubheading } from "./Products.styled";
import { Section } from "./Products.styled";
import { ProductCard } from "src/components/global/ProductCard";
import { AppDispatch } from "src/redux/store";

export const Products = () => {
  const [displayCount, setDisplayCount] = useState(8);
  const [nextPage, setNextPage] = useState(2);
  const productsObject = useSelector(selectProductsObject);
  const isLoading = useSelector(selectIsLoading);
  const productCount = useSelector(selectProductCount);
  const shouldLoadMore = productCount > displayCount * nextPage - 1;
  console.log("shouldLoadMore", shouldLoadMore);
  console.log("productCount", productCount);
  console.log("displayCount", displayCount);
  console.log("nextPage", nextPage);
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
      </Container>
    </Section>
  );
};
