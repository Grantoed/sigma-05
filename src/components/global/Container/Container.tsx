import React from "react";
import { ContainerWrapper } from "./Container.styled";
import { ChildrenProp } from "src/types/childrenProp";
import { BoxProps } from "../Box";

export const Container = ({ children, ...rest }: ChildrenProp & BoxProps) => {
  return <ContainerWrapper {...rest}>{children}</ContainerWrapper>;
};
