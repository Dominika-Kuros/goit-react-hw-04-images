import { Component } from "react";

import { fetchImagesWithQuery } from "./services/api";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { Loader } from "./components/Loader/Loader";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Modal } from "./components/Modal/Modal";
import { Button } from "./components/Button/Button";
import css from "./App.module.css";

export class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    perPage: 12,
    isLoading: false,
    isModalOpen: false,
    error: null,
    largeImageURL: "",
    alt: "",
  };

  handleSubmit = async (e) => {
    const search = e.target.elements.searchInput;
    if (search.value === "") {
      return;
    }
    e.preventDefault();
    this.setState({ isLoading: true });
    try {
      const response = await fetchImagesWithQuery(search.value);
      this.setState({
        images: response,
        query: search.value,
        page: 1,
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  openModal = (e) => {
    this.setState({
      isModalOpen: true,
      largeImageURL: e.target.name,
      alt: e.target.alt,
    });
  };
  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  handleEsc = (e) => {
    if (e.code === "Escape") {
      this.closeModal();
    }
  };

  handleCloseModal = (e) => {
    if (e.currentTarget === e.target) {
      this.closeModal();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleEsc);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEsc);
  }

  handleLoadMore = async () => {
    const response = await fetchImagesWithQuery(
      this.state.query,
      this.state.page + 1
    );
    this.setState({
      images: [...this.state.images, ...response],
      page: this.state.page + 1,
    });
  };

  render() {
    const { isLoading, images, isModalOpen, alt, largeImageURL, error } =
      this.state;

    return (
      <div className={css.App}>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <Searchbar onSubmit={this.handleSubmit} />
            <ImageGallery images={images} onClick={this.openModal} />
            {images.length >= 12 && <Button onClick={this.handleLoadMore} />}
            {error && <p>...Whoops, something went wrong, try again</p>}
          </div>
        )}
        {isModalOpen ? (
          <Modal
            largeImageURL={largeImageURL}
            alt={alt}
            closeModal={this.handleCloseModal}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
