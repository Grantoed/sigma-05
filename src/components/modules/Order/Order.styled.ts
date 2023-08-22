import styled from "styled-components";

export const Section = styled.section`
  margin-top: 90px;
  padding-top: 90px;
  padding-bottom: 90px;
  background-color: ${(p) => p.theme.colors.cbgc};
`;

export const EmptyCartImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  mix-blend-mode: multiply;
`;

export const ProductWrapper = styled.div``;

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ProductItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  mix-blend-mode: multiply;
`;

export const ProductNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const ProductName = styled.p`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes[7]};
  color: ${(p) => p.theme.colors.mtc};
`;

export const ProductPriceWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-top: 10px;
`;

export const PriceOld = styled.p`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes[3]};
  color: ${(p) => p.theme.colors.discount};
  text-decoration: line-through;
`;

export const Price = styled.p`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes[4]};
  color: ${(p) => p.theme.colors.mtc};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[2]};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.mtc};
`;

export const RemoveProductButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 46px;
  border-radius: 16px;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes[2]};
  color: ${(p) => p.theme.colors.mbgc};
  background-color: ${(p) => p.theme.colors.mtc};
`;

export const ProductSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Subtotal = styled.p`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[4]};
  color: ${(p) => p.theme.colors.mtc};
`;

export const Discount = styled.p`
  margin-top: 15px;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[4]};
`;

export const TotalCost = styled.p`
  margin-top: 30px;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes[4]};
  color: ${(p) => p.theme.colors.mtc};
`;
