import {
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  Platform,
  Image,
  ScrollView,
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
  Urbanist_700Bold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import ForgotPassword1 from "../../assets/svg/ForgotPassword1";

const Forgot2 = ({ navigation }) => {
  let [fontsLoaded, fontError] = useFonts({
    Urbanist_700Bold,
    Urbanist_500Medium,
    Urbanist_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handlerForgotPassword2 = () => {
    navigation.navigate("Forgot3");
  };

  return (
    <>
      <KeyboardAvoidingView style={{ flex: 1, width: "100%" }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.container}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 32,
                marginTop: 50,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                {/* <Ionicons name="arrow-back" size={28} color="white" /> */}
                <Image
                  source={require("../../assets/icon/arrow-back-48.png")}
                  style={{
                    width: 26,
                    height: 26,
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Urbanist_700Bold",
                  color: "white",
                  fontSize: 24,
                  letterSpacing: 0.4,
                  marginLeft: 16,
                }}
              >
                Check Your Mail
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <View
                style={{
                  flex: 1,
                  marginBottom: 100,
                }}
              >
                <ScrollView>
                  <View style={{ gap: 20 }}>
                    <View
                      style={{
                        width: 200,
                        height: 200,
                        alignSelf: "center",
                      }}
                    >
                      <ForgotPassword1 />
                    </View>
                    <Text
                      style={{
                        ...styles.textInButton,
                        fontFamily: "Urbanist_500Medium",
                        letterSpacing: 0.2,
                        fontSize: 16,
                        lineHeight: 24,
                      }}
                    >
                      {`Code has been send to truongtanthanh1202@gmail.com`}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        paddingHorizontal: 20,
                        backgroundColor: Colors.innerFieldBackground,
                        alignItems: "center",
                        borderRadius: 10,
                      }}
                    >
                      <TextInput
                        style={{
                          ...styles.inputText,
                          fontFamily: "Urbanist_500Medium",
                          fontSize: 14,
                          letterSpacing: 1,
                          flex: 80,
                        }}
                        keyboardType="numeric"
                        placeholder="Reset Password Code"
                        placeholderTextColor={Colors.textDark}
                        onChangeText={(text: string) => {}}
                      />
                    </View>
                  </View>
                </ScrollView>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  gap: 16,
                  backgroundColor: Colors.backgroundColor,
                  paddingBottom: 40,
                  paddingTop: 20,
                  position: "absolute",
                  bottom: 0,
                }}
              >
                <TouchableOpacity
                  style={{
                    ...styles.button,
                    backgroundColor: Colors.primaryColorLight,
                  }}
                  onPress={handlerForgotPassword2}
                >
                  <Text
                    style={{
                      ...styles.textInButton,
                      fontFamily: "Urbanist_700Bold",
                    }}
                  >
                    Verify
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default Forgot2;
