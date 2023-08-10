import React, { lazy } from "react";
import { Lazy } from "src/components/global/Lazy";

const LazyHome = lazy(() => import("./Home"));

type Props = {};

const Home = (props: Props) => (
  <Lazy>
    <LazyHome {...props} />
  </Lazy>
);

export default Home;
