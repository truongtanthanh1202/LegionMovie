import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../../../constant/Color";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";

const GiveRating = () => {
  const [value, setValue] = React.useState();
  const genderData = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "10", value: 10 },
  ];
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
        Give Rating
      </Text>
      <View style={styles.line}></View>
      <View
        style={{
          marginBottom: 24,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
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
            placeholder="Rate"
            value={value}
            onChange={(item) => {
              setValue(item.value);
            }}
          />
          <AntDesign name="star" size={24} color={Colors.primaryColorDark} />
        </View>
        <TouchableOpacity
          style={styles.buttonHide}
          disabled={!value ? true : false}
        >
          <Text
            style={{ ...styles.textInBtn, fontFamily: "Urbanist_500Medium" }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

export default GiveRating;

const styles = StyleSheet.create({
  line: {
    height: 2,
    width: "auto",
    backgroundColor: Colors.innerFieldBackground,
    borderRadius: 10,
    marginBottom: 24,
  },
  dropdown: {
    backgroundColor: Colors.innerFieldBackground,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 8,
    width: 120,
  },
  placeholderStyle: {
    color: "white",
    fontSize: 14,
    letterSpacing: 1,
  },
  selectedTextStyle: {
    color: "white",
    fontSize: 14,
    letterSpacing: 1,
  },
  buttonHide: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryColorDark,
  },
  textInBtn: {
    fontSize: 14,
    color: "white",
    letterSpacing: 0.4,
  },
});
