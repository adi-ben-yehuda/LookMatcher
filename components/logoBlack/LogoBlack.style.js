import { StyleSheet, Dimensions } from "react-native";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  logoIcon: {
    height: screenHeight * 0.35,
    width: screenWidth,
    backgroundColor: "#E2DBEA",
    alignSelf: "center",
    alignItems: "center",
  },
});

export default styles;
