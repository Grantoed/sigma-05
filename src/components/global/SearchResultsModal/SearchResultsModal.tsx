import React from "react";
import { ProductCard } from "src/components/global/ProductCard";
import { ProductsResponse } from "src/interfaces/productsResponse.interface";
import { Product } from "src/interfaces/product.interface";
import {
  Modal,
  ProductsWrapper,
  ModalCloseButton,
  NoItemsNotification,
} from "./SearchResultsModal.styled";

type Props = {
  filteredProducts: ProductsResponse["products"];
  openModalWithProduct: (productItem: Product) => void;
  closeModal: () => void;
};

export const SearchResultsModal = ({
  filteredProducts,
  openModalWithProduct,
  closeModal,
}: Props) => {
  return (
    <Modal>
      <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
      {filteredProducts.length > 0 ? (
        <ProductsWrapper>
          {filteredProducts.map((productItem) => (
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
        </ProductsWrapper>
      ) : (
        <NoItemsNotification>No items match your search</NoItemsNotification>
      )}
    </Modal>
  );
};
