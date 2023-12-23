import axios from "axios";

// endpoints
const trendingMoviesDayEndpoint = `https://api.themoviedb.org/3/trending/movie/day`;
const trendingMoviesWeekEndpoint = `https://api.themoviedb.org/3/trending/movie/week`;
const trendingTvSeriesDayEndpoint = `https://api.themoviedb.org/3/trending/tv/day`;
const trendingTvSeriesWeekEndpoint = `https://api.themoviedb.org/3/trending/tv/week`;
const newRealeaseMoviesEndpoint = `https://api.themoviedb.org/3/movie/now_playing`;
const newRealeaseTvSeriesEndpoint = `https://api.themoviedb.org/3/tv/airing_today`;
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

export const fetchTrendingTvSeriesDay = () => {
  return apiCall(trendingTvSeriesDayEndpoint);
};

export const fetchTrendingTvSeriesWeek = () => {
  return apiCall(trendingTvSeriesWeekEndpoint);
};

export const fetchNewRealeaseMovies = () => {
  return apiCall(newRealeaseMoviesEndpoint);
};

export const fetchNewRealeaseTvSeries = () => {
  return apiCall(newRealeaseTvSeriesEndpoint);
};

export const fetchSearchTvMovie = (query: string) => {
  return apiSearch(searchTVMoviesEndpoint, query);
};

export const fetchMovieCreditsInfo = (id: string) => {
  return apiCall(`https://api.themoviedb.org/3/movie/${id}/credits`);
};

export const fetchTvSeriesCreditsInfo = (id: string) => {
  return apiCall(`https://api.themoviedb.org/3/tv/${id}/credits`);
};

export const fetchTrailerMovies = (id: string) => {
  return apiCall(`https://api.themoviedb.org/3/movie/${id}/videos`);
};

export const fetchTrailerTVs = (id: string) => {
  return apiCall(`https://api.themoviedb.org/3/tv/${id}/videos`);
};

export const fetchMoviesReviews = (id: string) => {
  return apiCall(`https://api.themoviedb.org/3/movie/${id}/reviews`);
};

export const fetchSimilarMovies = (id: string) => {
  return apiCall(`https://api.themoviedb.org/3/movie/${id}/similar`);
};

export const fetchSimilarTVs = (id: string) => {
  return apiCall(`https://api.themoviedb.org/3/tv/${id}/similar`);
};
