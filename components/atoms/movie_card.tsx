import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SIZES } from "../../constant/Constant";
import { Colors } from "../../constant/Color";
import {
  useFonts,
  Urbanist_600SemiBold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import { useNavigation } from "@react-navigation/native";

const MovieCard = ({ movieItem, size, setTitle }) => {
  const navigation = useNavigation();
  const imageBgUrl = {
    uri: `https://image.tmdb.org/t/p/original${movieItem?.poster_path}`,
  };

  const handlerToMovieDetailsScreen = () => {
    console.log("navigate to film ID: " + movieItem?.id);
    navigation.navigate("MovieDetail", { movieItem: movieItem });
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
    <TouchableOpacity
      style={styles.buttonBg}
      activeOpacity={0.7}
      onPress={() => {
        handlerToMovieDetailsScreen();
      }}
    >
      <View style={styles.buttonBg}>
        <ImageBackground
          source={imageBgUrl}
          resizeMode="cover"
          style={size == "L" ? styles.imageL : styles.imageXL}
        >
          <View style={styles.imageHeader}>
            <View style={styles.scoreRatingContainer}>
              <Text
                style={{
                  ...styles.scoreRating,
                  fontFamily: "Urbanist_500Medium",
                }}
              >
                {movieItem?.vote_average.toFixed(1)}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      {setTitle && (
        <Text style={{ ...styles.movieName, fontFamily: "Urbanist_500Medium" }}>
          {movieItem?.title?.length > 16
            ? movieItem.title.slice(0, 16) + "..."
            : movieItem.title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  buttonBg: {
    borderRadius: 16,
    overflow: "hidden",
  },
  imageL: {
    width: SIZES.width * 0.33,
    height: SIZES.height * 0.22,
  },
  imageXL: {
    width: SIZES.width / 2 - 32,
    height: SIZES.height * 0.28,
  },
  imageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 8,
    marginTop: 8,
  },
  scoreRatingContainer: {
    backgroundColor: Colors.primaryColorLight,
    paddingHorizontal: 6,
    paddingVertical: 2.2,
    borderRadius: 4,
  },
  scoreRating: {
    fontSize: 11,
    color: "white",
  },
  movieName: {
    fontSize: 14,
    color: "white",
    marginTop: 4,
    alignSelf: "center",
  },
});
