export interface MovieItemProperties {
  id: number;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  overview: string;
}

import { createSlice } from "@reduxjs/toolkit";

export const MyListSlice = createSlice({
  name: "MyList",
  initialState: {
    numberCart: 0,
    MyListItem: [],
  },
  reducers: {
    addMyListItem: (state, action) => {
      state.numberCart++;
      state.MyListItem.push(action.payload);
    },
    removeMyListItem: (state, action) => {
      state.numberCart--;
      state.MyListItem = state.MyListItem.filter((item) => {
        return item.id != action.payload;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMyListItem, removeMyListItem } = MyListSlice.actions;

export default MyListSlice.reducer;
