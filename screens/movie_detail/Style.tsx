import { StyleSheet } from "react-native";
import { Colors } from "../../constant/Color";
import { SIZES } from "../../constant/Constant";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  image: {
    width: "100%",
    height: SIZES.height * 0.33,
  },
  shadow: {
    shadowColor: "black",
    shadowOpacity: 4,
    shadowOffset: { width: -1, height: 1 },
  },
  filmTitle: {
    color: "white",
    fontSize: 24,
    letterSpacing: 0.4,
  },
  textInBtn: {
    fontSize: 15,
    color: "white",
    letterSpacing: 0.6,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    flex: 50,
    backgroundColor: Colors.primaryColorLight,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.primaryColorLight,
  },
  castName: {
    fontSize: 12,
    color: "white",
    marginBottom: 4,
    letterSpacing: 0.4,
    maxWidth: 80,
  },
  castCharacter: {
    fontSize: 12,
    color: "white",
    opacity: 0.7,
    letterSpacing: 0.7,
    maxWidth: 80,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalBlock: {
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    backgroundColor: Colors.backgroundColor,
    paddingHorizontal: 28,
    paddingTop: 12,
    paddingBottom: 32,
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
  modalCloseBtn: {
    width: 40,
    height: 6,
    borderRadius: 8,
    backgroundColor: "#999",
    marginBottom: 20,
  },
});

export default styles;
