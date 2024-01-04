import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import MyListSlice from "./slice/MyListSlice";
import FilmStoreSlice from "./slice/FilmStoreSlice";
import AuthenticationSlice from "./slice/AuthenticationSlice";
import UserProfileSlice from "./slice/UserProfileSlice";
import FilmDownloadSlice from "./slice/FilmDownloadSlice";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = configureStore({
  reducer: {
    MyList: MyListSlice,
    FilmStore: FilmStoreSlice,
    Authentication: AuthenticationSlice,
    UserProfile: UserProfileSlice,
    FilmDownload: FilmDownloadSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
