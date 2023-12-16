import {
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  Platform,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import styles from "./Style";
import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../../constant/Color";

const ChangePassword = () => {
  const navigation = useNavigation();
  const [showoldPassword, setshowOldPassword] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const [oldPassword, setOldPassword] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isDisabledButton, setIsDisabledButton] = React.useState(true);

  React.useEffect(() => {
    if (
      oldPassword.length > 5 &&
      password.length > 5 &&
      confirmPassword.length > 5 &&
      password === confirmPassword
    ) {
      setIsDisabledButton(false);
    } else {
      setIsDisabledButton(true);
    }
  }, [oldPassword, password, confirmPassword]);

  const handlerRessetPassword = () => {
    console.log(oldPassword, password, confirmPassword);
  };

  let [fontsLoaded, fontError] = useFonts({
    Urbanist_700Bold,
    Urbanist_500Medium,
    Urbanist_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaView style={styles.safeContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
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
              Change Password
            </Text>
          </View>
          <View style={{ marginHorizontal: 20, gap: 20, marginTop: 40 }}>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontFamily: "Urbanist_500Medium",
              }}
            >
              Type your old password
            </Text>
            <View
              style={{
                flexDirection: "row",
                paddingLeft: 20,
                backgroundColor: Colors.innerFieldBackground,
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Ionicons name="lock-open" size={20} color={Colors.textDark} />
              <TextInput
                style={{
                  ...styles.inputText,
                  fontFamily: "Urbanist_500Medium",
                  fontSize: 14,
                  letterSpacing: 1,
                  flex: 80,
                }}
                placeholder="Current Password"
                placeholderTextColor={Colors.textDark}
                secureTextEntry={!showoldPassword ? true : false}
                onChangeText={(text: string) => {
                  setOldPassword(text);
                }}
              />
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  setshowOldPassword(!showoldPassword);
                }}
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 14,
                }}
              >
                <Ionicons
                  name={!showoldPassword ? "eye-off" : "eye"}
                  size={20}
                  color={Colors.textDark}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontFamily: "Urbanist_500Medium",
              }}
            >
              Create your new password
            </Text>
            <View
              style={{
                flexDirection: "row",
                paddingLeft: 20,
                backgroundColor: Colors.innerFieldBackground,
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Ionicons name="lock-open" size={20} color={Colors.textDark} />
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
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  setShowPassword(!showPassword);
                }}
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 14,
                }}
              >
                <Ionicons
                  name={!showPassword ? "eye-off" : "eye"}
                  size={20}
                  color={Colors.textDark}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingLeft: 20,
                backgroundColor: Colors.innerFieldBackground,
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Ionicons name="lock-open" size={20} color={Colors.textDark} />
              <TextInput
                style={{
                  ...styles.inputText,
                  fontFamily: "Urbanist_500Medium",
                  fontSize: 14,
                  letterSpacing: 1,
                  flex: 80,
                }}
                placeholder="Repeat your Password"
                placeholderTextColor={Colors.textDark}
                secureTextEntry={!showConfirmPassword ? true : false}
                onChangeText={(text: string) => {
                  setConfirmPassword(text);
                }}
              />
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  setShowConfirmPassword(!showConfirmPassword);
                }}
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 14,
                }}
              >
                <Ionicons
                  name={!showConfirmPassword ? "eye-off" : "eye"}
                  size={20}
                  color={Colors.textDark}
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={handlerRessetPassword}
            disabled={isDisabledButton}
            style={{
              ...styles.btnContainer,
              position: "absolute",
              bottom: 32,
              left: 0,
              right: 0,
              backgroundColor: isDisabledButton
                ? Colors.innerFieldBackground
                : Colors.primaryColorLight,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontFamily: "Urbanist_500Medium",
              }}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default ChangePassword;
