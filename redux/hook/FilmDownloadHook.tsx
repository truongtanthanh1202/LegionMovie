import { useAppDispatch, useAppSelector } from "../store";
import { RootState } from "../store";
import {
  addMovieDownloadItem,
  removeMovieDownloadItem,
} from "../slice/FilmDownloadSlice";
import { MovieDownloadProperties } from "../slice/FilmDownloadSlice";

export const FilmDownloadHook = () => {
  const dispatch = useAppDispatch();
  const { MovieDownloadItem } = useAppSelector(
    (state: RootState) => state.FilmDownload
  );

  const getAllFilmDownload = () => {
    return MovieDownloadItem;
  };

  const handlerAddFilmDownload = (movie: MovieDownloadProperties) => {
    dispatch(addMovieDownloadItem(movie));
  };

  const handlerRemoveFilmDownload = (id: number) => {
    dispatch(removeMovieDownloadItem(id));
  };

  const checkFilmDownloaded = (id: number) => {
    let check = true;

    MovieDownloadItem.map((item, key) => {
      if (item.id === id) {
        check = false;
      }
    });

    return check;
  };

  return {
    getAllFilmDownload,
    handlerAddFilmDownload,
    handlerRemoveFilmDownload,
    checkFilmDownloaded,
  };
};
