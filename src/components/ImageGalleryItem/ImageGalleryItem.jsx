import PropTypes from "prop-types";
import css from "../ImageGalleryItem/ImageGalleryItem.module.css";

export const ImageGalleryItem = ({ image, onClick }) => {
  <li key={image.id} className={css.galleryItem}>
    <img
      src={image.webformatURL}
      alt={image.tags}
      name={image.largeImageURL}
      onClick={onClick}
      className={css.ImageGalleryItemImage}
    />
  </li>;
};
ImageGalleryItem.propTypes = {
  image: PropTypes.object,
  onClick: PropTypes.func,
};
