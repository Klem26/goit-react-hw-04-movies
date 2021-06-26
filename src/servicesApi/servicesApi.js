import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

function fetchTrendingMovies() {
  return axios.get(
    `/trending/movie/day?api_key=223b095fe306258b643bf291f91ba2e0`
  );
}
function fetchMovieById(movieId) {
  return axios.get(`
  /movie/${movieId}?api_key=223b095fe306258b643bf291f91ba2e0&language=en-US`);
}

function fetchMovieByName(query) {
  return axios.get(
    `/search/movie?api_key=223b095fe306258b643bf291f91ba2e0&language=en-US&query=${query}&page=1&include_adult=false`
  );
}

function fetchCast(id) {
  return axios.get(
    `/movie/${id}/credits?api_key=223b095fe306258b643bf291f91ba2e0&language=en-US`
  );
}
function fetchReview(id) {
  return axios.get(
    `/movie/${id}/reviews?api_key=223b095fe306258b643bf291f91ba2e0&language=en-US&page=1`
  );
}

export default {
  fetchTrendingMovies,
  fetchMovieById,
  fetchMovieByName,
  fetchCast,
  fetchReview,
};
