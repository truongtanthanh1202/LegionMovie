import { StyleSheet } from "react-native";
import { Colors } from "../../constant/Color";

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  container: {
    flex: 1,
    marginBottom: 68,
  },
  headerEmpty: {
    flexDirection: "row",
    gap: 6,
    marginHorizontal: 16,
    alignItems: "center",
    marginTop: 16,
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
  basicInfoContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  userName: {
    marginTop: 16,
    fontSize: 22,
    color: "white",
    letterSpacing: 1,
  },
  userEmail: {
    marginTop: 8,
    fontSize: 14,
    color: "white",
    letterSpacing: 0.6,
  },
  tabsContainer: {
    marginTop: 40,
    marginHorizontal: 20,
    gap: 16,
  },
});

export default styles;
