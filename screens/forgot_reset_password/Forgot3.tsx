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
  Modal,
  ActivityIndicator,
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
import ForgotPassword2 from "../../assets/svg/ForgotPassword2";
import ForgotPassword3 from "../../assets/svg/ForgotPassword3";

const Forgot3 = ({ navigation }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const isResetPasswordProcessing: boolean = false;
  let [fontsLoaded, fontError] = useFonts({
    Urbanist_700Bold,
    Urbanist_500Medium,
    Urbanist_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handlerCompleteResetPassword = () => {
    setModalVisible(true);
  };

  const handlerToHome = () => {
    navigation.navigate("BottomTab");
  };

  return (
    <>
      <KeyboardAvoidingView style={{ flex: 1, width: "100%" }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.container}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalBlock}>
                  <View style={{ width: 180, height: 180, marginBottom: 28 }}>
                    <ForgotPassword3 />
                  </View>
                  <Text
                    style={{
                      fontFamily: "Urbanist_700Bold",
                      color: Colors.redLight,
                      fontSize: 24,
                      letterSpacing: 0.4,
                      textAlign: "center",
                      marginBottom: 16,
                    }}
                  >
                    Congratulations!
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Urbanist_400Regular",
                      color: "white",
                      fontSize: 15,
                      letterSpacing: 0.1,
                      lineHeight: 20,
                      textAlign: "center",
                      marginBottom: 24,
                    }}
                  >
                    Your account is ready to use. You can be redirect to Home
                    page in a few seconds.
                  </Text>

                  {isResetPasswordProcessing ? (
                    <>
                      <ActivityIndicator
                        size="large"
                        color={Colors.primaryColorLight}
                      />
                    </>
                  ) : (
                    <>
                      <TouchableOpacity
                        onPress={() => {
                          setModalVisible(!modalVisible);
                          handlerToHome();
                        }}
                        style={{
                          backgroundColor: Colors.primaryColorLight,
                          paddingVertical: 14,
                          paddingHorizontal: 20,
                          borderRadius: 24,
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 6,
                        }}
                      >
                        <Ionicons name="home" size={18} color="white" />
                        <Text
                          style={{
                            ...styles.textInButton,
                            fontFamily: "Urbanist_700Bold",
                            fontSize: 16,
                            letterSpacing: 0,
                          }}
                        >
                          Go to Home
                        </Text>
                      </TouchableOpacity>
                    </>
                  )}
                </View>
              </View>
            </Modal>

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
                Reset Password
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
                        marginBottom: 8,
                      }}
                    >
                      <ForgotPassword2 />
                    </View>
                    <Text
                      style={{
                        ...styles.textInButton,
                        fontFamily: "Urbanist_500Medium",
                        letterSpacing: 0.2,
                        fontSize: 15,
                        textAlign: "left",
                      }}
                    >
                      Create your new password.
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
                        onChangeText={(text: string) => {}}
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
                        placeholder="Repeat your Password"
                        placeholderTextColor={Colors.textDark}
                        secureTextEntry={!showConfirmPassword ? true : false}
                        onChangeText={(text: string) => {}}
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
                  onPress={handlerCompleteResetPassword}
                >
                  <Text
                    style={{
                      ...styles.textInButton,
                      fontFamily: "Urbanist_700Bold",
                    }}
                  >
                    Continue
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

export default Forgot3;
