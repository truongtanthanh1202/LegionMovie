import { StyleSheet } from "react-native";
import { Colors } from "../../constant/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.backgroundColor,
  },
  buttonIcon: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 30,
    backgroundColor: "#1F222A",
    borderColor: Colors.boderColorDark,
    borderWidth: 1,
    borderRadius: 16,
  },
  buttonSignIn: {
    backgroundColor: Colors.redDark,
    padding: 18,
    width: "100%",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  icon: {
    width: 26,
    height: 26,
  },
  textTitle: {
    color: "white",
    fontSize: 30,
    marginBottom: 20,
    letterSpacing: 1,
    textAlign: "center",
  },
  textInBtn: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  inputText: {
    paddingHorizontal: 14,
    paddingVertical: 14,
    backgroundColor: Colors.innerFieldBackground,
    color: "white",
  },
});

export default styles;
