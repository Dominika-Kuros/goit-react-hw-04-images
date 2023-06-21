import PropTypes from "prop-types";
import css from "./Searchbar.module.css";
import { Component } from "react";

export class Searchbar extends Component {
  state = {
    query: "",
    inputValue: "",
  };
  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.query.value.trim();
    this.props.onSubmit(searchQuery);
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button className={css.SearchFormButton} type="submit">
            <span>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
