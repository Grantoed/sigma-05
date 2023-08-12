import React from "react";
import { StyledBox, BoxProps } from "./Box.styled";
import { ChildrenProp } from "src/types/childrenProp";

export const Box = ({ children, ...props }: ChildrenProp & BoxProps) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};
