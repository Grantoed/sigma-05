import React, { useState } from "react";
import { useTheme } from "styled-components";
import { BiStar } from "react-icons/bi";
import { formatPrice } from "src/helpers/formatPrice";
import { Button } from "../Button";
import { QuantityButton } from "../QuantityButton";
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
  const MAX_STARS = 5;
  const theme = useTheme();
  const [productQuantity, setProductQuantity] = useState<string | number>(1);
  const [activeInfo, setActiveInfo] = useState<string | null>(null);

  const handleShowMoreInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    const infoType = e.currentTarget.id;
    setActiveInfo(infoType);
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

  return (
    <ModalWrapper>
      <MainWrapper>
        <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
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
