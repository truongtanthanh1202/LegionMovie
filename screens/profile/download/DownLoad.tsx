import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
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

const DownLoad = ({ navigation }) => {
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
          <DownLoadCard />
          <DownLoadCard />
          <DownLoadCard />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DownLoad;
