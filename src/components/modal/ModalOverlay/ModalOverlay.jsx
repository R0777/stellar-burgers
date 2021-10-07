import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import s from "./ModalOverlay.module.scss";
const modalRoot = document.getElementById("react-modals");

const ModalOverlay = ({ child, onClose }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const currentEl = overlayRef.current;
    const handleClickClose = (ev) => {
      if (ev.target === currentEl) {
        onClose();
      }
    };

    if (overlayRef && currentEl) {
      currentEl.addEventListener("click", handleClickClose);
    }
    return () => {
      if (overlayRef && currentEl) {
        currentEl.removeEventListener("click", handleClickClose);
      }
    };
  }, [onClose]);

  useEffect(() => {
    const handleEsc = (ev) => {
      if (ev.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return modalRoot
    ? ReactDOM.createPortal(
        <div ref={overlayRef} className={s.overlay}>
          {child}
        </div>,
        modalRoot
      )
    : null;
};
export default ModalOverlay;
