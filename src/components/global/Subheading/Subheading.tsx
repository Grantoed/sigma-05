import React from "react";
import { ColorProps } from "styled-system";
import { ChildrenProp } from "src/interfaces/childrenProp.interface";
import { Heading } from "./Subheading.styled";

export const Subheading = ({
  children,
  ...props
}: ChildrenProp & ColorProps) => {
  return <Heading {...props}>{children}</Heading>;
};
