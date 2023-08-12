import styled from "styled-components";

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 335px;
  height: 483px;
  padding-top: 30px;
  padding-bottom: 18px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: ${(p) => p.theme.colors.abgc};
  border-radius: ${(p) => p.theme.radii.default};
`;

export const ProductCategory = styled.div`
  max-width: 96px;
  padding: 6px 12px;
  font-size: ${(p) => p.theme.fontSizes[0]};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  text-align: center;
  color: ${(p) => p.theme.colors.mbgc};
  background-color: ${(p) => p.theme.colors.mtc};
  border-radius: ${(p) => p.theme.radii.category};
`;

export const ProductImage = styled.img`
  width: 275px;
  height: 275px;
  margin-top: 15px;
  mix-blend-mode: multiply;
`;

export const ProductName = styled.p`
  margin-top: auto;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[2]};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  color: ${(p) => p.theme.colors.mtc};
`;

export const ProductDetails = styled.div`
  margin-top: 13px;
  padding-top: 9px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #dedddd;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

export const ProductOldPrice = styled.p`
  font-size: ${(p) => p.theme.fontSizes[0]};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  color: ${(p) => p.theme.colors.discount};
  text-decoration: line-through;
`;

export const ProductPrice = styled.p`
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.mtc};
`;

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
