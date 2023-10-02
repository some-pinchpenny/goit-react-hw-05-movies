import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '9172c4d325a71ee6e99b7941097e9eed';

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `search/movie?query=${query.split('/')[1]}&api_key=${API_KEY}&page=${page}`
  );
  return response.data;
};

export const fetchMovieById = async movieId => {
  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchTrendMovie = async page => {
  const response = await axios.get(
    `trending/movie/day?api_key=${API_KEY}&page=${page}`
  );
  return response.data;
};

export const fetchSelectMovie = async movieId => {
  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
