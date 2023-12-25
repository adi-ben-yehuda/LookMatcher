import { StyleSheet } from "react-native";
import {  Dimensions } from "react-native";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  logoIcon: {
    height: screenHeight * 0.35,
    width: screenWidth * 0.38,
    top: -screenHeight * 0.08,
    right: screenWidth * 0.3,
    position: "absolute",
  },
  logoIconPosition: {
    left: "50%",
    marginLeft: -75.5,
    position: "absolute",
  },
});

export default styles;
