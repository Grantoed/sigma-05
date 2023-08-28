import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 120px 260px;
  background-color: ${(p) => p.theme.colors.mbgc};
`;

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  margin-top: 40px;
`;

export const ModalCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  width: 64px;
  height: 46px;
  border-radius: 16px;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[2]};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.mbgc};
  background-color: ${(p) => p.theme.colors.mtc};
`;

export const NoItemsNotification = styled.p`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[4]};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  text-align: center;
  color: ${(p) => p.theme.colors.mtc};
`;
