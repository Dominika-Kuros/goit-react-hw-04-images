import propTypes from "prop-types";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images, onClick }) => (
  <ul>
    {images.map((image, index) => (
      <ImageGalleryItem key={index} image={image} onClick={onClick} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: propTypes.object.isRequired,
  onClick: propTypes.func.isRequired,
};
