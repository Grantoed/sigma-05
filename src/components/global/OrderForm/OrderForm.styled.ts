import styled from "styled-components";

export const Form = styled.form`
  margin-top: 90px;
`;

export const FlexFieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  &:not(:first-child) {
    margin-top: 50px;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 569px;
`;

export const Label = styled.label`
  font-family: ${(p) => p.theme.fonts.mtf};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  color: ${(p) => p.theme.colors.mtc};
`;

export const Input = styled.input`
  height: 80px;
  padding: 30px 25px;
  font-family: ${(p) => p.theme.fonts.mtf};
  color: ${(p) => p.theme.colors.mtc};
  background-color: ${(p) => p.theme.colors.mbgc};
  border: 1px solid ${(p) => p.theme.colors.atc};
  border-radius: ${(p) => p.theme.radii.buttons};
  outline: none;
  &::placeholder {
    font-style: italic;
    color: ${(p) => p.theme.colors.placeholder};
  }
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  margin-top: 50px;
`;

export const TextArea = styled.textarea`
  height: 250px;
  padding: 30px 25px;
  font-family: ${(p) => p.theme.fonts.mtf};
  color: ${(p) => p.theme.colors.mtc};
  background-color: ${(p) => p.theme.colors.mbgc};
  border: 1px solid ${(p) => p.theme.colors.atc};
  border-radius: ${(p) => p.theme.radii.buttons};
  outline: none;
  resize: none;
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
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[2]};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  border-radius: ${(p) => p.theme.radii.buttons};
  background-color: ${(p) => p.theme.colors.mtc};
  color: ${(p) => p.theme.colors.mbgc};
  &:disabled {
    cursor: default;
    background-color: ${(p) => p.theme.colors.dbtnc};
  }
`;

export const ErrorMessage = styled.span`
  color: ${(p) => p.theme.colors.error};
`;
