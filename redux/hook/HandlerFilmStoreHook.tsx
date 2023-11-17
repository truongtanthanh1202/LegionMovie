import { useAppDispatch, useAppSelector } from "../store";
import { RootState } from "../store";
import {
  getAllFilmData,
  SetTrendingMoviesDay,
  SetTrendingMoviesWeek,
  SetTrendingTvSeriesDay,
  SetTrendingTvSeriesWeek,
  SetNewRealeaseMovies,
  SetNewRealeaseTvSeries,
} from "../slice/FilmStoreSlice";

export const FilmStoreHook = () => {
  const dispatch = useAppDispatch();
  const {
    TrendingMoviesDay,
    TrendingMoviesWeek,
    TrendingTvSeriesDay,
    TrendingTvSeriesWeek,
    NewRealeaseMovies,
    NewRealeaseTvSeries,
  } = useAppSelector((state: RootState) => state.FilmStore);

  const getTrendingMoviesDay = () => {
    return TrendingMoviesDay;
  };
  const getTrendingMoviesWeek = () => {
    return TrendingMoviesWeek;
  };
  const getTrendingTvSeriesDay = () => {
    return TrendingTvSeriesDay;
  };
  const getTrendingTvSeriesWeek = () => {
    return TrendingTvSeriesWeek;
  };
  const getNewRealeaseMovies = () => {
    return NewRealeaseMovies;
  };
  const getNewRealeaseTvSeries = () => {
    return NewRealeaseTvSeries;
  };

  const handlerSetTrendingMoviesDay = (data: Object[]) => {
    dispatch(SetTrendingMoviesDay(data));
  };
  const handlerSetTrendingMoviesWeek = (data: Object[]) => {
    dispatch(SetTrendingMoviesWeek(data));
  };
  const handlerSetTrendingTvSeriesDay = (data: Object[]) => {
    dispatch(SetTrendingTvSeriesDay(data));
  };
  const handlerSetTrendingTvSeriesWeek = (data: Object[]) => {
    dispatch(SetTrendingTvSeriesWeek(data));
  };
  const handlerSetNewRealeaseMovies = (data: Object[]) => {
    dispatch(SetNewRealeaseMovies(data));
  };
  const handlerSetNewRealeaseTvSeries = (data: Object[]) => {
    dispatch(SetNewRealeaseTvSeries(data));
  };

  return {
    getTrendingMoviesDay,
    getTrendingMoviesWeek,
    getTrendingTvSeriesDay,
    getTrendingTvSeriesWeek,
    getNewRealeaseMovies,
    getNewRealeaseTvSeries,
    handlerSetTrendingMoviesDay,
    handlerSetTrendingMoviesWeek,
    handlerSetTrendingTvSeriesDay,
    handlerSetTrendingTvSeriesWeek,
    handlerSetNewRealeaseMovies,
    handlerSetNewRealeaseTvSeries,
  };
};
