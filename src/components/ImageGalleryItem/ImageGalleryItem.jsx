import PropTypes from "prop-types";
import css from "../ImageGalleryItem/ImageGalleryItem.module.css";

export const ImageGalleryItem = ({ images, onClick }) => {
  return (
    <>
      {images.map((image) => (
        <li key={image.id} className={css.galleryItem}>
          <img
            src={image.webformatURL}
            alt={image.tags}
            name={image.largeImageURL}
            onClick={onClick}
            className={css.ImageGalleryItemImage}
          />
        </li>
      ))}
    </>
  );
};
ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func,
};
  
