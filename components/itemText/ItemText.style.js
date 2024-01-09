import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  itemName: {
    marginTop: screenHeight * 0.02,
    marginLeft: screenHeight * 0.01,
    width: screenWidth * 0.96,
    height: screenHeight * 0.05,
    backgroundColor: "#fff",
  },

  itemNameText: {
    fontSize: screenHeight * 0.04,
    fontWeight: "bold",
    color: "#333",
  },

  itemName: {
    marginTop: screenHeight * 0.02,
    marginLeft: screenHeight * 0.01,
    width: screenWidth * 0.96,
    height: screenHeight * 0.05,
  },

  itemNameText: {
    fontSize: screenHeight * 0.04,
    fontWeight: "bold",
    color: "#333",
  },

  itemPrice: {
    marginTop: screenHeight * 0.02,
    marginLeft: screenHeight * 0.01,
    width: screenWidth * 0.96,
    height: screenHeight * 0.032,
  },

  itemPriceText: {
    fontSize: screenHeight * 0.02,
    color: "#626161",
  },

  itemColor: {
    marginLeft: screenHeight * 0.01,
    width: screenWidth * 0.96,
    height: screenHeight * 0.032,
  },

  itemColorText: {
    fontSize: screenHeight * 0.02,
    color: "#626161",
  },

  itemSize: {
    marginLeft: screenHeight * 0.01,
    width: screenWidth * 0.96,
    height: screenHeight * 0.032,
  },

  itemSizeText: {
    fontSize: screenHeight * 0.02,
    color: "#626161",
  },
});

export default styles;
