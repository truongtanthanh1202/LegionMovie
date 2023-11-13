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
    marginBottom: 0,
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
});

export default styles;
