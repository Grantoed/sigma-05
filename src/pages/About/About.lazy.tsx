import React, { lazy } from "react";
import { Lazy } from "src/components/global/Lazy";

const LazyAbout = lazy(() => import("./About"));

type Props = {};

const About = (props: Props) => (
  <Lazy>
    <LazyAbout {...props} />
  </Lazy>
);

export default About;
