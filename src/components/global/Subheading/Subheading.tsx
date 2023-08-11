import React from "react";
import { ChildrenProp } from "src/types/childrenProp";
import { Heading } from "./Subheading.styled";

export const Subheading = ({ children }: ChildrenProp) => {
  return <Heading>{children}</Heading>;
};
