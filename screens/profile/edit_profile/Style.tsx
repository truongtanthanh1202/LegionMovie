import { StyleSheet } from "react-native";
import { Colors } from "../../../constant/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.backgroundColor,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBlock: {
    borderRadius: 32,
    backgroundColor: Colors.backgroundColor,
    paddingHorizontal: 28,
    paddingVertical: 32,
    alignItems: "center",
    marginHorizontal: 40,
  },
  button: {
    paddingVertical: 16,
    flex: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.innerFieldBackground,
    borderRadius: 24,
  },
  textInButton: {
    color: "white",
    fontSize: 14,
    letterSpacing: 1,
  },
  textInTags: {
    color: "white",
    fontSize: 16,
    letterSpacing: 0.6,
  },
  tags: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    minWidth: 60,
    backgroundColor: Colors.backgroundColor,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: Colors.primaryColorLight,
    opacity: 0.8,
  },
  tagsSelected: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    minWidth: 60,
    backgroundColor: Colors.primaryColorLight,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: Colors.primaryColorLight,
  },
  inputText: {
    paddingHorizontal: 14,
    paddingVertical: 14,
    backgroundColor: Colors.innerFieldBackground,
    color: "white",
  },
  dropdown: {
    backgroundColor: Colors.innerFieldBackground,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
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
});

export default styles;
