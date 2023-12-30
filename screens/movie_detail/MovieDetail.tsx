import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import React from "react";
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
  fetchSimilarMovies,
  fetchTrailerMovies,
  fetchTvSeriesCreditsInfo,
  fetchSimilarTVs,
  fetchTrailerTVs,
} from "../../redux/api/movietmdb";
import { MyListHook } from "../../redux/hook/HandlerMyListHook";
import TrailerCard from "./TrailerCard";
import { Tabs, MaterialTabBar } from "react-native-collapsible-tab-view";
import MovieCard from "../../components/atoms/movie_card";
import VideoHeader from "./VideoHeader";
import * as FileSystem from "expo-file-system";

const mockReviews = [
  {
    author: "bradley",
    author_details: {
      name: "bradley",
      username: "ivebeenspringlocked",
      avatar_path: "/yyyRXn3sLTq9NTL4sNpJ2gJAcBe.png",
      rating: 9,
    },
    content:
      "FNAF was great, Kinda wish it had blood, Every kill was offscreen or really dark and you cant really see the kill.",
    created_at: "2023-10-26T11:17:37.038Z",
    id: "653a4ad08a0e9b010b29016c",
    updated_at: "2023-11-01T16:19:28.585Z",
    url: "https://www.themoviedb.org/review/653a4ad08a0e9b010b29016c",
  },
  {
    author: "MustachedMovieMan",
    author_details: {
      name: "",
      username: "MustachedMovieMan",
      avatar_path: "/eQAHVuTOyW6IkFzm9llwW8Czj4l.png",
      rating: 7,
    },
    content:
      "I don't really get what all the negative reviews are about.\r\nIt's not the best movie ever or that I've seen this year, but I still had a good time watching it. The story was interesting, it had some scary parts, some humorous parts, lots of tension, was well-acted, well-shot, and the effects (both practical and CGI) were well-done. Also, the production design and creature design was great.\r\n\r\nA movie doesn't have to be restricted to either being \"the best\" or \"horrible.\" The theater I saw it in was packed, the audience was responsive and seemed to be loving it, and I myself enjoyed it.\r\n\r\nI didn't really play the games, but I was definitely engaged in the lore of some of the MatPat Game Theory videos I saw. And I could tell from audience reactions that there were some cool things in the movie if you knew the games. That's not a negative, to be clear. It's always really cool when filmmakers put things in movies that true fans would catch and geek-out about.\r\n\r\nAs far as being a viewer who didn't really play the games, I enjoyed the movie. And while I think knowing the games/lore would have definitely enhanced my enjoyment and enthusiasm, I wouldn't say it lacks as a movie or that the games are \"required viewing\" for those who haven't played them. Everything's explained pretty well.\r\n\r\nAs far as the horror aspect goes, it is PG-13; I saw some reviews complaining about the lack of gore... It's PG-13. C'mon guys.\r\nBut, that being said, I thought they still did a good job with the horror elements that were present.\r\n\r\nI also really liked the trio of main characters. I thought Josh Hutcherson, Piper Rubio, and Elizabeth Lail all did a good job.\r\nAlso, I'm glad Josh Hutcherson is back. I hope he'll continue to be in more movies.",
    created_at: "2023-10-27T19:10:26.626Z",
    id: "653c0b22564ec700e5fa4168",
    updated_at: "2023-11-01T16:19:08.485Z",
    url: "https://www.themoviedb.org/review/653c0b22564ec700e5fa4168",
  },
  {
    author: "CinemaSerf",
    author_details: {
      name: "CinemaSerf",
      username: "Geronimo1967",
      avatar_path: "/1kks3YnVkpyQxzw36CObFPvhL5f.jpg",
      rating: 5,
    },
    content:
      'Didn\'t Josh Hutcherson used to be famous? Well here he is reduced to the role of the struggling brother of "Abby" (Piper Rubio). Their aunt (Mary Stuart Masterson) is determined that this hapless bag of bones isn\'t fit to look after the young girl - after he takes out a visiting father in the fountain of a shopping mall and gets fired; so "Mike" has to get another job! Opportunities are thin on the ground, but there is a vacancy doing the security night shift and an old, derelict, pizza parlour. How hard can it be? Well a meeting with the enigmatic police officer "Vanessa" (Elizabeth Lail) should have rung alarm bells, and when he has to take "Abby" there for one overnight shift - well it\'s soon clear that this place has secrets to keep and that it knows how to manipulate the hopes and fears of "Mike" and his sister. Can they stay sane and focussed long enough to survive this maze of malevolent mechanical bunnies? I\'m afraid the presence of Matthew Lillard never helps a film, and here is no different - this is just a rather nonsensical attempt at a spooky mystery that certainly has nothing to make you jump. Rubio is actually quite decent, but there\'s isn\'t enough else happening to compensate for the very slow build up, surfeit of dialogue and frankly rather silly underlying premiss. I suppose as Halloween gets bigger and bigger, we are going to get more and more of these mediocre offerings - but despite it\'s more prominent cast, this just belongs on the Horror channel at 2am.',
    created_at: "2023-11-02T09:34:31.341Z",
    id: "65436d2741a561336b763051",
    updated_at: "2023-11-02T09:34:31.443Z",
    url: "https://www.themoviedb.org/review/65436d2741a561336b763051",
  },
];

const MovieDetail = ({ navigation, route }) => {
  const {
    handlerAddMyListItem,
    handlerRemoveMyListItem,
    handlerGetMyListItem,
    handlerFilterMyListItem,
    checkDuplicate,
  } = MyListHook();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalType, setModalType] = React.useState("");

  const [showFullDescription, setShowFullDescription] = React.useState(false);
  const [castsInfo, setCastInfo] = React.useState([]);
  const [trailer, setTrailer] = React.useState([]);
  const [similarMovies, setSimilarMovies] = React.useState([]);
  const [moviesReviews, setMoviesReviews] = React.useState(mockReviews);

  const { movieItem } = route.params;
  const movieID = movieItem.id;
  const posterPath = movieItem?.poster_path;
  const backdropPath = movieItem?.backdrop_path;
  const movieName = movieItem.title;
  const tvName = movieItem?.name;
  const vote_average = movieItem.vote_average;
  const vote_count = movieItem.vote_count;
  const genre_ids = movieItem.genre_ids;
  const overview = movieItem.overview;

  React.useEffect(() => {
    console.log("movie name: " + movieName);
    console.log("tv name: " + tvName);
  }, []);

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
    navigation.navigate("VideoScreen");
  };

  const handlerToCommentScreen = () => {
    navigation.navigate("Comments", {
      commentGroup: moviesReviews,
    });
  };

  React.useEffect(() => {
    if (tvName) {
      getCastsTvSeriesData();
      getTrailerTVs();
      getSimilarTVs();
    }
    if (movieName) {
      getCastsMovieData();
      getTrailerMovies();
      getSimilarMovies();
    }
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

  const getTrailerTVs = async () => {
    const data = await fetchTrailerTVs(movieID);
    if (data) setTrailer(data.results);
  };

  const getSimilarMovies = async () => {
    const data = await fetchSimilarMovies(movieID);
    if (data) setSimilarMovies(data.results);
  };

  const getSimilarTVs = async () => {
    const data = await fetchSimilarTVs(movieID);
    if (data) setSimilarMovies(data.results);
  };

  const downLoadThisMovieTv = async () => {
    const result = await FileSystem.downloadAsync(
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      FileSystem.cacheDirectory + movieID + (movieName || tvName)
    );
    console.log(result);
  };

  const showModal = (action: "Download" | "Share" | "Rating") => {};

  const renderFlatListHeader = () => {
    return (
      <>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 16,
              marginHorizontal: 20,
              position: "absolute",
              right: 0,
              left: 0,
              zIndex: 2,
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
            <TouchableOpacity
              style={{ ...styles.shadow, marginLeft: SIZES.width - 88 }}
            >
              <Feather name="airplay" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <VideoHeader posterPath={backdropPath} />
        </View>

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
              onPress={() => {
                showModal("Download");
              }}
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
                    {tvName
                      ? Categories.TV_SHOW[item]
                      : Categories.MOVIES[item]}
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

  const tabBar = (props: any) => (
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
        <Modal></Modal>
        <Tabs.Container
          renderHeader={renderFlatListHeader}
          headerContainerStyle={{ backgroundColor: Colors.backgroundColor }}
          renderTabBar={tabBar}
        >
          <Tabs.Tab name="Trailer">
            {trailer.length > 0 ? (
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
            ) : (
              <Tabs.ScrollView>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: Colors.innerFieldBackground,
                  }}
                >
                  <Text
                    style={{ fontSize: 20, color: Colors.primaryColorLight }}
                  >
                    No Data
                  </Text>
                  <Text>
                    {"This Movie/TV series has no trailer data yet :(("}
                  </Text>
                </View>
              </Tabs.ScrollView>
            )}
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
                <TouchableOpacity onPress={handlerToCommentScreen}>
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
              {moviesReviews.map((item, index) => {
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
                          uri: `https://image.tmdb.org/t/p/w200${item.author_details.avatar_path}`,
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
                        {item.author}
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 14,
                        fontFamily: "Urbanist_400Regular",
                      }}
                    >
                      {item.content.length > 200
                        ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        : item.content}
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
