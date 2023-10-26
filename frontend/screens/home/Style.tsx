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
    marginBottom: 68,
  },
  image: {
    width: "100%",
    height: 480,
  },
  filmTitle: {
    color: "white",
    fontSize: 24,
    letterSpacing: 0.4,
  },
  filmCatefories: {
    color: "white",
    fontSize: 12,
    letterSpacing: 0.4,
  },
  textShadow: {
    textShadowColor: "black",
    textShadowRadius: 4,
    textShadowOffset: { width: -1, height: 1 },
  },
  buttonShadow: {
    shadowColor: "black",
    shadowOpacity: 4,
    shadowOffset: { width: -1, height: 1 },
  },
  playButton: {
    flexDirection: "row",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 18,
    backgroundColor: Colors.primaryColorLight,
    alignItems: "center",
  },
});

export default styles;
