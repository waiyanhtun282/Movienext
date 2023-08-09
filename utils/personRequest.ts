const API_KEY = process.env.MOVIE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
export const imagePath = "https://image.tmdb.org/t/p/original"

const peopleRequests = {
  fetchPopular: `${BASE_URL}/person/popular?api_key=09a303f90fca409cf37d0a9d33c7cbde&language=en-US&page=1`,
};

export default peopleRequests;