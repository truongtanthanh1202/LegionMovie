import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import styles from "./Style";
import React, { useEffect } from "react";
import { MyListHook } from "../../redux/hook/HandlerMyListHook";
import NoData from "../../assets/svg/NoData";
import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import { Feather } from "@expo/vector-icons";
import MovieCard from "../../components/atoms/movie_card";

const Mylist = () => {
  const {
    handlerAddMyListItem,
    handlerRemoveMyListItem,
    handlerGetMyListItem,
    handlerFilterMyListItem,
    checkDuplicate,
  } = MyListHook();

  const allMyListItems = handlerGetMyListItem();
  console.log(allMyListItems);

  let [fontsLoaded, fontError] = useFonts({
    Urbanist_700Bold,
    Urbanist_500Medium,
    Urbanist_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      {allMyListItems.length > 0 ? (
        <>
          <View style={styles.header}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/icon.png")}
                style={styles.headerLogoIcon}
              />
              <Text
                style={{
                  ...styles.headerTitle,
                  fontFamily: "Urbanist_500Medium",
                }}
              >
                My List
              </Text>
            </View>
            <TouchableOpacity>
              <Feather name="search" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.categoryContainer}>
            <ScrollView horizontal style={styles.categoriesScrollView}>
              <TouchableOpacity style={styles.buttonCategoryActive}>
                <Text
                  style={{
                    ...styles.textButtonActive,
                    fontFamily: "Urbanist_500Medium",
                  }}
                >
                  All Categories
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <ScrollView>
            <View style={styles.movieContainer}>
              {allMyListItems.map((item, index) => {
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
        </>
      ) : (
        <>
          <View style={styles.headerEmpty}>
            <Image
              source={require("../../assets/icon.png")}
              style={styles.headerLogoIcon}
            />
            <Text
              style={{
                ...styles.headerTitle,
                fontFamily: "Urbanist_500Medium",
              }}
            >
              My List
            </Text>
          </View>
          <View style={styles.emptyContainer}>
            <View style={{ width: 240, height: 240 }}>
              <NoData />
            </View>
            <Text
              style={{ ...styles.textEmpty, fontFamily: "Urbanist_500Medium" }}
            >
              Your List is Empty
            </Text>
            <Text
              style={{
                ...styles.textSubEmpty,
                fontFamily: "Urbanist_400Regular",
              }}
            >
              It seems that you haven't added any movies to the list
            </Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Mylist;
