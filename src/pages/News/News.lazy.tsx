import React, { lazy } from "react";
import { Lazy } from "src/components/global/Lazy";

const LazyNews = lazy(() => import("./News"));

type Props = {};

const News = (props: Props) => (
  <Lazy>
    <LazyNews {...props} />
  </Lazy>
);

export default News;
