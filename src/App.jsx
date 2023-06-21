import { Component } from "react";

import { fetchImagesWithQuery } from "./services/api";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { Loader } from "./components/Loader/Loader";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Modal } from "./components/Modal/Modal";
import { Button } from "./components/Button/Button";
import css from "./App.module.css";

class App extends Component {
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
  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.getImages();
    }
  }
  getImages = async () => {
    this.setState({ isLoading: true });
    try {
      const data = await fetchImagesWithQuery(
        this.state.query,
        this.state.page
      );
      this.setState((prevState) => ({
        images: [...prevState.images, ...data.hits],
        error: "",
        page: 1,
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = (query) => {
    this.setState({ query, images: [] });
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

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
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
        {isModalOpen && (
          <Modal
            largeImageURL={largeImageURL}
            alt={alt}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}
export default App;
