import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { ChildrenProp } from "src/types/childrenProp";
import { CustomizedButton, ButtonIcon, ButtonProps } from "./Button.styled";

export const Button = ({ children, ...rest }: ChildrenProp & ButtonProps) => {
  return (
    <CustomizedButton {...rest}>
      {children}
      <ButtonIcon>
        <BiRightArrowAlt size={15} color="#fff" />
      </ButtonIcon>
    </CustomizedButton>
  );
};
