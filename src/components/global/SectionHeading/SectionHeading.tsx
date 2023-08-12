import React from "react";
import { ChildrenProp } from "src/types/childrenProp";
import { Heading } from "./SectionHeading.styled";

export const SectionHeading = ({ children, ...props }: ChildrenProp) => {
  return <Heading {...props}>{children}</Heading>;
};
