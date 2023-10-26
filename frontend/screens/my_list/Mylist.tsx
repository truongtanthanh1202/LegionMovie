import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Mylist = () => {
  return (
    <View style={styles.container}>
      <Text>Mylist</Text>
    </View>
  );
};

export default Mylist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
