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
  Urbanist_600SemiBold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import { Colors } from "../../constant/Color";
import { Ionicons } from "@expo/vector-icons";
import { debounce } from "lodash";
import { fetchSearchTvMovie } from "../../redux/api/movietmdb";
import MovieCard from "../../components/atoms/movie_card";

const Explore = () => {
  const [searchMoviesList, setSearchMoviesList] = React.useState([]);
  const [inputFocused, setInputFocused] = React.useState(false);

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
    Urbanist_600SemiBold,
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
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Explore;
