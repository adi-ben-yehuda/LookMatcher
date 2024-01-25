import { StyleSheet, Dimensions } from "react-native";
import { Color, Border } from "../../styles/GlobalStyles";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightPink,
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
    backgroundColor: Color.lightPink,
  },
  rectangleLayout: {
    opacity: 0.85,
    position: "absolute",
  },

  buttonsUp: {
    backgroundColor: "transparent",
    height: screenHeight * 0.15,
    width: screenWidth * 0.37,
    borderRadius: Border.br_3xs,
    position: "absolute",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  recUpLeft: {
    left: screenWidth * 0.09,
  },

  recUpRight: {
    right: screenWidth * 0.09,
  },

  buttonsDown: { top: screenHeight * 0.18 },

  recDownLeft: {
    left: screenWidth * 0.09,
  },

  recDownRight: {
    right: screenWidth * 0.09,
  },

  iconsButtons: {
    height: "35%",
    width: "35%",
    resizeMode: "contain",
    marginTop: screenHeight * 0.008,
    marginRight: screenWidth * 0.001,
  },

  text: {
    marginTop: screenHeight * 0.01,
    color: Color.white,
    fontSize: screenWidth * 0.07,
  },

  image4Icon: {
    height: screenHeight * 0.2,
    width: screenWidth * 0.85,
    bottom: screenHeight * 0.1,
    right: (screenWidth - screenWidth * 0.85) / 2,
    borderRadius: (screenWidth * 0.1) / 2,
    overflow: "hidden",
    position: "absolute",
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
    right: "19.34%",
    bottom: "68.08%",
    left: "68.45%",
    backgroundColor: Color.ll,
  },
});

export default styles;
