import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { ChildrenProp } from "src/interfaces/childrenProp.interface";

export const ScrollRestoration = ({ children }: ChildrenProp) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};
