import css from "../ImageGallery/ImageGallery.module.css";
import PropTypes from "prop-types";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem images={images} onClick={onClick} />;
    </ul>
  );
};
  


ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func.isRequired,
};
