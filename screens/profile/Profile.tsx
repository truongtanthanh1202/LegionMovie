import { Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import React from "react";
import styles from "./Style";
import {
  useFonts,
  Urbanist_600SemiBold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import LongListCard from "../../components/atoms/long_list_card";
import { FontAwesome, Feather, Ionicons } from "@expo/vector-icons";

const Profile = () => {
  const navigateToEditProfile = () => {
    console.log("navigateToEditProfile");
  };
  const navigateToNoti = () => {
    console.log("navigateToNoti");
  };
  const navigateToDownLoad = () => {
    console.log("navigateToDownLoad");
  };
  const navigateToSercurity = () => {
    console.log("navigateToSercurity");
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
    <SafeAreaView style={styles.safeContainer}>
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
          Profile
        </Text>
      </View>

      <ScrollView>
        <View style={styles.container}>
          {/* basic info (image, name, email) */}
          <View style={styles.basicInfoContainer}>
            <Image
              source={require("../../assets/default-avatar.png")}
              style={styles.avatar}
            />
            <Text
              style={{ ...styles.userName, fontFamily: "Urbanist_500Medium" }}
            >
              Thanhf Truong
            </Text>
            <Text
              style={{ ...styles.userEmail, fontFamily: "Urbanist_400Regular" }}
            >
              truongtanthanh1202@gmail.com
            </Text>
          </View>
          {/* other tabs */}
          <View style={styles.tabsContainer}>
            <LongListCard
              leftIcon={<FontAwesome name="user-o" size={20} color="white" />}
              title="Edit Profile"
              type="Normal"
              onPress={navigateToEditProfile}
            />
            <LongListCard
              leftIcon={<Feather name="bell" size={20} color="white" />}
              title="Notification"
              type="Normal"
              onPress={navigateToNoti}
            />
            <LongListCard
              leftIcon={
                <Ionicons
                  name="cloud-download-outline"
                  size={20}
                  color="white"
                />
              }
              title="Download"
              type="Normal"
              onPress={navigateToDownLoad}
            />
            <LongListCard
              leftIcon={
                <Ionicons name="moon-outline" size={20} color="white" />
              }
              title="Dark mode"
              type="Boolean"
              onPress={() => {}}
            />
            <LongListCard
              leftIcon={<Feather name="shield" size={20} color="white" />}
              title="Sercurity"
              type="Normal"
              onPress={navigateToSercurity}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
