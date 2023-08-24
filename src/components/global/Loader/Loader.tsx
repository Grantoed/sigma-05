import React from "react";
import { useTheme } from "styled-components";
import { Puff } from "react-loader-spinner";

export const Loader = () => {
  const theme = useTheme();

  return (
    <Puff
      height="150"
      width="150"
      radius={1}
      color={theme.colors.atc}
      ariaLabel="puff-loading"
      wrapperStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "85vh",
      }}
      visible={true}
    />
  );
};
