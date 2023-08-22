import styled from "styled-components";

export const QuantityWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 134px;
  height: 80px;
`;

export const QuantityInput = styled.input`
  width: 100%;
  height: 100%;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[2]};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  color: ${(p) => p.theme.colors.mtc};
  text-align: center;
  background-color: ${(p) => p.theme.colors.mbgc};
  border: 2px solid ${(p) => p.theme.colors.mtc};
  border-radius: ${(p) => p.theme.radii.points};
  outline: none;
`;

export const QuantityDecrement = styled.button`
  position: absolute;
  left: 10px;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[5]};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  color: ${(p) => p.theme.colors.mtc};
`;

export const QuantityIncrement = styled.button`
  position: absolute;
  right: 10px;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[5]};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  color: ${(p) => p.theme.colors.mtc};
`;
