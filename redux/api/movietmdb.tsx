import axios from "axios";

// endpoints
const trendingMoviesDayEndpoint = `https://api.themoviedb.org/3/trending/movie/day`;
const trendingMoviesWeekEndpoint = `https://api.themoviedb.org/3/trending/movie/week`;
const trendingTvSeasonEndpoint = `https://api.themoviedb.org/3/trending/tv/day`;
const newRealeaseMoviesEndpoint = `https://api.themoviedb.org/3/movie/now_playing`;
const searchTVMoviesEndpoint = `https://api.themoviedb.org/3/search/multi`;

const apiCall = async (endpoint: string) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2QwMDE2ODM5ZDcyYWMyYzdjYTQ0NjI2MzgwMWNiNiIsInN1YiI6IjY1MTk4YjE4OTY3Y2M3MzQyOGNiNjM2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L-6mhWsDd3sObCq9gGqmFFce0ld82Aalz3jvZhqc-Uw",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

const filterTvMovies = (item: any) => {
  return item.media_type != "person";
};
const apiSearch = async (endpoint: string, query: string) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: {
      query: query,
      include_adult: "false",
      language: "en-US",
      page: "1",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2QwMDE2ODM5ZDcyYWMyYzdjYTQ0NjI2MzgwMWNiNiIsInN1YiI6IjY1MTk4YjE4OTY3Y2M3MzQyOGNiNjM2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L-6mhWsDd3sObCq9gGqmFFce0ld82Aalz3jvZhqc-Uw",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.results.filter(filterTvMovies);
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const fetchTrendingMoviesDay = () => {
  return apiCall(trendingMoviesDayEndpoint);
};

export const fetchTrendingMoviesWeek = () => {
  return apiCall(trendingMoviesWeekEndpoint);
};

export const fetchTrendingTvSeason = () => {
  return apiCall(trendingTvSeasonEndpoint);
};

export const fetchNewRealeaseMovies = () => {
  return apiCall(newRealeaseMoviesEndpoint);
};

export const fetchSearchTvMovie = (query: string) => {
  return apiSearch(searchTVMoviesEndpoint, query);
};

export const fetchMovieCreditsInfo = (id: string) => {
  return apiCall(`https://api.themoviedb.org/3/movie/${id}/credits`);
};
