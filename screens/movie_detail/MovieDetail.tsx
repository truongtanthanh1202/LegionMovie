import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { lazy } from "react";
import styles from "./Style";
import {
  Feather,
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import { Colors } from "../../constant/Color";
import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import { SIZES } from "../../constant/Constant";
import { Categories } from "../../constant/Categories";
import {
  fetchMovieCreditsInfo,
  fetchMoviesReviews,
  fetchSimilarMovies,
  fetchTrailerMovies,
  fetchTvSeriesCreditsInfo,
} from "../../redux/api/movietmdb";
import { MyListHook } from "../../redux/hook/HandlerMyListHook";
import TrailerCard from "./TrailerCard";
import { Tabs, MaterialTabBar } from "react-native-collapsible-tab-view";
import MovieCard from "../../components/atoms/movie_card";

const MovieDetail = ({ navigation, route }) => {
  const {
    handlerAddMyListItem,
    handlerRemoveMyListItem,
    handlerGetMyListItem,
    handlerFilterMyListItem,
    checkDuplicate,
  } = MyListHook();

  const [showFullDescription, setShowFullDescription] = React.useState(false);
  const [castsInfo, setCastInfo] = React.useState([]);
  const [trailer, setTrailer] = React.useState([]);
  const [similarMovies, setSimilarMovies] = React.useState([]);
  const [moviesReviews, setMoviesReviews] = React.useState([]);

  const { movieItem } = route.params;
  const movieID = movieItem.id;
  const posterPath = movieItem.poster_path;
  const movieName = movieItem.title;
  const tvName = movieItem?.name;
  const vote_average = movieItem.vote_average;
  const vote_count = movieItem.vote_count;
  const genre_ids = movieItem.genre_ids;
  const overview = movieItem.overview;

  const isMovieDuplicate = checkDuplicate(movieID);
  const handerAddThisFilmToMylist = () => {
    if (isMovieDuplicate) {
      handlerAddMyListItem({
        id: movieItem.id,
        poster_path: movieItem.poster_path,
        title: movieItem.title,
        name: movieItem?.name,
        vote_average: movieItem.vote_average,
        vote_count: movieItem.vote_count,
        genre_ids: movieItem.genre_ids,
        overview: movieItem.overview,
      });
    }
  };
  const handlerRemoveThisFilmInMyList = () => {
    handlerRemoveMyListItem(movieID);
  };

  const handlerPlayVideo = () => {
    console.log(trailer);
  };

  React.useEffect(() => {
    getCastsMovieData();
    // getCastsTvSeriesData();
    getTrailerMovies();
    getMoviesReview();
    getSimilarMovies();
  }, []);

  const getCastsMovieData = async () => {
    const data = await fetchMovieCreditsInfo(movieID);
    if (data && data.cast) setCastInfo(data.cast);
  };

  const getCastsTvSeriesData = async () => {
    const data = await fetchTvSeriesCreditsInfo(movieID);
    if (data && data.cast) setCastInfo(data.cast);
  };

  const getTrailerMovies = async () => {
    const data = await fetchTrailerMovies(movieID);
    if (data) setTrailer(data.results);
  };

  const getMoviesReview = async () => {
    const data = await fetchMoviesReviews(movieID);
    if (data) setMoviesReviews(data.results);
  };

  const getSimilarMovies = async () => {
    const data = await fetchSimilarMovies(movieID);
    if (data) setSimilarMovies(data.results);
  };

  const renderFlatListHeader = () => {
    return (
      <>
        <ImageBackground
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: `https://image.tmdb.org/t/p/w500${posterPath}`,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
              marginHorizontal: 20,
            }}
          >
            <TouchableOpacity
              style={styles.shadow}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <AntDesign
                name="arrowleft"
                size={24}
                color={Colors.primaryColorLight}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shadow}>
              <Feather name="airplay" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        {/* Body */}
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          {/* Film name, saved, share */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ maxWidth: SIZES.width * 0.8 }}>
              <Text
                style={{
                  ...styles.filmTitle,
                  fontFamily: "Urbanist_500Medium",
                  flex: 1,
                }}
                numberOfLines={1}
              >
                {movieName || tvName}
              </Text>
            </View>
            <View style={{ flexDirection: "row", gap: 14 }}>
              <TouchableOpacity
                style={styles.shadow}
                onPress={handerAddThisFilmToMylist}
              >
                <MaterialCommunityIcons
                  name="bookmark-minus-outline"
                  size={20}
                  color={isMovieDuplicate ? "white" : Colors.primaryColorLight}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.shadow}>
                <Ionicons name="paper-plane-outline" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Rating container (star, votes, add my list) */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 12,
              gap: 12,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome
                name="star-half-empty"
                size={16}
                color={Colors.primaryColorDark}
                style={{ marginRight: 10 }}
              />
              <Text
                style={{
                  fontFamily: "Urbanist_400Regular",
                  fontSize: 14,
                  color: Colors.primaryColorDark,
                  marginRight: 4,
                }}
              >
                {vote_average.toFixed(1)}
              </Text>
              <Feather
                name="chevron-right"
                size={20}
                color={Colors.primaryColorDark}
              />
              <Text
                style={{
                  fontFamily: "Urbanist_500Medium",
                  fontSize: 14,
                  color: "white",
                  marginHorizontal: 8,
                  letterSpacing: 0.6,
                }}
              >
                {vote_count} votes
              </Text>
            </TouchableOpacity>

            {isMovieDuplicate ? (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  gap: 4,
                  borderWidth: 1.6,
                  borderColor: "white",
                  alignItems: "center",
                  paddingHorizontal: 6,
                  paddingVertical: 4,
                  borderRadius: 6,
                }}
                onPress={handerAddThisFilmToMylist}
              >
                <AntDesign name="plus" size={14} color="white" />
                <Text
                  style={{
                    color: "white",
                    fontSize: 14,
                    fontFamily: "Urbanist_400Regular",
                  }}
                >
                  My List
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  gap: 4,
                  borderWidth: 1.6,
                  borderColor: "white",
                  alignItems: "center",
                  paddingHorizontal: 6,
                  paddingVertical: 4,
                  borderRadius: 6,
                }}
                onPress={handlerRemoveThisFilmInMyList}
              >
                <Ionicons
                  name="remove-circle-outline"
                  size={14}
                  color="white"
                />
                <Text
                  style={{
                    color: "white",
                    fontSize: 14,
                    fontFamily: "Urbanist_400Regular",
                  }}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Play, download btn */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              marginTop: 16,
            }}
          >
            <TouchableOpacity style={styles.button} onPress={handlerPlayVideo}>
              <View
                style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
              >
                <Ionicons name="play-circle" size={20} color="white" />
                <Text
                  style={{
                    ...styles.textInBtn,
                    fontFamily: "Urbanist_500Medium",
                  }}
                >
                  Play
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.button,
                backgroundColor: Colors.backgroundColor,
              }}
            >
              <View
                style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
              >
                <AntDesign
                  name="clouddownload"
                  size={20}
                  color={Colors.primaryColorDark}
                />
                <Text
                  style={{
                    ...styles.textInBtn,
                    fontFamily: "Urbanist_500Medium",
                    color: Colors.primaryColorDark,
                  }}
                >
                  Download
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Film overview */}
          <View style={{ marginTop: 16 }}>
            <View style={{ flexDirection: "row", gap: 1 }}>
              <Text
                style={{
                  ...styles.textInBtn,
                  fontFamily: "Urbanist_400Regular",
                  letterSpacing: 0,
                  fontSize: 14,
                }}
              >
                Genre:{" "}
              </Text>
              {genre_ids.map((item: number, index: number) => {
                return (
                  <Text
                    key={index}
                    style={{
                      ...styles.textInBtn,
                      fontFamily: "Urbanist_400Regular",
                      letterSpacing: 0,
                      fontSize: 14,
                    }}
                  >
                    {Categories.MOVIES[item]}
                    {", "}
                  </Text>
                );
              })}
              <Text
                style={{
                  ...styles.textInBtn,
                  fontFamily: "Urbanist_400Regular",
                  letterSpacing: 0,
                  fontSize: 14,
                }}
              >
                ...
              </Text>
            </View>
            <View style={{ position: "relative" }}>
              <Text
                style={{
                  ...styles.textInBtn,
                  fontFamily: "Urbanist_400Regular",
                  fontSize: 12,
                  marginTop: 8,
                }}
                numberOfLines={!showFullDescription ? 3 : 0}
              >
                {overview}
              </Text>
              <TouchableOpacity
                activeOpacity={0.4}
                style={{ alignSelf: "center" }}
                onPress={() => {
                  setShowFullDescription(!showFullDescription);
                }}
              >
                <Text
                  style={{
                    ...styles.textInBtn,
                    fontFamily: "Urbanist_400Regular",
                    fontSize: 12,
                    color: Colors.primaryColorDark,
                  }}
                >
                  {!showFullDescription ? "View More" : "Show less"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Cast slider */}
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View
                style={{ flexDirection: "row", gap: 16, marginVertical: 16 }}
              >
                {castsInfo.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        flexDirection: "row",
                        gap: 8,
                        alignItems: "center",
                      }}
                    >
                      <Image
                        style={{ width: 44, height: 44, borderRadius: 44 }}
                        source={{
                          uri: `https://image.tmdb.org/t/p/w200${item?.profile_path}`,
                        }}
                      />
                      <View>
                        <Text
                          style={{
                            ...styles.castName,
                            fontFamily: "Urbanist_500Medium",
                          }}
                        >
                          {item?.name}
                        </Text>
                        <Text
                          style={{
                            ...styles.castCharacter,
                            fontFamily: "Urbanist_400Regular",
                          }}
                        >
                          {item?.character}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>
      </>
    );
  };

  const tabBar = (props) => (
    <MaterialTabBar
      {...props}
      indicatorStyle={{ backgroundColor: Colors.primaryColorLight }}
      style={{ backgroundColor: Colors.backgroundColor, marginBottom: 6 }}
      labelStyle={{
        fontSize: 14,
        fontFamily: "Urbanist_700Bold",
        letterSpacing: 0.4,
      }}
      inactiveColor={Colors.textDark}
      activeColor={Colors.primaryColorLight}
    />
  );

  let [fontsLoaded, fontError] = useFonts({
    Urbanist_700Bold,
    Urbanist_500Medium,
    Urbanist_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeContainer}>
        <Tabs.Container
          renderHeader={renderFlatListHeader}
          headerContainerStyle={{ backgroundColor: Colors.backgroundColor }}
          renderTabBar={tabBar}
        >
          <Tabs.Tab name="Trailer">
            <Tabs.FlatList
              data={trailer}
              keyExtractor={(item) => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <View style={{ marginVertical: 8 }} key={index}>
                    <TrailerCard trailerInfo={item}></TrailerCard>
                  </View>
                );
              }}
            />
          </Tabs.Tab>

          <Tabs.Tab name="Comment">
            <Tabs.ScrollView>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 16,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Urbanist_700Bold",
                    letterSpacing: 0.6,
                    fontSize: 20,
                    color: "white",
                    marginLeft: 20,
                  }}
                >
                  {moviesReviews.length} Reviews
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: "Urbanist_500Medium",
                      letterSpacing: 0.4,
                      fontSize: 14,
                      color: Colors.primaryColorLight,
                      marginRight: 20,
                    }}
                  >
                    See all
                  </Text>
                </TouchableOpacity>
              </View>
              {moviesReviews.length > 0 &&
                moviesReviews
                  .filter((item) => {
                    return item.author_details.avatar_path != null;
                  })
                  .map(({ item, index }) => {
                    return (
                      <View
                        style={{ marginHorizontal: 20, marginVertical: 20 }}
                        key={index}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            gap: 12,
                            alignItems: "center",
                            marginBottom: 16,
                          }}
                        >
                          <Image
                            style={{ width: 36, height: 36, borderRadius: 36 }}
                            source={{
                              uri: `https://image.tmdb.org/t/p/w200${item?.author_details?.avatar_path}`,
                            }}
                          />
                          <Text
                            style={{
                              color: "white",
                              fontSize: 16,
                              fontFamily: "Urbanist_700Bold",
                              letterSpacing: 0.4,
                            }}
                          >
                            {item?.author}
                          </Text>
                        </View>
                        <Text
                          style={{
                            color: "white",
                            fontSize: 14,
                            fontFamily: "Urbanist_400Regular",
                          }}
                        >
                          {item?.content?.length > 200
                            ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                            : item?.content}
                        </Text>
                      </View>
                    );
                  })}
            </Tabs.ScrollView>
          </Tabs.Tab>

          <Tabs.Tab name="More Like This">
            <Tabs.FlatList
              data={similarMovies.filter((item) => {
                return item.vote_average > 0;
              })}
              numColumns={2}
              keyExtractor={(item) => item.id.toString()}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{ justifyContent: "center" }}
              renderItem={({ item, index }) => (
                <View style={{ margin: 10 }} key={index}>
                  <MovieCard movieItem={item} size="XL" setTitle={true} />
                </View>
              )}
            />
          </Tabs.Tab>
        </Tabs.Container>
      </SafeAreaView>
    </View>
  );
};

export default MovieDetail;
