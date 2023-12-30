import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { Colors } from "../../../constant/Color";
import * as Linking from "expo-linking";

const SocialShare = ({ name }) => {
  const smsBody = `This film: ${name} is awesome, you must watch this!`;
  return (
    <View style={{ width: "100%" }}>
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
        Send to
      </Text>
      <View style={styles.line}></View>
      <View style={styles.groupIcon}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(`sms:number=${"0123456789"}?body=${smsBody}`)
          }
        >
          <Image
            source={require("../../../assets/social_icon/icons8-sms.png")}
            width={48}
            height={48}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL(`https://www.instagram.com/`)}
        >
          <Image
            source={require("../../../assets/social_icon/icons8-instagram.png")}
            width={48}
            height={48}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL(`https://www.facebook.com/`)}
        >
          <Image
            source={require("../../../assets/social_icon/icons-facebook.png")}
            width={48}
            height={48}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              `mailto:support@expo.dev?subject=Legion_Movie_Sharing&body=${smsBody}`
            )
          }
        >
          <Image
            source={require("../../../assets/social_icon/icons8-gmail.png")}
            width={48}
            height={48}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialShare;

const styles = StyleSheet.create({
  line: {
    height: 2,
    width: "auto",
    backgroundColor: Colors.innerFieldBackground,
    borderRadius: 10,
    marginBottom: 24,
  },
  groupIcon: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 28,
  },
});
