import propTypes from "prop-types";
import css from "./Modal.module.css";

export const Modal = ({ largeImageURL, alt, closeModal }) => {
  return (
    <div onClick={closeModal} className={css.Overlay}>
      <div className="modal">
        <img src={largeImageURL} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  closeModal: propTypes.func.isRequired,
};
