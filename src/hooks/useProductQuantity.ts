import { useState } from "react";

export const useProductQuantity = (initialValue = 1, maxQuantity: number) => {
  const [productQuantity, setProductQuantity] = useState<string | number>(
    initialValue
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const intValue = parseInt(e.target.value);
    if (!isNaN(intValue)) {
      setProductQuantity(intValue);
    }
    if (!intValue) {
      setProductQuantity("");
    }
    if (maxQuantity && intValue > maxQuantity) {
      setProductQuantity(maxQuantity);
    }
  };

  const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (
      typeof productQuantity === "number" &&
      maxQuantity &&
      productQuantity + 1 > maxQuantity
    ) {
      return;
    } else if (typeof productQuantity === "string") {
      setProductQuantity(1);
    } else {
      setProductQuantity(productQuantity + 1);
    }
  };

  const handleDecrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof productQuantity === "number" && productQuantity - 1 > 0) {
      setProductQuantity(productQuantity - 1);
    }
  };

  return {
    productQuantity,
    handleInputChange,
    handleIncrement,
    handleDecrement,
  };
};
