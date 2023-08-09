const API_KEY = process.env.MOVIE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const tvRequests = {
  fetchPopular: `https://api.themoviedb.org/3/tv/popular?api_key=09a303f90fca409cf37d0a9d33c7cbde&language=en-US&page=1`,
  fetchTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=09a303f90fca409cf37d0a9d33c7cbde&language=en-US&page=1`,
  fetchOnTheAir: `https://api.themoviedb.org/3/tv/on_the_air?api_key=09a303f90fca409cf37d0a9d33c7cbde&language=en-US&page=1`,
};

export default tvRequests;