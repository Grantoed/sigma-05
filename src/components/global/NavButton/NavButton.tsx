import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { ChildrenProp } from "src/interfaces/childrenProp.interface";
import { CustomizedButton, ButtonIcon, ButtonProps } from "./NavButton.styled";

type Props = { to: string } & ChildrenProp & ButtonProps;

export const NavButton = ({ children, to, ...rest }: Props) => {
  return (
    <CustomizedButton to={to} {...rest}>
      {children}
      <ButtonIcon>
        <BiRightArrowAlt size={15} color="#fff" />
      </ButtonIcon>
    </CustomizedButton>
  );
};
