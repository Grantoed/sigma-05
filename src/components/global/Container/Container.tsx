import React from "react";
import { ContainerWrapper } from "./Container.styled";
import { ChildrenProp } from "src/types/childrenProp";

export const Container = (props: ChildrenProp) => {
  return <ContainerWrapper>{props.children}</ContainerWrapper>;
};
