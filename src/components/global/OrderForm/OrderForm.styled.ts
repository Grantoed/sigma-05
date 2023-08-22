import styled from "styled-components";

export const Form = styled.form`
  margin-top: 90px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Label = styled.label`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  color: ${(p) => p.theme.colors.mtc};
`;

export const Input = styled.input`
  width: 569px;
  height: 80px;
  padding: 30px 25px;
  font-family: ${(p) => p.theme.fonts.mtf};
  color: ${(p) => p.theme.colors.mtc};
  background-color: ${(p) => p.theme.colors.mbgc};
  border: transparent;
  border-radius: ${(p) => p.theme.radii.buttons};
  outline: none;
  &::placeholder {
    font-style: italic;
    color: ${(p) => p.theme.colors.placeholder};
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 80px;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[2]};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  border-radius: ${(p) => p.theme.radii.buttons};
  background-color: ${(p) => p.theme.colors.mtc};
  color: ${(p) => p.theme.colors.mbgc};
`;

export const ErrorMessage = styled.span`
  margin-top: 10px;
  color: ${(p) => p.theme.colors.error};
`;
