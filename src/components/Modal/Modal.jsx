import PropTypes from "prop-types";
import css from "./Modal.module.css";
import { useEffect } from "react";

export const Modal = ({ closeModal, largeImageURL, alt }) => {
  useEffect(() => {
    const keyDown = (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", keyDown);
    return () => {
      window.removeEventListener("keydown", keyDown);
    };
  }, [closeModal]);

  const handleCloseModal = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <div onClick={handleCloseModal} className={css.Overlay}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
