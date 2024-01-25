import { StyleSheet, Dimensions } from "react-native";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({

userGreeting: {
    backgroundColor: "#E2DBEA",
    top: 0,
    padding: 20,
  }, 

  userGreetingText: {
    fontSize: screenWidth * 0.05,
    color: "#59358C"
  },
});

export default styles;