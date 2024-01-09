import { StyleSheet, Dimensions } from "react-native";

const window = Dimensions.get("window");
const screenHeight = window.height;

const styles = StyleSheet.create({
  logout: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 10,
  },
  icon: {
    height: screenHeight * 0.045,
    width: screenHeight * 0.045,
    marginTop: screenHeight * 0.015,
  },
});

export default styles;
