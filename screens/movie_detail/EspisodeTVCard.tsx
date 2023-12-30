import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constant/Color";
import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const EspisodeTVCard = ({ Info, Poster }) => {
  const navigation = useNavigation();
  const randomDurationMinutes = Math.floor(Math.random() * (40 - 20) + 20);
  const randomDurationSeconds = Math.floor(Math.random() * 60);

  let [fontsLoaded, fontError] = useFonts({
    Urbanist_700Bold,
    Urbanist_500Medium,
    Urbanist_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={{ flexDirection: "row", gap: 20 }}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate("VideoScreen");
        }}
      >
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${Poster}`,
          }}
          resizeMode="cover"
          style={styles.ImageTrailer}
        />
        <View style={styles.playCircle}>
          <FontAwesome name="play-circle" size={24} color="white" />
        </View>
      </TouchableOpacity>
      <View style={{ justifyContent: "center", gap: 10 }}>
        <Text
          style={{
            ...styles.trailerName,
            fontFamily: "Urbanist_500Medium",
            maxWidth: 230,
          }}
        >
          {Info?.name?.length > 40
            ? Info.name.slice(0, 40) + "..."
            : Info.name || "Episode"}
        </Text>
        <Text
          style={{
            ...styles.duration,
            fontFamily: "Urbanist_400Regular",
          }}
        >
          {`${randomDurationMinutes}m ${randomDurationSeconds}s`}
        </Text>
        <View style={styles.stateTrailer}>
          <Text
            style={{
              color: Colors.primaryColorLight,
              fontSize: 12,
              fontFamily: "Urbanist_400Regular",
            }}
          >
            Update
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EspisodeTVCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  ImageTrailer: {
    width: 150,
    height: 120,
    borderRadius: 12,
  },
  playCircle: {
    position: "absolute",
    left: "43%",
    top: "40%",
    opacity: 0.9,
  },
  trailerName: {
    color: "white",
    fontSize: 17,
    letterSpacing: 0.6,
  },
  duration: {
    color: "white",
    fontSize: 14,
    letterSpacing: 0.4,
  },
  stateTrailer: {
    width: 60,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: "#281920",
  },
});
