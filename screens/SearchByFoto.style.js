import { StyleSheet, Dimensions } from "react-native";
import { Color, FontSize, Border } from "../styles/GlobalStyles";


const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#E2DBEA",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },



  title: {
    top: screenHeight * 0.05,
    width: screenWidth - (screenWidth * 0.05),
    height: screenHeight * 0.08,
    left: screenWidth * 0.05,
   

  },

  titelText: {
    fontSize: screenHeight * 0.03,
    fontWeight: 'bold',
    color: '#333',
  },

  title2: {
    top: screenHeight * 0.12,
    width: screenWidth - (screenWidth * 0.05),
    height: screenHeight * 0.06,
    left: screenWidth * 0.05,
    right: screenWidth * 0.05
   

  },

  titelText2: {
    fontSize: screenHeight * 0.02,
    fontWeight: 'bold',
    color: '#333',
  },

  iconsButtons: {
    height: "35%",
    width: "35%",
    resizeMode: "contain",
    marginTop: screenHeight * 0.008,
    marginRight: screenWidth * 0.001,
  },

  text: {
    color: Color.white,
    fontSize: screenWidth * 0.05,
  },

  
  recUpLeft: {
    backgroundColor: "transparent",
    top: screenHeight * 0.2,
    height: screenHeight * 0.12,
    width: screenWidth * 0.33,
    borderRadius: Border.br_3xs,
    left: screenWidth * 0.09,
     position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },

  recUpRight: {
    backgroundColor: "transparent",
    top: screenHeight * 0.2,
    height: screenHeight * 0.12,
    width: screenWidth * 0.33,
    borderRadius: Border.br_3xs,
    left: screenWidth * 0.55,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },


});

export default styles;