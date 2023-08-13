import React from "react";
import { ColorProps } from "styled-system";
import { ChildrenProp } from "src/types/childrenProp";
import { Heading } from "./SectionHeading.styled";

export const SectionHeading = ({
  children,
  ...props
}: ChildrenProp & ColorProps) => {
  return <Heading {...props}>{children}</Heading>;
};
