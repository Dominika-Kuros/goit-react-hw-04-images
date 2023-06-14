import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api`;

export const fetchImagesWithQuery = async (query, page) => {
  const response = await axios.get(
    `/?q=${query}&page=${page}&key=37071737-fde2d818b08829089c26fa58b&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits.map(image => {
    return {
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
      tags: image.tags,
    };
  });
};


