import { View, Image, ActivityIndicator } from "react-native";
import React from "react";
import { Colors } from "../../constant/Color";
import styles from "./Style";

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 300, height: 300, marginBottom: 60 }}
        source={require("../../assets/images/legion-logo-removebg.png")}
      />
      <ActivityIndicator size="large" color={Colors.redDark} />
    </View>
  );
};

export default Splash;
