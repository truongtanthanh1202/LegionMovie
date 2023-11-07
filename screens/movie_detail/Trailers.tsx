import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Trailers = () => {
  return (
    <View style={styles.container}>
      <Text>Trailers</Text>
    </View>
  );
};

export default Trailers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#673ab7",
  },
});
