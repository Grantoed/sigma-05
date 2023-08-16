import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop } from "./Modal.styled";
import { ChildrenProp } from "src/interfaces/childrenProp.interface";

type ModalProps = {
  onClose: () => void;
};

export const Modal = ({ onClose, children }: ChildrenProp & ModalProps) => {
  useEffect(() => {
    const handleEscPress = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscPress);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscPress);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>{children}</Backdrop>,
    document.body
  );
};
