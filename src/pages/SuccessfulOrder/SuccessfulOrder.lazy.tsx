import React, { lazy } from "react";
import { Lazy } from "src/components/global/Lazy";

const LazyCart = lazy(() => import("./SuccessfulOrder"));

type Props = {};

const SuccessfulOrder = (props: Props) => (
  <Lazy>
    <LazyCart {...props} />
  </Lazy>
);

export default SuccessfulOrder;
