import React from "react";
import { Suspense } from "react";
import { Loader } from "../Loader";

type Props = {
  children: React.ReactNode;
};

export const Lazy = (props: Props) => {
  return <Suspense fallback={<Loader />}>{props.children}</Suspense>;
};
