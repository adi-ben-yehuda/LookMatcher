import { StyleSheet, Dimensions } from "react-native";

const window = Dimensions.get("window");
const screenWidth = window.width;

const styles = StyleSheet.create({
  userGreeting: {
    backgroundColor: "#FBF9FC",
    top: 0,
    padding: 20,
  },

  userGreetingText: {
    fontSize: screenWidth * 0.05,
    left: screenWidth * 0.05,
    fontWeight: "bold",
    color: "#59358C",
  },
});

export default styles;
