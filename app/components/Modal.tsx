"use client";

import { Interface } from "readline/promises";
import { useCallback, useEffect, useState } from "react";
const Modal = () => {
  interface Modalprops {
    isOpen?: Boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryLabel?: string;
  }

  const Modal: React.FC<Modalprops> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryLabel,
  }) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
      setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
      if (disabled) {
        return;
      }

      setShowModal(false);
      setTimeout(() => {
        onClose();
      }, 300);
    }, [disabled, onClose]);

    const handlesubmit = useCallback(() => {
      if (disabled) {
        return;
      }
      onSubmit();
    }, [disabled, onSubmit]);

    const handleSecondary = useCallback(() => {
      if (disabled || !secondaryAction) {
        return;
      }
    }, [disabled, secondaryAction]);
    if (!isOpen) {
      return null;
    }

    return (
      <>
        <div
          className="
       justify-center
       items-center
       flex
       overflow-x-hidden
       overflow-y-auto
       fixed
       inset-0
       z-50
       outline-none
       focus:outline-none
       bg-red-800/70
       "
        ></div>
      </>
    );
  };
};

export default Modal;
