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
import React from "react";
import styles from "./Style";
import { Colors } from "../../../constant/Color";
import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";
import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_500Medium,
  Urbanist_400Regular,
} from "@expo-google-fonts/urbanist";
import { Dropdown } from "react-native-element-dropdown";
import * as ImagePicker from "expo-image-picker";
import { UserProfileHook } from "../../../redux/hook/UserProfileHook";

const ImageViewer = ({ placeholderImageSource, selectedImage }) => {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  return (
    <Image
      source={imageSource}
      style={{ width: "100%", height: "100%", borderRadius: 500 }}
    />
  );
};

const EditProfile = ({ navigation }) => {
  const [isDisabledButton, setIsDisabledButton] = React.useState(false);

  const {
    getAllProfile,
    handlerSetProfilePicturePath,
    handlerSetFullName,
    handlerSetNickName,
    handlerSetEmail,
    handlerSetGender,
  } = UserProfileHook();

  const [selectedImage, setSelectedImage] = React.useState(
    getAllProfile().profilePicturePath
  );
  const [fullname, setFullname] = React.useState(getAllProfile().fullName);
  const [nickname, setNickname] = React.useState(getAllProfile().nickName);
  const [email, setEmail] = React.useState(getAllProfile().email);
  const [value, setValue] = React.useState(getAllProfile().gender);

  const PlaceholderImage = getAllProfile().profilePicturePath;
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  const handlerChangeProfilePicture = () => {
    pickImageAsync();
  };

  const handlerChangeProfile = () => {
    console.log(fullname, nickname, email, value);
    console.log(selectedImage);
    handlerSetProfilePicturePath(selectedImage);
    handlerSetFullName(fullname);
    handlerSetNickName(nickname);
    // handlerSetEmail(email);
    handlerSetGender(value);
  };

  let [fontsLoaded, fontError] = useFonts({
    Urbanist_700Bold,
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

  return (
    <>
      <KeyboardAvoidingView style={{ flex: 1, width: "100%" }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.container}>
            {/* Header */}
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
                <Ionicons name="arrow-back" size={26} color="white" />
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
                Edit your profile
              </Text>
            </View>

            {/* Body */}
            <View style={{ flex: 1 }}>
              <View
                style={{
                  flex: 1,
                  marginBottom: 100,
                }}
              >
                <ScrollView>
                  <View style={{ gap: 20 }}>
                    {/* user avatar */}
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
                      <ImageViewer
                        placeholderImageSource={PlaceholderImage}
                        selectedImage={selectedImage}
                      />
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ position: "absolute", bottom: 4, right: 10 }}
                        onPress={handlerChangeProfilePicture}
                      >
                        <FontAwesome
                          name="pencil-square"
                          size={28}
                          color={Colors.primaryColorDark}
                        />
                      </TouchableOpacity>
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
                        value={fullname}
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
                        value={nickname}
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
                        value={email}
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
                <TouchableOpacity
                  style={{
                    ...styles.button,
                    backgroundColor: Colors.primaryColorLight,
                  }}
                  onPress={handlerChangeProfile}
                >
                  <Text
                    style={{
                      ...styles.textInButton,
                      fontFamily: "Urbanist_700Bold",
                    }}
                  >
                    Save
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

export default EditProfile;
