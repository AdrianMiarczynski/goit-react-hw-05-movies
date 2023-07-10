import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const API_URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = 'ca20a304aef08ae0aab0c90fd677de33';

const featchMovieTrending = async () => {
  try {
    const objects = await axios.get(API_URL + `trending/movie/day`, {
      params: {
        api_key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    const images = objects.data;
    return images;
  } catch (error) {
    throw new Error();
  }
};
const featchMovieSearch = async searchValue => {
  try {
    const objects = await axios.get(API_URL_SEARCH, {
      params: {
        api_key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        query: searchValue,
      },
    });
    const images = objects.data;
    return images;
  } catch (error) {
    throw new Error();
  }
};

const featchMovie = async id => {
  try {
    const objects = await axios.get(API_URL + `movie/${id}`, {
      params: {
        api_key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    const images = objects.data;
    return images;
  } catch (error) {
    throw new Error();
  }
};
const featchMovieCredits = async id => {
  try {
    const objects = await axios.get(API_URL + `movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    const images = objects.data;
    return images;
  } catch (error) {
    throw new Error();
  }
};
const featchMovieReviews = async id => {
  try {
    const objects = await axios.get(API_URL + `movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    const images = objects.data;
    return images;
  } catch (error) {
    throw new Error();
  }
};
export const api = {
  featchMovieTrending,
  featchMovieSearch,
  featchMovie,
  featchMovieCredits,
  featchMovieReviews,
};
