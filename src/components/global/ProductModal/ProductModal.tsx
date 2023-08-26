import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "styled-components";
import { useProductQuantity } from "src/hooks/useProductQuantity";
import { BiStar } from "react-icons/bi";
import { formatPrice } from "src/helpers/formatPrice";
import { Button } from "../Button";
import { QuantityButton } from "../QuantityButton";
import { addToCart } from "src/redux/orders";
import { Product } from "src/interfaces/product.interface";
import {
  ModalWrapper,
  MainWrapper,
  ModalCloseButton,
  ModalImageWrapper,
  ModalImage,
  ModalCategory,
  ProductDescriptionWrapper,
  ModalName,
  ModalPriceWrapper,
  ModalOldPrice,
  ModalRating,
  ModalPrice,
  ModalText,
  ModalButtonsWrapper,
  MoreInfoWrapper,
  MoreInfoButtonsWrapper,
  MoreInfoButton,
  MoreInfoText,
} from "./ProductModal.styled";

type ProductModalProps = {
  selectedProduct: Product;
  onClose: () => void;
};

export const ProductModal = ({
  selectedProduct,
  onClose,
}: ProductModalProps) => {
  const {
    productQuantity,
    handleInputChange,
    handleIncrement,
    handleDecrement,
  } = useProductQuantity(1, selectedProduct.inStock);
  const [activeInfo, setActiveInfo] = useState<string | null>(null);

  const MAX_STARS = 5;
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleShowMoreInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    const infoType = e.currentTarget.id;
    setActiveInfo(infoType);
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(
      addToCart({
        _id: selectedProduct._id,
        name: selectedProduct.name,
        imageURL: selectedProduct.imageURL,
        category: selectedProduct.category,
        inStock: selectedProduct.inStock,
        priceOld: selectedProduct.priceOld,
        price: selectedProduct.price,
        quantity: productQuantity as number,
      })
    );
    onClose();
  };

  return (
    <ModalWrapper>
      <MainWrapper>
        <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
        <ModalImageWrapper>
          <ModalCategory>{selectedProduct.category}</ModalCategory>
          <ModalImage
            src={selectedProduct.imageURL}
            alt={selectedProduct.name}
          ></ModalImage>
        </ModalImageWrapper>
        <ProductDescriptionWrapper>
          <ModalName>{selectedProduct.name}</ModalName>
          <ModalRating>
            {Array.from({ length: MAX_STARS }).map((_, index) => (
              <BiStar
                key={index}
                size={18}
                color={
                  index < selectedProduct.rating
                    ? `${theme.colors.star}`
                    : `${theme.colors.disount}`
                }
              />
            ))}
          </ModalRating>
          <ModalPriceWrapper>
            {selectedProduct.priceOld && (
              <ModalOldPrice>
                ${formatPrice(selectedProduct.priceOld)}
              </ModalOldPrice>
            )}
            <ModalPrice>${formatPrice(selectedProduct.price)}</ModalPrice>
          </ModalPriceWrapper>
          <ModalText>
            Considering adding some fresh {selectedProduct.name} to your cart?
            Please specify the desired quantity before proceeding.
          </ModalText>
          <ModalButtonsWrapper>
            Quantity:
            <QuantityButton
              value={productQuantity}
              onInput={handleInputChange}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
            <Button onClick={handleAddToCart}>Add To Cart</Button>
          </ModalButtonsWrapper>
        </ProductDescriptionWrapper>
      </MainWrapper>
      <MoreInfoWrapper>
        <MoreInfoButtonsWrapper>
          <MoreInfoButton
            id="description"
            onClick={handleShowMoreInfo}
            className={activeInfo === "description" ? "active" : ""}
          >
            Product Description
          </MoreInfoButton>
          <MoreInfoButton
            id="additionalInfo"
            onClick={handleShowMoreInfo}
            className={activeInfo === "additionalInfo" ? "active" : ""}
          >
            Additional Info
          </MoreInfoButton>
        </MoreInfoButtonsWrapper>
        {activeInfo === "description" && (
          <MoreInfoText>{selectedProduct.description}</MoreInfoText>
        )}
        {activeInfo === "additionalInfo" && (
          <MoreInfoText>{selectedProduct.additionalInfo}</MoreInfoText>
        )}
      </MoreInfoWrapper>
    </ModalWrapper>
  );
};
