import React, { lazy } from "react";
import { Lazy } from "src/components/global/Lazy";

const LazyProjects = lazy(() => import("./Projects"));

type Props = {};

const Projects = (props: Props) => (
  <Lazy>
    <LazyProjects {...props} />
  </Lazy>
);

export default Projects;
