import axios from "axios";
axios.defaults.baseURL = `https://api.themoviedb.org/3`;
const ACCESS_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjAyOGE3ZTU2MmM2NGE1ZjdmMzg4NjE0ZTE5Y2M1MyIsInN1YiI6IjY1ZTYyOWMwOTQ1MWU3MDE4NzVkMTlhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PLzpH6RA_F_NiSRBcpWZrS9MFXL_jGGDF3pMQQLMGMw";

const options = {
  headers: {
    Authorization: `Bearer ${ACCESS_KEY}`,
  },
};
export const getMovies = async () => {
  const response = await axios.get(
    "/trending/movie/day?language=en-US",
    options
  );
  return response.data.results;
};

export const getMovieById = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, options);

  return response.data;
};

export const getImagePatch = async () => {
  const response = await axios.get(`/configuration`, options);


  return response.data.images;
};

export const getMovieCredits = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`, options);

  return response.data.cast;
};

export const getActorPatch = async () => {
  const response = await axios.get(`/configuration`, options);

  return response.data.images;
};
export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, options);

  return response.data;
};

export const searchFilm = async (query) => {
  const response = await axios.get(`search/movie?query=${query}`, options);

  return response.data.results;
};
