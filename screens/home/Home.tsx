import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./Style";
import { Feather, AntDesign } from "@expo/vector-icons";
import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import { Categories } from "../../constant/Categories";
import MovieSlider from "../../components/group/movie_slider";
import { FilmStoreHook } from "../../redux/hook/HandlerFilmStoreHook";

const Home = () => {
  const {
    getTrendingMoviesDay,
    getTrendingMoviesWeek,
    getTrendingTvSeriesDay,
    getTrendingTvSeriesWeek,
    getNewRealeaseMovies,
    getNewRealeaseTvSeries,
  } = FilmStoreHook();

  const ListTrendingMoviesDay = getTrendingMoviesDay();
  const ListTrendingMoviesWeek = getTrendingMoviesWeek();
  const ListTrendingTvSeriesDay = getTrendingTvSeriesDay();
  const ListTrendingTvSeriesWeek = getTrendingTvSeriesWeek();
  const ListNewRealeaseMovies = getNewRealeaseMovies();
  const ListNewRealeaseTvSeries = getNewRealeaseTvSeries();

  const randomTrendingMovies =
    ListTrendingMoviesWeek[
      Math.floor(Math.random() * ListTrendingMoviesWeek.length)
    ];

  const imageBgUrl = {
    uri: `https://image.tmdb.org/t/p/w500${randomTrendingMovies?.poster_path}`,
  };

  const listScrollviewRender = [
    {
      title: "Top Movies This Week",
      data: ListTrendingMoviesWeek,
    },
    {
      title: "New Realease Movie",
      data: ListNewRealeaseMovies,
    },
    {
      title: "Trending TV Series this Week",
      data: ListTrendingTvSeriesWeek,
    },
    {
      title: "TV Series On Air",
      data: ListNewRealeaseTvSeries,
    },
  ];

  let [fontsLoaded, fontError] = useFonts({
    Urbanist_700Bold,
    Urbanist_500Medium,
    Urbanist_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  console.log("re-render home");

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.safeContainer}>
        <ImageBackground
          source={imageBgUrl}
          resizeMode="cover"
          style={styles.image}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Image
              source={require("../../assets/images/legion-logo-removebg.png")}
              style={{ width: 68, height: 40 }}
            />
            <View
              style={{
                flexDirection: "row",
                gap: 16,
                marginRight: 20,
                opacity: 0.8,
              }}
            >
              <TouchableOpacity>
                <Feather name="search" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="bell" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 60 }}></View>
          <View
            style={{
              marginHorizontal: 20,
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                ...styles.filmTitle,
                ...styles.textShadow,
                fontFamily: "Urbanist_700Bold",
              }}
            >
              {randomTrendingMovies?.title}
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 2,
                maxWidth: 300,
                marginTop: 8,
              }}
            >
              {randomTrendingMovies?.genre_ids &&
                randomTrendingMovies?.genre_ids.map((item: any, index: any) => {
                  return (
                    <Text
                      key={index}
                      style={{
                        ...styles.filmCatefories,
                        ...styles.textShadow,
                        fontFamily: "Urbanist_400Regular",
                      }}
                    >
                      {Categories.MOVIES[item]}
                      {","}
                    </Text>
                  );
                })}
            </View>
            <View style={{ flexDirection: "row", gap: 10, marginTop: 8 }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ ...styles.playButton }}
              >
                <AntDesign name="play" size={12} color="white" />
                <Text
                  style={{
                    ...styles.filmCatefories,
                    ...styles.textShadow,
                    fontSize: 14,
                    fontFamily: "Urbanist_700Bold",
                  }}
                >
                  Play
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  ...styles.buttonShadow,
                  ...styles.playButton,
                  borderWidth: 2,
                  borderColor: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                }}
              >
                <AntDesign name="plus" size={14} color="white" />
                <Text
                  style={{
                    ...styles.filmCatefories,
                    ...styles.textShadow,
                    fontSize: 14,
                    fontFamily: "Urbanist_700Bold",
                  }}
                >
                  My List
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        {listScrollviewRender.map((item, index) => {
          return (
            <View style={{ marginTop: 20, marginLeft: 16 }} key={index}>
              <MovieSlider title={item.title} listMoviesData={item.data} />
            </View>
          );
        })}
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
