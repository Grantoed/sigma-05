import React, { lazy } from "react";
import { Lazy } from "src/components/global/Lazy";

const LazyNotFound = lazy(() => import("./NotFound"));

type Props = {};

const NotFound = (props: Props) => (
  <Lazy>
    <LazyNotFound {...props} />
  </Lazy>
);

export default NotFound;
