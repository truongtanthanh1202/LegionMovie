import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./Style";
import {
  Feather,
  Ionicons,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import LongListCard from "../../../components/atoms/long_list_card";
import { Colors } from "../../../constant/Color";

const DownLoadSetting = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
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
            Download Setting
          </Text>
        </View>

        <View
          style={{
            ...styles.tabsContainer,
            marginTop: 32,
            marginLeft: 20,
            gap: 12,
          }}
        >
          <LongListCard
            leftIcon={<Ionicons name="wifi" size={24} color="white" />}
            title="Wi-fi Only"
            type="Boolean"
            onPress={() => {}}
          />
          <LongListCard
            leftIcon={<Feather name="download" size={24} color="white" />}
            title="Smart DownLoad"
            type="Normal"
            onPress={() => {}}
          />
          <LongListCard
            leftIcon={<Feather name="video" size={24} color="white" />}
            title="Video Quality"
            type="Normal"
            onPress={() => {}}
          />
          <LongListCard
            leftIcon={
              <MaterialIcons name="multitrack-audio" size={24} color="white" />
            }
            title="Audio Quality"
            type="Normal"
            onPress={() => {}}
          />
          <TouchableOpacity
            style={{
              paddingVertical: 14,
              borderRadius: 20,
              backgroundColor: Colors.primaryColorDark,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 40,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontFamily: "Urbanist_700Bold",
              }}
            >
              Delete All Downloads
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DownLoadSetting;
