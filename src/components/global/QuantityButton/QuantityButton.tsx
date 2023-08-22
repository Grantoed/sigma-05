import React from "react";
import {
  QuantityWrapper,
  QuantityInput,
  QuantityIncrement,
  QuantityDecrement,
} from "./QuantityButton.styled";

type QuantityButtonProps = {
  value: string | number;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onIncrement: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDecrement: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const QuantityButton = ({
  value,
  onInput,
  onIncrement,
  onDecrement,
}: QuantityButtonProps) => {
  return (
    <QuantityWrapper>
      <QuantityDecrement type="button" onClick={onDecrement}>
        -
      </QuantityDecrement>
      <QuantityInput
        type="text"
        value={value}
        onChange={onInput}
        maxLength={2}
      />
      <QuantityIncrement type="button" onClick={onIncrement}>
        +
      </QuantityIncrement>
    </QuantityWrapper>
  );
};
