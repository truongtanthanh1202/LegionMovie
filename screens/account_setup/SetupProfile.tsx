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
  Urbanist_600SemiBold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import RegisterVerified from "../../assets/svg/RegisterVerified";
import { Dropdown } from "react-native-element-dropdown";

const SetupProfile = () => {
  const [value, setValue] = React.useState(null);
  const [fullname, setFullname] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const isCreateNewAccountProcessing: boolean = false;
  let [fontsLoaded, fontError] = useFonts({
    Urbanist_600SemiBold,
    Urbanist_500Medium,
    Urbanist_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  const genderData: { label: string; value: string }[] = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Unknown", value: "unknown" },
  ];

  const handlerCompleteSetupAccount = () => {
    setModalVisible(true);
    console.log(
      "full name: " + fullname + " nickname: " + nickname + " gender: " + value
    );
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
                    <RegisterVerified />
                  </View>
                  <Text
                    style={{
                      fontFamily: "Urbanist_600SemiBold",
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

                  {isCreateNewAccountProcessing ? (
                    <>
                      <ActivityIndicator
                        size="large"
                        color={Colors.primaryColorLight}
                      />
                    </>
                  ) : (
                    <>
                      <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
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
                            fontFamily: "Urbanist_600SemiBold",
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
              <TouchableOpacity>
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
                  fontFamily: "Urbanist_600SemiBold",
                  color: "white",
                  fontSize: 24,
                  letterSpacing: 0.4,
                  marginLeft: 16,
                }}
              >
                Fill your profile
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
                        backgroundColor: "#464648",
                        width: 140,
                        height: 140,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 80,
                        alignSelf: "center",
                      }}
                    >
                      <Image
                        source={require("../../assets/icon/user-90.png")}
                        style={{ width: 100, height: 100 }}
                      />
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        paddingHorizontal: 10,
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
                        placeholder="Full name"
                        placeholderTextColor={Colors.textDark}
                        onChangeText={(text) => {
                          setFullname(text);
                        }}
                      />
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        paddingHorizontal: 10,
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
                        placeholder="Nick name"
                        placeholderTextColor={Colors.textDark}
                        onChangeText={(text) => {
                          setNickname(text);
                        }}
                      />
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        paddingLeft: 10,
                        paddingRight: 24,
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
                          opacity: 0.7,
                          color: Colors.primaryColorDark,
                        }}
                        value="truongtanthanh1202@gmail.com"
                        editable={false}
                      />
                      <Ionicons
                        name="mail-outline"
                        size={18}
                        color={Colors.primaryColorDark}
                      />
                    </View>

                    <Dropdown
                      style={styles.dropdown}
                      placeholderStyle={{
                        ...styles.placeholderStyle,
                        fontFamily: "Urbanist_500Medium",
                      }}
                      selectedTextStyle={{
                        ...styles.selectedTextStyle,
                        fontFamily: "Urbanist_500Medium",
                      }}
                      data={genderData}
                      labelField="label"
                      valueField="value"
                      placeholder="Gender"
                      value={value}
                      onChange={(item) => {
                        setValue(item.value);
                      }}
                    />
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
                <TouchableOpacity style={styles.button}>
                  <Text
                    style={{
                      ...styles.textInButton,
                      fontFamily: "Urbanist_600SemiBold",
                    }}
                  >
                    Skip
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...styles.button,
                    backgroundColor: Colors.primaryColorLight,
                  }}
                  onPress={handlerCompleteSetupAccount}
                >
                  <Text
                    style={{
                      ...styles.textInButton,
                      fontFamily: "Urbanist_600SemiBold",
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

export default SetupProfile;
