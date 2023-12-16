import { StyleSheet } from "react-native";
import { Colors } from "../../../constant/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  header: {
    flexDirection: "row",
    marginLeft: 12,
    marginRight: 20,
    alignItems: "center",
    marginTop: 26,
  },
  headerLogoIcon: {
    width: 48,
    height: 48,
  },
  headerTitle: {
    fontSize: 20,
    color: "white",
    letterSpacing: 0.4,
  },
  headerEmpty: {
    flexDirection: "row",
    gap: 6,
    marginHorizontal: 16,
    alignItems: "center",
    marginTop: 16,
  },
  tabsContainer: {
    marginTop: 40,
    marginHorizontal: 20,
    gap: 16,
  },
});

export default styles;
