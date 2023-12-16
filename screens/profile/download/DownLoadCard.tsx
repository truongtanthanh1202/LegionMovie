import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../../constant/Color";
import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import { Feather, FontAwesome } from "@expo/vector-icons";

const DownLoadCard = () => {
  const randomDurationMinutes = Math.floor(Math.random() * 10);
  const randomDurationSeconds = Math.floor(Math.random() * 100);

  const handlerDelete = () => {};

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
      <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
        <Image
          source={{
            uri: "https://i.ytimg.com/vi/SZtvRyyQGHM/hqdefault.jpg",
          }}
          resizeMode="cover"
          style={styles.ImageTrailer}
        />
        <View style={styles.playCircle}>
          <FontAwesome name="play-circle" size={24} color="white" />
        </View>
      </TouchableOpacity>
      <View
        style={{
          justifyContent: "center",
          gap: 10,
          flex: 1,
        }}
      >
        <Text
          style={{
            ...styles.trailerName,
            fontFamily: "Urbanist_500Medium",
            maxWidth: 230,
          }}
        >
          {"Movie Downloaded"}
        </Text>
        <Text
          style={{
            ...styles.duration,
            fontFamily: "Urbanist_400Regular",
          }}
        >
          {`${randomDurationMinutes}m ${randomDurationSeconds}s`}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.stateTrailer}>
            <Text
              style={{
                color: Colors.primaryColorLight,
                fontSize: 12,
                fontFamily: "Urbanist_400Regular",
              }}
            >
              Total Size
            </Text>
          </View>
          <TouchableOpacity style={styles.stateTrailer} onPress={handlerDelete}>
            <Feather name="trash" size={12} color={Colors.primaryColorLight} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DownLoadCard;

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
    paddingVertical: 2,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#281920",
  },
});
