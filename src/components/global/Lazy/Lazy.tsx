import React from "react";
import { Suspense } from "react";
import { Loader } from "../Loader";
import { ChildrenProp } from "src/interfaces/childrenProp.interface";

export const Lazy = ({ children }: ChildrenProp) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};
