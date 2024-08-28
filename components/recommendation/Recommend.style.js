import { StyleSheet, Dimensions } from "react-native";
import { Color, Border } from "../../styles/GlobalStyles";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  resultsLayout: {
    width: "100%",
    overflow: "hidden",
  },

  horizontalListContainer: {
    top: screenHeight * 0.1,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: -10, // Adjust this value to bring items closer to the edge
  },
  scrollButton: {
    width: 30,
    height: 30,
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  scrollButtonText: {
    color: "black",
    fontSize: 18,
  },
  flatListContentContainer: {
    paddingHorizontal: 10, // Adjust this value to bring items closer to the edge
  },

  results: {
    backgroundColor: "#fff",
    flex: 1,
    height: 852,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    marginTop: screenHeight * 0.025,
  },
  cardContainer: {
    backgroundColor: "#f0f0f0",
    margin: 10,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    width: screenWidth * 0.6, // Adjust width as needed
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
    elevation: 5, // For Android
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
  buttons: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  makeLayout: {
    backgroundColor: "transparent",
    height: screenHeight * 0.085,
    width: screenWidth * 0.4,
    borderRadius: Border.br_3xs,
    position: "absolute",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  makeAnContainer: {
    fontSize: screenHeight * 0.022,
    color: Color.white,
    textAlign: "center",
  },
  makeAnOutfitWrapper: {
    width: screenWidth * 0.3,
    height: screenWidth * 0.08,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  makeMe: {
    right: screenWidth * 0.07,
    position: "absolute",
    bottom: screenHeight * 0.1,
  },
  makeYourself: {
    left: screenWidth * 0.07,
    bottom: screenHeight * 0.1,
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

  load: {
    top: 0.4 * screenHeight,
    justifyContent: "center",
    backgroundColor: "#FBF9FC",
    alignItems: "center",
  },
  container2: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: "#FBF9FC",
  },
});

export default styles;
