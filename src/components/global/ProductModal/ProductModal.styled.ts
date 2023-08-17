import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 120px;
  padding-bottom: 120px;
  background-color: ${(p) => p.theme.colors.mbgc};
`;

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;
`;

export const ModalImageWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ModalCategory = styled.div`
  position: absolute;
  top: 40px;
  left: 30px;
  max-width: 96px;
  padding: 6px 12px;
  font-size: ${(p) => p.theme.fontSizes[0]};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  text-align: center;
  color: ${(p) => p.theme.colors.mbgc};
  background-color: ${(p) => p.theme.colors.mtc};
  border-radius: ${(p) => p.theme.radii.category};
`;

export const ProductDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 660px;
`;

export const ModalName = styled.p`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[7]};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  color: ${(p) => p.theme.colors.mtc};
`;

export const ModalPriceWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-top: 10px;
`;

export const ModalOldPrice = styled.p`
  font-size: ${(p) => p.theme.fontSizes[2]};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  color: ${(p) => p.theme.colors.discount};
  text-decoration: line-through;
`;

export const ModalPrice = styled.p`
  font-size: ${(p) => p.theme.fontSizes[3]};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.mtc};
`;

export const ModalRating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`;

export const ModalText = styled.p`
  margin-top: 30px;
  line-height: ${(p) => p.theme.lineHeights.text};
`;

export const ModalButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 35px;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[2]};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.mtc};
`;

export const MoreInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const MoreInfoButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 90px;
`;

export const MoreInfoButton = styled.button`
  width: 350px;
  height: 80px;
  font-size: ${(p) => p.theme.fontSizes[3]};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.mbgc};
  background-color: ${(p) => p.theme.colors.mtc};
  border-radius: ${(p) => p.theme.radii.category};
  &.active {
    color: ${(p) => p.theme.colors.mtc};
    background-color: ${(p) => p.theme.colors.abtnc};
  }
`;

export const MoreInfoText = styled.p`
  line-height: ${(p) => p.theme.lineHeights.text};
`;
