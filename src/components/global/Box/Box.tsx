import React from "react";
import { StyledBox, BoxProps } from "./Box.styled";
import { ChildrenProp } from "src/interfaces/childrenProp.interface";

export const Box = ({ children, ...props }: ChildrenProp & BoxProps) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};
