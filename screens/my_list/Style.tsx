import { StyleSheet } from "react-native";
import { Colors } from "../../constant/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 14,
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
    width: 280,
    textAlign: "center",
    lineHeight: 20,
  },
  headerEmpty: {
    flexDirection: "row",
    gap: 6,
    marginHorizontal: 20,
    alignItems: "center",
    marginTop: 20,
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
  header: {
    flexDirection: "row",
    marginLeft: 12,
    marginRight: 20,
    alignItems: "center",
    marginTop: 16,
    justifyContent: "space-between",
  },
  categoryContainer: {
    marginTop: 16,
    marginLeft: 20,
    marginRight: 6,
  },
  categoriesScrollView: {
    gap: 4,
  },
  buttonCategoryActive: {
    backgroundColor: Colors.redLight,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1.6,
    borderColor: Colors.redLight,
  },
  textButtonActive: {
    fontSize: 14,
    color: "white",
    letterSpacing: 0.2,
  },
  movieContainer: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    marginBottom: 68,
  },
});

export default styles;
