import css from "../Button/Button.module.css";
import PropTypes from "prop-types";
export const Button = ({ onClick }) => {
  return (
    <button className={css.Button} type="button" onClick={onClick}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};
