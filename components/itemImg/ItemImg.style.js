import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: "#FBF9FC",
  },
  card: {
    elevation: 3,
    backgroundColor: "#FBF9FC",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 6,
    marginHorizontal: 12,
    overflow: "hidden",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: screenHeight * 0.07,

  },
  image: {
    width: "100%",
    height: screenHeight * 0.6,
  },

  buttonPrev: {
    left: screenWidth * 0.09,
    top: screenHeight * 0.1,
    position: "absolute",
    resizeMode: "contain",
    width: "20%",
    height: "20%",
  },

  iconPrev: {
    right: screenWidth * 0.02,
    top: screenWidth * 0.4,
    width: "30%",
    height: "30%",
    resizeMode: "contain",
  },
  iconNext: {
    left: screenWidth * 0.02,
    top: screenWidth * 0.4,
    width: "30%",
    height: "30%",
    resizeMode: "contain",
  },
  buttonNext: {
    left: screenWidth * 0.85,
    top: screenHeight * 0.1,
    position: "absolute",
    resizeMode: "contain",
    width: "20%",
    height: "20%",
  },

  back: {
    left: screenWidth * 0.07,
    top: screenWidth * 0.02,
    width: "30%",
    height: "30%",
    resizeMode: "contain",
  },
  back2: {
    left: screenWidth * 0.01,
    top: screenHeight * 0.01,
    position: "absolute",
    resizeMode: "contain",
    width: "35%",
    height: "35%",
  },

  heart: {
    right: screenWidth * 0.04,
    top: screenWidth * 0.02,
    width: "30%",
    height: "30%",
    position: "absolute",
    resizeMode: "contain",
  },

  itemName: {
    marginTop: screenHeight * 0.04,
    marginLeft: screenHeight * 0.03,
    width: screenWidth * 0.96,
    height: screenHeight * 0.05,
  },

  itemNameText: {
    fontSize: screenHeight * 0.04,
    fontWeight: "bold",
    color: "#333",
  },

  itemNameText: {
    fontSize: screenHeight * 0.03,
    marginRight: screenHeight * 0.03,
    fontWeight: "bold",
    color: "#333",
  },

  itemStore: {
    marginTop: screenHeight * 0.01,
    marginLeft: screenHeight * 0.03,
    width: screenWidth * 0.96,
    height: screenHeight * 0.032,
  },

  itemStoreText: {
    fontSize: screenHeight * 0.02,
    color: "#626161",
  },

  itemPrice: {
    marginLeft: screenHeight * 0.03,
    width: screenWidth * 0.96,
    height: screenHeight * 0.032,
  },

  itemPriceText: {
    fontSize: screenHeight * 0.02,
    color: "#626161",
  },


  itemColor: {
    marginLeft: screenHeight * 0.03,
    width: screenWidth * 0.96,
    height: screenHeight * 0.032,
  },

  itemColorText: {
    fontSize: screenHeight * 0.02,
    color: "#626161",
  },

  itemSize: {
    marginLeft: screenHeight * 0.03,
    width: screenWidth * 0.96,
    height: screenHeight * 0.032,
  },

  itemSizeText: {
    fontSize: screenHeight * 0.02,
    color: "#626161",
  },

  load: {
    //flex: 1,
    top:0.4*screenHeight,
    justifyContent: "center",
    backgroundColor: "#FBF9FC",
    alignItems: "center",
  },
  
  colorsRow: {
    flexDirection: "row",
    paddingVertical: 10,
  },

  colorImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default styles;
