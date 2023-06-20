import PropTypes from "prop-types";
import css from "./Modal.module.css";
import { Component } from "react";

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleEsc);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEsc);
  }

  handleEsc = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };
  handleCloseModal = (e) => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div onClick={this.handleCloseModal} className={css.Overlay}>
        <div className={css.Modal}>
          <img src={this.props.largeImageURL} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

