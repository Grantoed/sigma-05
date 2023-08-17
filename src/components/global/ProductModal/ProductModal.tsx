import React, { useState } from "react";
import { useTheme } from "styled-components";
import { BiStar } from "react-icons/bi";
import { Button } from "../Button";
import { QuantityButton } from "../QuantityButton";
import { Product } from "src/interfaces/product.interface";
import {
  ModalWrapper,
  MainWrapper,
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
  productQuantity: string | number;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleIncrement: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleDecrement: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ProductModal = ({
  selectedProduct,
  productQuantity,
  handleInputChange,
  handleIncrement,
  handleDecrement,
}: ProductModalProps) => {
  const MAX_STARS = 5;
  const theme = useTheme();

  const [activeInfo, setActiveInfo] = useState<string | null>(null);

  const handleShowMoreInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    const infoType = e.currentTarget.id;
    setActiveInfo(infoType);
  };

  return (
    <ModalWrapper>
      <MainWrapper>
        <ModalImageWrapper>
          <ModalCategory>{selectedProduct.category}</ModalCategory>
          <ModalImage src={selectedProduct.imageURL}></ModalImage>
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
              <ModalOldPrice>${selectedProduct.priceOld}</ModalOldPrice>
            )}
            <ModalPrice>${selectedProduct.price}</ModalPrice>
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
            <Button>Add To Cart</Button>
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
