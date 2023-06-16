import PropTypes from "prop-types";
import css from "./Searchbar.module.css";

export const Searchbar = ({ onSubmit }) => {
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={onSubmit}>
        <button className={css.SearchFormButton} type="submit">
          <span>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          name="searchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
