import React from "react";
import { ModalOverlay, ModalContent } from "./modal.styles";

export const Modal = ({ className, children, isOpen, onClose }) => {
  return (
    <ModalOverlay
      className={className ?? "modal"}
      isOPen={isOpen}
      onClick={onClose}
    >
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};
