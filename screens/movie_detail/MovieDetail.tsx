import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
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
  Urbanist_600SemiBold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import { SIZES } from "../../constant/Constant";
import { Categories } from "../../constant/Categories";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Comments from "./Comments";
import Trailers from "./Trailers";
import Morefilm from "./Morefilm";
import { fetchMovieCreditsInfo } from "../../redux/api/movietmdb";
import { MyListHook } from "../../redux/hook/HandlerMyListHook";

const FirstRoute = () => {
  return <Comments />;
};
const SecondRoute = () => {
  return <Trailers />;
};
const ThirdRoute = () => {
  return <Morefilm />;
};
const renderScene = ({ route }) => {
  switch (route.key) {
    case "first":
      return <FirstRoute />;
    case "second":
      return <SecondRoute />;
    case "third":
      return <ThirdRoute />;
    default:
      return <></>;
  }
};

const MovieDetail = ({ navigation, route }) => {
  const {
    handlerAddMyListItem,
    handlerRemoveMyListItem,
    handlerGetMyListItem,
    handlerFilterMyListItem,
    checkDuplicate,
  } = MyListHook();

  const { movieItem } = route.params;

  const [showFullDescription, setShowFullDescription] = React.useState(false);
  const [castsInfo, setCastInfo] = React.useState([]);

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

  React.useEffect(() => {
    getCastsMovieData();
  }, []);

  const getCastsMovieData = async () => {
    const data = await fetchMovieCreditsInfo(movieID);
    if (data && data.cast) setCastInfo(data.cast);
  };

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Comments" },
    { key: "second", title: "Trailers" },
    { key: "third", title: "More like this" },
  ]);
  const [currentScene, setCurrentScene] = React.useState(0);

  let [fontsLoaded, fontError] = useFonts({
    Urbanist_600SemiBold,
    Urbanist_500Medium,
    Urbanist_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.safeContainer}>
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
            <TouchableOpacity style={styles.button}>
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
                          uri: `https://image.tmdb.org/t/p/w500${item?.profile_path}`,
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

          {/* Tabs view (comments, trailer, more film like this) */}
          <View
            style={{
              flex: 1,
              backgroundColor: "gray",
              height: SIZES.height,
            }}
          >
            <TabView
              navigationState={{ index, routes }}
              renderTabBar={() => {
                return (
                  <View
                    style={{
                      backgroundColor: Colors.backgroundColor,
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        flex: 33,
                        paddingVertical: 10,
                        borderBottomColor:
                          index == 0 ? Colors.primaryColorLight : "transparent",
                        borderBottomWidth: 3,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Urbanist_500Medium",
                          color:
                            index == 0 ? Colors.primaryColorLight : "white",
                          fontSize: 16,
                          textAlign: "center",
                        }}
                      >
                        Comments
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 33,
                        paddingVertical: 10,
                        borderBottomColor:
                          index == 1 ? Colors.primaryColorLight : "transparent",
                        borderBottomWidth: 3,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Urbanist_500Medium",
                          color:
                            index == 1 ? Colors.primaryColorLight : "white",
                          fontSize: 16,
                          textAlign: "center",
                        }}
                      >
                        Trailers
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 33,
                        paddingVertical: 10,
                        borderBottomColor:
                          index == 2 ? Colors.primaryColorLight : "transparent",
                        borderBottomWidth: 3,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Urbanist_500Medium",
                          color:
                            index == 2 ? Colors.primaryColorLight : "white",
                          fontSize: 16,
                          textAlign: "center",
                        }}
                      >
                        More like this
                      </Text>
                    </View>
                  </View>
                );
              }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{ width: SIZES.width }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default MovieDetail;
