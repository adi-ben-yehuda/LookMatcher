import { StyleSheet, Dimensions } from "react-native";
import { Color, Border } from "../../styles/GlobalStyles";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  image: {
    // height: screenHeight * 0.2,
    // width: screenWidth * 0.85,
    // bottom: screenHeight * 0.1,
    // right: (screenWidth - screenWidth * 0.85) / 2,
    // borderRadius: (screenWidth * 0.1) / 2,
    // overflow: "hidden",
    // position: "absolute",
    height: screenHeight * 0.2,
    width: "100%",
    bottom: screenHeight * 0.1,
    borderRadius: (screenWidth * 0.1) / 2,
    overflow: "hidden",
    position: "absolute",
  },
});

export default styles;
