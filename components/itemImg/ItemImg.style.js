import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { Color } from "../../styles/GlobalStyles";

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
    backgroundColor: "#FBF9FC",
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  image: {
    width: "100%",
    height: screenHeight * 0.4,
    borderRadius: 10,
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
    marginTop: 0,
    marginLeft: screenHeight * 0.03,
    width: screenWidth * 0.96,
    height: screenHeight * 0.05,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    marginTop: 10,
},
itemNameText: {
    fontSize: screenHeight * 0.03,
    fontWeight: 'bold',
    color: Color.darkPurple,
    textDecorationLine: 'underline',
    textAlign: 'center', // Center the text
},

  itemStore: {
    marginTop: screenHeight * 0.01,
    marginLeft: screenHeight * 0.03,
    width: screenWidth * 0.96,
    height: screenHeight * 0.032,
    marginTop: 15,
  },

  itemStoreText: {
    fontWeight: "bold",
    fontSize: screenHeight * 0.02,
    color: "#626161",
  },

  itemPrice: {
    marginLeft: screenHeight * 0.03,
    width: screenWidth * 0.96,
    height: screenHeight * 0.032,
  },

  itemPriceText: {
    fontWeight: "bold",
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
    fontWeight: "bold",
  },

  itemSize: {
    marginLeft: screenHeight * 0.03,
    width: screenWidth * 0.96,
    height: screenHeight * 0.032,
  },

  itemSizeText: {
    fontWeight: "bold",
    fontSize: screenHeight * 0.02,
    color: "#626161",
  },

  load: {
    //flex: 1,
    top: 0.4 * screenHeight,
    justifyContent: "center",
    backgroundColor: "#FBF9FC",
    alignItems: "center",
  },

  colorsRow: {
    flexDirection: "row",
    flexWrap: "wrap", // Allows wrapping to the next line
    justifyContent: "flex-start",
    paddingVertical: 10,
    marginLeft: screenHeight * 0.03,
  },

  colorImage: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginBottom: 10,
  },

  colorRectangle: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginBottom: 10,
  },

  first: {
    height: screenHeight * 0.1,
    borderColor: "#000",
    borderWidth: 0.2,
    alignItems: "center",
    justifyContent: "center", 
    flexDirection: "column",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#FBF9FC",
  },
  title: {
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: screenHeight * 0.02,
    fontWeight: "bold",
    color: Color.darkPurple, 
    textAlign: "center", 
    paddingHorizontal: 40,
  },
});

export default styles;
