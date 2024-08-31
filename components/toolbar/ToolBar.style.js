import { StyleSheet, Dimensions } from "react-native";
import { Border } from "../../styles/GlobalStyles";

const window = Dimensions.get("window");
const screenWidth = window.width;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#FBF9FC",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  center: {
    alignItems: "center",
    justifyContent: "center",
  },

  lockIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },

  password: {
    height: 70,
    position: "absolute",
    width: screenWidth,
    backgroundColor: "#FBF9FC",
    left: 0,
    justifyContent: "center",
    bottom: 0,
  },

  ProfileIcon1: {
    width: 35,
    height: 35,
    left: screenWidth * 0.85,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },

  heartIcon1: {
    width: 35,
    height: 35,
    left: screenWidth * 0.65,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },

  homeIcon: {
    width: 35,
    height: 35,
    left: screenWidth * 0.45,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },

  searchIcon: {
    width: 35,
    height: 35,
    right: screenWidth * 0.65,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },

  shirtIcon: {
    width: 35,
    height: 35,
    right: screenWidth * 0.85,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },

  newData: {
    borderRadius: Border.br_11xs,
    bottom: 0,
    height: 70,
    position: "absolute",
    backgroundColor: "#FBF9FC",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",

    borderRadius: 50,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    flexDirection: "row",
  },

  position: {
    width: screenWidth,
    left: 0,
    buttom: 0,
    position: "absolute",
  },
});

export default styles;
