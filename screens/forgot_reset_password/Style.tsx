import { StyleSheet } from "react-native";
import { Colors } from "../../constant/Color";

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
    textAlign: "center",
  },
  inputText: {
    paddingHorizontal: 14,
    paddingVertical: 14,
    backgroundColor: Colors.innerFieldBackground,
    color: "white",
  },
});

export default styles;
