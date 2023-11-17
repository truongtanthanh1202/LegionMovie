import { StyleSheet, View, Text, Platform } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import Home from "../screens/home/Home";
import Explore from "../screens/explore/Explore";
import Mylist from "../screens/my_list/Mylist";
import Profile from "../screens/profile/Profile";
import { Colors } from "../constant/Color";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTab = ({ route, navigation }) => {
  let [fontsLoaded, fontError] = useFonts({
    Urbanist_700Bold,
    Urbanist_500Medium,
    Urbanist_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.bottomTabContainer,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Explore") {
            iconName = focused ? "compass" : "compass-outline";
          } else if (route.name === "Mylist") {
            iconName = focused ? "layers" : "layers-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: 'transparent",',
              }}
            >
              {route.name === "Home" ? (
                <Entypo
                  name="home"
                  size={28}
                  color={focused ? Colors.redDark : Colors.iconDisabled}
                />
              ) : (
                <Ionicons
                  name={iconName}
                  size={28}
                  color={focused ? Colors.redDark : Colors.iconDisabled}
                />
              )}
              {focused && (
                <Text
                  style={{
                    ...styles.screenName,
                    color: focused ? Colors.redDark : Colors.textDark,
                    fontFamily: focused
                      ? "Urbanist_700Bold"
                      : "Urbanist_500Medium",
                  }}
                >
                  {route.name}
                </Text>
              )}
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Mylist" component={Mylist} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  bottomTabContainer: {
    backgroundColor: Colors.backgroundColorBlurDark,
    borderColor: Colors.backgroundColorBlurDark,
    height: 68,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    elevation: 0,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  screenName: {
    fontSize: 10,
    color: Colors.textDark,
    letterSpacing: 0.5,
  },
});
