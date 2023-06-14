import React from 'react';
export const ImageGalleryItem = ({ image, onClick }) => (
  <li id={image.id}>
    <img
      src={image.webformatURL}
      alt={image.tags}
      name={image.largeImageURL}
      onClick={onClick}
    />
  </li>
);
