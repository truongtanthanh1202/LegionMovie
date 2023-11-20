import { View, Image, ActivityIndicator } from "react-native";
import React from "react";
import { Colors } from "../../constant/Color";
import styles from "./Style";
import { FilmStoreHook } from "../../redux/hook/HandlerFilmStoreHook";
import {
  fetchTrendingMoviesDay,
  fetchTrendingMoviesWeek,
  fetchTrendingTvSeriesDay,
  fetchTrendingTvSeriesWeek,
  fetchNewRealeaseMovies,
  fetchNewRealeaseTvSeries,
} from "../../redux/api/movietmdb";

const Splash = ({ navigation }) => {
  const [isLoadingData, setIsLoadingData] = React.useState(true);

  const {
    handlerSetTrendingMoviesDay,
    handlerSetTrendingMoviesWeek,
    handlerSetTrendingTvSeriesDay,
    handlerSetTrendingTvSeriesWeek,
    handlerSetNewRealeaseMovies,
    handlerSetNewRealeaseTvSeries,
  } = FilmStoreHook();

  React.useEffect(() => {
    getFilmData();
  }, []);

  React.useEffect(() => {
    if (isLoadingData == false) {
      navigation.navigate("BottomTab");
    }
  }, [isLoadingData]);

  const getFilmData = async () => {
    setIsLoadingData(true);

    const dataTrendingMoviesDay = await fetchTrendingMoviesDay();
    if (dataTrendingMoviesDay && dataTrendingMoviesDay.results) {
      handlerSetTrendingMoviesDay(dataTrendingMoviesDay.results);
    }

    const dataTrendingMoviesWeek = await fetchTrendingMoviesWeek();
    if (dataTrendingMoviesWeek && dataTrendingMoviesWeek.results) {
      handlerSetTrendingMoviesWeek(dataTrendingMoviesWeek.results);
    }

    const dataTrendingTvSeriesDay = await fetchTrendingTvSeriesDay();
    if (dataTrendingTvSeriesDay && dataTrendingTvSeriesDay.results) {
      handlerSetTrendingTvSeriesDay(dataTrendingTvSeriesDay.results);
    }

    const dataTrendingTvSeriesWeek = await fetchTrendingTvSeriesWeek();
    if (dataTrendingTvSeriesWeek && dataTrendingTvSeriesWeek.results) {
      handlerSetTrendingTvSeriesWeek(dataTrendingTvSeriesWeek.results);
    }

    const dataNewRealeaseMovies = await fetchNewRealeaseMovies();
    if (dataNewRealeaseMovies && dataNewRealeaseMovies.results) {
      handlerSetNewRealeaseMovies(dataNewRealeaseMovies.results);
    }

    const dataNewRealeaseTvSeries = await fetchNewRealeaseTvSeries();
    if (dataNewRealeaseTvSeries && dataNewRealeaseTvSeries.results) {
      handlerSetNewRealeaseTvSeries(dataNewRealeaseTvSeries.results);
    }

    setIsLoadingData(false);
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 300, height: 300, marginBottom: 60 }}
        source={require("../../assets/images/legion-logo-removebg.png")}
      />
      <ActivityIndicator size="large" color={Colors.redDark} />
    </View>
  );
};

export default Splash;
