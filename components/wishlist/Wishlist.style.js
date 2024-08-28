import { Color, FontSize, Border } from "../../styles/GlobalStyles";
import { StyleSheet, Dimensions } from "react-native";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  resultsLayout: {
    width: "100%",
    overflow: "hidden",
  },
  resultLayout: {
    height: 270,
    top: 178,
    width: 157,
    position: "absolute",
  },
  results: {
    backgroundColor: "#fff",
    flex: 1,
    height: 852,
    overflow: "hidden",
  },

  headline: {
    marginLeft: "auto",
    marginRight: "auto",
    top: screenHeight * 0.02,
    fontSize: screenWidth * 0.06,
    lineHeight: screenWidth * 0.05,
    marginLeft: "auto",
    marginRight: "auto",
    textTransform: "capitalize",
    fontWeight: "700",
    color: Color.darkPurple,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "#fff",
    marginTop: 5,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: "#f0f0f0", //#fff
    marginTop: 10,
    margin: 12,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    position: "relative",
  },
  itemImage: {
    height: screenHeight * 0.2 + screenWidth * 0.18,
    resizeMode: "cover",
    borderRadius: 4,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  favoriteIcon: {
    position: "absolute",
    bottom: -5,
    right: -2,
    zIndex: 1,
  },
  favoriteImage: {
    width: 30,
    height: 30,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  itemCompany: {
    fontSize: 14,
    color: "#666",
  },

  emptyItem: {
    backgroundColor: "#FBF9FC",
  },

  noResultsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  noResults: {
    top: screenHeight * 0.25,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
