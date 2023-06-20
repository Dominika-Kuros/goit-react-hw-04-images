import PropTypes from "prop-types";
import css from "./Searchbar.module.css";
import { Component } from "react";

export class Searchbar extends Component {
  state = {
    search: "",
  };
  handleInputChange = (e) => {
    const value = e.target.value;
    this.setState({ search: value });
  };
  // onChangeInput = (e) => {
  //   this.setState({ inputValue: e.target.value });
  // };

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   if (!this.state.search) {
  //     return "Enter text for search.";
  //   }
  //   const searchQuery = e.target.elements.searchName.value.trim();
  //   this.props.onSubmit(searchQuery);
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = this.state.search;

    this.props.onSubmit(searchQuery);

    this.setState({ search: "" });
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
            value={this.search}
            name="searchInput"
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
