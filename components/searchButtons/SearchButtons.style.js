import { StyleSheet, Dimensions } from "react-native";
import { Color, Border } from "../../styles/GlobalStyles";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  registerLayout: {
    backgroundColor: "transparent",
    width: screenWidth * 0.55,
    height: screenHeight * 0.1,
    borderRadius: Border.br_3xs,
    marginLeft: screenWidth * -0.3,
    left: "50%",
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center', 
   
  },
  buttonSearch: {
    color: Color.white,
    fontSize: screenHeight * 0.033,
    textAlign: "center",
    textAlignVertical: "center",
  },
  register: {
    top: screenHeight * 0.3,
  },
  register1: {
    top: screenHeight * 0.5,
  },
  search: {
    top: screenHeight * 0.1,
    color: Color.darkPurple,
    fontSize: screenHeight * 0.04,
    width: screenWidth,
    textAlign: "center",
    position: "absolute",
    fontWeight: "bold",
  },
  searchPage: {
    backgroundColor: "#FBF9FC",
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default styles;
