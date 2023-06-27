import { useEffect, useState } from "react";

import { fetchImagesWithQuery } from "./services/api";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { Loader } from "./components/Loader/Loader";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Modal } from "./components/Modal/Modal";
import { Button } from "./components/Button/Button";
import css from "./App.module.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [largeImageURL, setLargeImageURL] = useState("");
  const [alt, setAlt] = useState("");

  useEffect(() => {
    if (query !== "") {
      getImages(query, page);
    }
  }, [query, page]);

  const getImages = async (query, page) => {
    setIsLoading(true);
    try {
      const data = await fetchImagesWithQuery(query, page);
      setImages((prevImages) => [...prevImages, ...data.hits]);
    } catch (error) {
      setError("nie ma zdjęć");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (query) => {
    setQuery(query);
    setImages([]);
    setIsLoading(false);
    setError(null);
  };

  const openModal = (largeImageURL, alt) => {
    setIsModalOpen(true);
    setLargeImageURL(largeImageURL);
    setAlt(alt);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setLargeImageURL(largeImageURL);
    setAlt(alt);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={css.App}>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Searchbar onSubmit={handleSubmit} />
          {error && (
            <h2 style={{ textAlign: "center" }}>
              Something went wrong: ({error})!
            </h2>
          )}
          <ImageGallery images={images} onClick={openModal} />
          {images.length >= 12 && <Button onClick={handleLoadMore} />}
          {error && <p>...Whoops, something went wrong, try again</p>}
        </div>
      )}
      {isModalOpen && (
        <Modal
          largeImageURL={largeImageURL}
          alt={alt}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};
export default App;
