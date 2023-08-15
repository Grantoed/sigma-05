import React from "react";
import { ColorProps } from "styled-system";
import { ChildrenProp } from "src/interfaces/childrenProp.interface";
import { Heading } from "./SectionHeading.styled";

export const SectionHeading = ({
  children,
  ...props
}: ChildrenProp & ColorProps) => {
  return <Heading {...props}>{children}</Heading>;
};
