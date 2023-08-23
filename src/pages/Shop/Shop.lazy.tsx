import React, { lazy } from "react";
import { Lazy } from "src/components/global/Lazy";

const LazyShop = lazy(() => import("./Shop"));

type Props = {};

const Shop = (props: Props) => (
  <Lazy>
    <LazyShop {...props} />
  </Lazy>
);

export default Shop;
