import {
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  Platform,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import styles from "./Style";
import LoginWelcome from "../../assets/svg/LoginWelcome";
import { Colors } from "../../constant/Color";
import {
  useFonts,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";

const SignInWelcome = ({ navigation }) => {
  let [fontsLoaded, fontError] = useFonts({
    Urbanist_500Medium,
    Urbanist_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handlerToSignIn = () => {
    navigation.navigate("SignIn");
  };

  const handlerToSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={{ marginBottom: 20, marginTop: 50 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("../../assets/icon/arrow-back-48.png")}
            style={{ backgroundColor: "transparent", width: 26, height: 26 }}
          />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: "center" }}>
          <View
            style={{
              width: "100%",
              height: 220,
              marginBottom: 24,
              flexDirection: "row",
            }}
          >
            <View style={{ width: 20 }}></View>
            <LoginWelcome />
          </View>
          <Text
            style={{
              fontFamily: "Urbanist_500Medium",
              ...styles.textTitle,
            }}
          >
            Let's you in
          </Text>

          <TouchableOpacity style={styles.buttonIcon}>
            <Image
              source={require("../../assets/icon/icons-facebook-50.png")}
              style={styles.icon}
            />
            <Text
              style={{ fontFamily: "Urbanist_500Medium", ...styles.textInBtn }}
            >
              Continue with Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonIcon}>
            <Image
              source={require("../../assets/icon/icons-google-48.png")}
              style={styles.icon}
            />
            <Text
              style={{ fontFamily: "Urbanist_500Medium", ...styles.textInBtn }}
            >
              Continue with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonIcon}>
            <Image
              source={require("../../assets/icon/icons-apple-50.png")}
              style={styles.icon}
            />
            <Text
              style={{ fontFamily: "Urbanist_500Medium", ...styles.textInBtn }}
            >
              Continue with Apple
            </Text>
          </TouchableOpacity>

          <View>
            <View
              style={{
                height: 1.4,
                width: Dimensions.get("screen").width - 60,
                backgroundColor: Colors.boderColorDark,
                marginTop: 32,
                opacity: 0.8,
              }}
            >
              <Text
                style={{
                  fontFamily: "Urbanist_500Medium",
                  ...styles.textInBtn,
                  fontSize: 16,
                  position: "absolute",
                  top: -12,
                  alignSelf: "center",
                  backgroundColor: Colors.backgroundColor,
                  paddingHorizontal: 12,
                }}
              >
                or
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.buttonSignIn}
            onPress={handlerToSignIn}
          >
            <Text
              style={{
                fontFamily: "Urbanist_500Medium",
                ...styles.textInBtn,
                fontSize: 16,
                letterSpacing: 0.6,
                fontWeight: "600",
              }}
            >
              Sign in with password
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={handlerToSignUp}
          >
            <Text
              style={{
                fontFamily: "Urbanist_400Regular",
                ...styles.textInBtn,
              }}
            >
              Don't have an account ?{"  "}
            </Text>
            <Text
              style={{
                fontFamily: "Urbanist_500Medium",
                ...styles.textInBtn,
                color: Colors.primaryColorLight,
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInWelcome;
