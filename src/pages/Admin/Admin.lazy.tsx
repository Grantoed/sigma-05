import React, { lazy } from "react";
import { Lazy } from "src/components/global/Lazy";

const LazyAdmin = lazy(() => import("./Admin"));

type Props = {};

const Admin = (props: Props) => (
  <Lazy>
    <LazyAdmin {...props} />
  </Lazy>
);

export default Admin;
