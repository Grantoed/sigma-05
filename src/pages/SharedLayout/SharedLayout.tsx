import React from "react";
import { Header } from "src/components/modules/Header";
import { Outlet } from "react-router-dom";

type Props = {};

export const SharedLayout = (props: Props) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
