import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import styles from "./Style";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import DownLoadCard from "./DownLoadCard";
import { FilmDownloadHook } from "../../../redux/hook/FilmDownloadHook";
import NoData from "../../../assets/svg/NoData";

const DownLoad = ({ navigation }) => {
  const { getAllFilmDownload } = FilmDownloadHook();
  const allDownloadItems = getAllFilmDownload();
  console.log(allDownloadItems);
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
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View
            style={{ flexDirection: "row", alignItems: "center", flex: 80 }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Feather name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
            <Image
              source={require("../../../assets/icon.png")}
              style={styles.headerLogoIcon}
            />
            <Text
              style={{
                ...styles.headerTitle,
                fontFamily: "Urbanist_500Medium",
              }}
            >
              Download
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("DownLoadSetting");
              }}
            >
              <Ionicons name="settings-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        {/* Body */}
        <View style={{ marginTop: 36, marginHorizontal: 16, gap: 16 }}>
          {allDownloadItems.length > 0 ? (
            <ScrollView>
              {allDownloadItems.map((item, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    key={index}
                    style={{ marginBottom: 20 }}
                    onPress={() => {
                      navigation.navigate("VideoDownloadPlaying", {
                        localPath: item.local_path,
                      });
                    }}
                  >
                    <DownLoadCard
                      id={item.id}
                      poster_path={item.poster_path}
                      name={item.name}
                      local_path={item.local_path}
                      size={item.size}
                    />
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          ) : (
            <View style={styles.emptyContainer}>
              <View style={{ width: 240, height: 240 }}>
                <NoData />
              </View>
              <Text
                style={{
                  ...styles.textEmpty,
                  fontFamily: "Urbanist_500Medium",
                }}
              >
                Your Download List is Empty
              </Text>
              <Text
                style={{
                  ...styles.textSubEmpty,
                  fontFamily: "Urbanist_400Regular",
                }}
              >
                It seems that you haven't download any movies
              </Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DownLoad;
