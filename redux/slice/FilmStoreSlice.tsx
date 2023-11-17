import { createSlice } from "@reduxjs/toolkit";

export const FilmStoreSlice = createSlice({
  name: "FilmStore",
  initialState: {
    TrendingMoviesDay: [],
    TrendingMoviesWeek: [],
    TrendingTvSeriesDay: [],
    TrendingTvSeriesWeek: [],
    NewRealeaseMovies: [],
    NewRealeaseTvSeries: [],
  },
  reducers: {
    getAllFilmData: (state, action) => {
      state;
    },
    SetTrendingMoviesDay: (state, action) => {
      state.TrendingMoviesDay.push(...action.payload);
    },
    SetTrendingMoviesWeek: (state, action) => {
      state.TrendingMoviesWeek.push(...action.payload);
    },
    SetTrendingTvSeriesDay: (state, action) => {
      state.TrendingTvSeriesDay.push(...action.payload);
    },
    SetTrendingTvSeriesWeek: (state, action) => {
      state.TrendingTvSeriesWeek.push(...action.payload);
    },
    SetNewRealeaseMovies: (state, action) => {
      state.NewRealeaseMovies.push(...action.payload);
    },
    SetNewRealeaseTvSeries: (state, action) => {
      state.NewRealeaseTvSeries.push(...action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getAllFilmData,
  SetTrendingMoviesDay,
  SetTrendingMoviesWeek,
  SetTrendingTvSeriesDay,
  SetTrendingTvSeriesWeek,
  SetNewRealeaseMovies,
  SetNewRealeaseTvSeries,
} = FilmStoreSlice.actions;

export default FilmStoreSlice.reducer;
