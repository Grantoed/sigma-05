import React, { lazy } from "react";
import { Lazy } from "src/components/global/Lazy";

const LazyCart = lazy(() => import("./Cart"));

type Props = {};

const Home = (props: Props) => (
  <Lazy>
    <LazyCart {...props} />
  </Lazy>
);

export default Home;
