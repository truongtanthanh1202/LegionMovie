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
    width: "100%",
    paddingVertical: 16,
    backgroundColor: "#1F222A",
    flexDirection: "row",
    marginVertical: 8,
    borderColor: Colors.boderColorDark,
    borderWidth: 1,
    borderRadius: 20,
  },
  buttonSignIn: {
    backgroundColor: Colors.redDark,
    padding: 18,
    width: "100%",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 36,
  },
  icon: {
    width: 26,
    height: 26,
    marginRight: 10,
  },
  textTitle: {
    color: "white",
    fontSize: 44,
    marginBottom: 20,
  },
  textInBtn: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default styles;
