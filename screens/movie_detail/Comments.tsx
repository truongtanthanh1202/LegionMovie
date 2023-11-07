import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Comments = () => {
  return (
    <View style={styles.container}>
      <Text>Comments</Text>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff4081",
  },
});
