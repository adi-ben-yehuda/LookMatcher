import { StyleSheet, Dimensions } from "react-native";
import { Color, Border } from "../../styles/GlobalStyles";


const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  home: {
    //borderRadius: 45,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#E2DBEA",
  },

  iconsShadowBox: {
    height: screenHeight * 0.32,
    width: screenWidth,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    position: "absolute",
    top: screenHeight * 0.25,
    backgroundColor: "#E2DBEA",
  },
  rectangleLayout: {
    opacity: 0.85,
    borderRadius: Border.br_xs,
    position: "absolute",
  },

  recUpLeft: {
    //rec up
    backgroundColor: "transparent",
    height: screenHeight * 0.12,
    width: screenWidth * 0.33,
    borderRadius: Border.br_3xs,
    top: screenHeight * 0.27,
    left: screenWidth * 0.09,
    position: "absolute",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  recUpRight: {
    //rec up
    backgroundColor: "transparent",
    height: screenHeight * 0.12,
    width: screenWidth * 0.33,
    borderRadius: Border.br_3xs,
    top: screenHeight * 0.27,
    right: screenWidth * 0.09,
    position: "absolute",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  recDownLeft: {
    //rec up
    backgroundColor: "transparent",
    height: screenHeight * 0.12,
    width: screenWidth * 0.33,
    borderRadius: Border.br_3xs,
    top: screenHeight * 0.43,
    left: screenWidth * 0.09,
    position: "absolute",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  recDownRight: {
    backgroundColor: "transparent",
    height: screenHeight * 0.12,
    width: screenWidth * 0.33,
    borderRadius: Border.br_3xs,
    position: "absolute",
    top: screenHeight * 0.43,
    right: screenWidth * 0.09,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  iconsButtons: {
    height: "25%",
    width: "25%",
   
    marginTop: screenHeight * 0.008,
    marginRight: screenWidth * 0.001,
  },

  text: {
    color: Color.colorGray,
    fontSize: screenWidth * 0.05,
    //marginTop: 3, // Adjust based on your preference
  },

  image4Icon: {
    height: screenHeight * 0.2,
    width: screenWidth * 0.85,
    bottom: screenHeight * 0.10,
    right: (screenWidth - screenWidth * 0.85) / 2,
    borderRadius: (screenWidth * 0.1) / 2,
    overflow: "hidden",
    position: "absolute",

    // shadowColor: "#000", // Shadow color
    // shadowOffset: { width: 0, height: 2 }, // Shadow offset
    // shadowOpacity: 0.5, // Shadow opacity
    // shadowRadius: 4, // Shadow radius
   
    
  },


  
  iconsChild: {
    top: 0,
    backgroundColor: Color.ll,
  },
  icons: {
    top: 188,
  },
  rectangle: {
    height: "5.63%",
    width: "12.21%",
    top: "26.29%",
    right: "19.34%",
    bottom: "68.08%",
    left: "68.45%",
    backgroundColor: Color.ll,
  },

  logoIcon: {
    height: screenHeight * 0.35,
    width: screenWidth * 0.38,
    top: -screenHeight * 0.08,
    right: screenWidth * 0.3,
    position: "absolute",
  },

 
});

export default styles;
