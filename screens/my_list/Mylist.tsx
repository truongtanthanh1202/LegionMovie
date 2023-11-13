import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MyListHook } from "../../redux/hook/HandlerMyListHook";

const Mylist = () => {
  const {
    handlerAddMyListItem,
    handlerRemoveMyListItem,
    handlerGetMyListItem,
    handlerFilterMyListItem,
  } = MyListHook();

  const allMyListItems = handlerGetMyListItem();
  console.log(allMyListItems);

  return (
    <View style={styles.container}>
      <Text>Mylist</Text>
      <TouchableOpacity
        style={{ padding: 10, borderRadius: 4, backgroundColor: "pink" }}
        onPress={() => {
          handlerAddMyListItem({
            movieName: "Movie Test",
            id: Math.floor(Math.random() * 1001),
          });
        }}
      >
        <Text>Add random film</Text>
      </TouchableOpacity>
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
