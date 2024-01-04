export interface MovieDownloadProperties {
  id: number;
  poster_path: string;
  name: string;
  local_path: string;
}

import { createSlice } from "@reduxjs/toolkit";

export const FilmDownloadSlice = createSlice({
  name: "FilmDownload",
  initialState: {
    MovieDownloadItem: [],
  },
  reducers: {
    addMovieDownloadItem: (state, action) => {
      state.MovieDownloadItem.push(action.payload);
    },
    removeMovieDownloadItem: (state, action) => {
      state.MovieDownloadItem = state.MovieDownloadItem.filter((item) => {
        return item.id != action.payload;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMovieDownloadItem, removeMovieDownloadItem } =
  FilmDownloadSlice.actions;

export default FilmDownloadSlice.reducer;
