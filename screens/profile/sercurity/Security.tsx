import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Style";
import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import LongListCard from "../../../components/atoms/long_list_card";
import { FontAwesome, Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../../constant/Color";

const Security = () => {
  const navigation = useNavigation();
  const navigateToChangePassWord = () => {
    navigation.navigate("ChangePassword");
  };
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
            Security
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
          <Text
            style={{
              color: "white",
              fontFamily: "Urbanist_700Bold",
              fontSize: 20,
              marginLeft: 20,
              marginTop: 10,
            }}
          >
            Control
          </Text>
          <LongListCard
            leftIcon={<></>}
            title="Sercurity Alert"
            type="Normal"
            onPress={() => {}}
          />
          <LongListCard
            leftIcon={<></>}
            title="Manage Device"
            type="Normal"
            onPress={() => {}}
          />
          <LongListCard
            leftIcon={<></>}
            title="Manage Permission"
            type="Normal"
            onPress={() => {}}
          />
          <Text
            style={{
              color: "white",
              fontFamily: "Urbanist_700Bold",
              fontSize: 20,
              marginLeft: 20,
              marginTop: 10,
            }}
          >
            Security
          </Text>
          <LongListCard
            leftIcon={<></>}
            title="Remember me"
            type="Boolean"
            onPress={() => {}}
          />
          <LongListCard
            leftIcon={<></>}
            title="Google Authentication"
            type="Normal"
            onPress={() => {}}
          />
        </View>

        <TouchableOpacity
          style={styles.btnContainer}
          onPress={navigateToChangePassWord}
        >
          <Text
            style={{
              color: Colors.redLight,
              fontSize: 14,
              fontFamily: "Urbanist_500Medium",
            }}
          >
            Change Password
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Security;
