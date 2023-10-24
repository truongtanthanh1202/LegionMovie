import {
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  Platform,
  Image,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import styles from "./Style";
import { Colors } from "../../constant/Color";
import {
  useFonts,
  Urbanist_600SemiBold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { isValidEmail, isValidPassword } from "../../auth/ValidateInput";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [rememberUser, setRememberUser] = React.useState(false);

  let [fontsLoaded, fontError] = useFonts({
    Urbanist_600SemiBold,
    Urbanist_500Medium,
    Urbanist_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handlerSignUp = () => {
    navigation.navigate("BottomTab");
    console.log(
      "Handler Sign Up with: Email." +
        email +
        "  Password. " +
        password +
        "  Remember." +
        rememberUser
    );
  };
  const handlerSignUpWithFacebook = () => {};
  const handlerSignUpWithGoogle = () => {};
  const handlerSignUpWithApple = () => {};

  const isValidatedInput = () => {
    return (
      email.length >= 0 &&
      password.length >= 6 &&
      isValidEmail(email) == true &&
      isValidPassword(password) == true
    );
  };
  return (
    <>
      <KeyboardAvoidingView style={{ flex: 1, width: "100%" }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.container}>
            <TouchableOpacity
              style={{ marginBottom: 20, marginTop: 50 }}
              onPress={() => {
                navigation.goBack();
              }}
            >
              {/* <Ionicons name="arrow-back" size={28} color="white" /> */}
              <Image
                source={require("../../assets/icon/arrow-back-48.png")}
                style={{
                  backgroundColor: "transparent",
                  width: 26,
                  height: 26,
                }}
              />
            </TouchableOpacity>
            <View style={{ flex: 1, alignItems: "center" }}>
              <View
                style={{
                  marginBottom: 24,
                  flexDirection: "row",
                }}
              >
                <Image
                  source={require("../../assets/images/legion-logo-removebg.png")}
                  style={{ height: 200, width: 200 }}
                />
              </View>
              <Text
                style={{
                  ...styles.textTitle,
                  fontFamily: "Urbanist_600SemiBold",
                }}
              >
                Create Your Account
              </Text>

              <View
                style={{
                  marginHorizontal: 20,
                  width: "100%",
                  gap: 16,
                  marginBottom: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    backgroundColor: Colors.innerFieldBackground,
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                >
                  <Ionicons name="mail" size={20} color={Colors.textDark} />
                  <TextInput
                    style={{
                      ...styles.inputText,
                      fontFamily: "Urbanist_500Medium",
                      fontSize: 14,
                      letterSpacing: 1,
                      flex: 80,
                    }}
                    placeholder="Email"
                    placeholderTextColor={Colors.textDark}
                    onChangeText={(text: string) => {
                      setEmail(text);
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    backgroundColor: Colors.innerFieldBackground,
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                >
                  <Ionicons
                    name="lock-open"
                    size={20}
                    color={Colors.textDark}
                  />
                  <TextInput
                    style={{
                      ...styles.inputText,
                      fontFamily: "Urbanist_500Medium",
                      fontSize: 14,
                      letterSpacing: 1,
                      flex: 80,
                    }}
                    placeholder="Password"
                    placeholderTextColor={Colors.textDark}
                    secureTextEntry={!showPassword ? true : false}
                    onChangeText={(text: string) => {
                      setPassword(text);
                    }}
                  />
                  <TouchableWithoutFeedback
                    onPress={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    <Ionicons
                      name={!showPassword ? "eye-off" : "eye"}
                      size={20}
                      color={Colors.textDark}
                    />
                  </TouchableWithoutFeedback>
                </View>
              </View>

              <View>
                <BouncyCheckbox
                  size={22}
                  fillColor={Colors.primaryColorDark}
                  unfillColor={Colors.backgroundColor}
                  text="Remember me"
                  iconStyle={{
                    borderColor: Colors.primaryColorDark,
                  }}
                  innerIconStyle={{ borderWidth: 2.4, borderRadius: 6 }}
                  textStyle={{
                    fontFamily: "Urbanist_500Medium",
                    color: "white",
                    fontSize: 14,
                    marginLeft: -6,
                  }}
                  onPress={(isChecked: boolean) => {
                    setRememberUser(isChecked);
                  }}
                />
              </View>

              <TouchableOpacity
                disabled={isValidatedInput() == false}
                style={{
                  ...styles.buttonSignIn,
                  opacity: isValidatedInput() === false ? 0.7 : 1,
                }}
                onPress={handlerSignUp}
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
                  Sign up
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
                    or continue with
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row", gap: 16, marginTop: 28 }}>
                <TouchableOpacity
                  style={styles.buttonIcon}
                  onPress={handlerSignUpWithFacebook}
                >
                  <Image
                    source={require("../../assets/icon/icons-facebook-50.png")}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonIcon}
                  onPress={handlerSignUpWithGoogle}
                >
                  <Image
                    source={require("../../assets/icon/icons-google-48.png")}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonIcon}
                  onPress={handlerSignUpWithApple}
                >
                  <Image
                    source={require("../../assets/icon/icons-apple-50.png")}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={{ flexDirection: "row", marginTop: 28 }}
                onPress={() => {
                  navigation.navigate("SignIn");
                }}
              >
                <Text
                  style={{
                    fontFamily: "Urbanist_400Regular",
                    ...styles.textInBtn,
                  }}
                >
                  Already have an account ?{"  "}
                </Text>
                <Text
                  style={{
                    fontFamily: "Urbanist_500Medium",
                    ...styles.textInBtn,
                    color: Colors.primaryColorLight,
                  }}
                >
                  Sign in
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
