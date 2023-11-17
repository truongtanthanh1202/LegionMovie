import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import styles from "./Style";

import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import { Colors } from "../../constant/Color";
import { Ionicons } from "@expo/vector-icons";
import { debounce } from "lodash";
import { fetchSearchTvMovie } from "../../redux/api/movietmdb";
import MovieCard from "../../components/atoms/movie_card";
import PageNotFound from "../../assets/svg/PageNotFound";
import ExploreSearch from "../../assets/svg/ExploreSearch";

const Explore = () => {
  const [searchMoviesList, setSearchMoviesList] = React.useState([]);
  const [inputFocused, setInputFocused] = React.useState(false);
  const [textInput, setTextInput] = React.useState("");

  const handlerSearch = (text: string) => {
    if (text && text.length > 2) {
      getSearchTvMovie(text);
    }
  };
  const handlerDelayInputSearch = React.useCallback(
    debounce(handlerSearch, 400),
    []
  );
  const getSearchTvMovie = async (text: string) => {
    const data = await fetchSearchTvMovie(text);
    if (data) setSearchMoviesList(data);
    console.log(data);
  };

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
      <KeyboardAvoidingView style={{ flex: 1, width: "100%" }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={{ ...styles.container, marginHorizontal: 16 }}>
            <View style={styles.topSearch}>
              <TextInput
                style={{
                  ...styles.inputText,
                  fontFamily: "Urbanist_500Medium",
                  fontSize: 14,
                  letterSpacing: 1,
                  flex: 80,
                  borderColor: !inputFocused
                    ? Colors.innerFieldBackground
                    : Colors.primaryColorDark,
                  backgroundColor: !inputFocused
                    ? Colors.innerFieldBackground
                    : Colors.innerFieldBackgroundActive,
                  borderWidth: 1,
                }}
                placeholder="search"
                placeholderTextColor={Colors.textDark}
                onChangeText={(text: string) => {
                  handlerDelayInputSearch(text);
                  setTextInput(text);
                }}
                onFocus={() => {
                  setInputFocused(true);
                }}
                onBlur={() => {
                  setInputFocused(false);
                }}
              />
              <TouchableOpacity style={styles.filterButton}>
                <Ionicons
                  name="options"
                  size={24}
                  color={Colors.primaryColorDark}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.body}>
              <>
                {textInput.length == 0 ? (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 68,
                    }}
                  >
                    <View style={{ width: 300, height: 240 }}>
                      <ExploreSearch />
                    </View>
                    <Text
                      style={{
                        ...styles.textEmpty,
                        fontFamily: "Urbanist_500Medium",
                      }}
                    >
                      Explore more Movie
                    </Text>
                    <Text
                      style={{
                        ...styles.textSubEmpty,
                        fontFamily: "Urbanist_400Regular",
                        width: 280,
                      }}
                    >
                      Search for your favorite movies and TV series by keywords
                    </Text>
                  </View>
                ) : searchMoviesList.length > 0 ? (
                  <ScrollView>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 20,
                        marginBottom: 68,
                      }}
                    >
                      {searchMoviesList &&
                        searchMoviesList
                          .filter((item) => {
                            return item.backdrop_path != null;
                          })
                          .map((item, index) => {
                            return (
                              <MovieCard
                                key={index}
                                movieItem={item}
                                size="XL"
                                setTitle={false}
                              />
                            );
                          })}
                    </View>
                  </ScrollView>
                ) : (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 68,
                    }}
                  >
                    <View style={{ width: 300, height: 240 }}>
                      <PageNotFound />
                    </View>
                    <Text
                      style={{
                        ...styles.textEmpty,
                        fontFamily: "Urbanist_500Medium",
                      }}
                    >
                      Not Found
                    </Text>
                    <Text
                      style={{
                        ...styles.textSubEmpty,
                        fontFamily: "Urbanist_400Regular",
                      }}
                    >
                      Sorry, the keyword you entered could not be found. Try to
                      check again or search with another keywords.
                    </Text>
                  </View>
                )}
              </>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Explore;
