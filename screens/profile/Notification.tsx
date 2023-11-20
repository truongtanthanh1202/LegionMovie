import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Style";
import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import LongListCard from "../../components/atoms/long_list_card";
import { FontAwesome, Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Notification = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={{ ...styles.headerEmpty, marginTop: 36, gap: 16 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              ...styles.headerTitle,
              fontSize: 24,
              fontFamily: "Urbanist_500Medium",
            }}
          >
            Profile
          </Text>
        </View>

        <View
          style={{
            ...styles.tabsContainer,
            marginTop: 32,
            marginLeft: 0,
            gap: 12,
          }}
        >
          <LongListCard
            leftIcon={<></>}
            title="General Notification"
            type="Boolean"
            onPress={() => {}}
          />
          <LongListCard
            leftIcon={<></>}
            title="New Arrival"
            type="Boolean"
            onPress={() => {}}
          />
          <LongListCard
            leftIcon={<></>}
            title="New Sevices Available"
            type="Boolean"
            onPress={() => {}}
            initState="False"
          />
          <LongListCard
            leftIcon={<></>}
            title="New Release Movie"
            type="Boolean"
            onPress={() => {}}
          />
          <LongListCard
            leftIcon={<></>}
            title="App update"
            type="Boolean"
            onPress={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Notification;
