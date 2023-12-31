import { StyleSheet } from "react-native";
import { Colors } from "../../constant/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  topSearch: {
    flexDirection: "row",
    gap: 12,
    marginTop: 30,
    alignItems: "center",
  },
  body: {
    flex: 1,
    marginTop: 20,
  },
  inputText: {
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: Colors.innerFieldBackground,
    color: "white",
  },
  inputTextActive: {
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: Colors.innerFieldBackground,
    color: "white",
  },
  filterButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.innerFieldBackgroundActive,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  textEmpty: {
    fontSize: 24,
    color: Colors.primaryColorLight,
    letterSpacing: 0.4,
    marginTop: 20,
  },
  textSubEmpty: {
    marginTop: 14,
    fontSize: 16,
    color: "white",
    width: 340,
    textAlign: "center",
    lineHeight: 20,
  },
});

export default styles;
