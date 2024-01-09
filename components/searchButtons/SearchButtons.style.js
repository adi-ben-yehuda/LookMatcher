import { StyleSheet, Dimensions } from "react-native";
import { Color, Border } from "../../styles/GlobalStyles";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  registerLayout: {
    backgroundColor: "transparent",
    width: screenWidth * 0.6,
    borderRadius: Border.br_3xs,
    marginLeft: screenWidth * -0.3,
    left: "50%",
    position: "absolute",
  },
  buttonSearch: {
    color: Color.white,
    fontSize: screenHeight * 0.038,
    textAlign: "center",
    textAlignVertical: "center",
  },
  register: {
    top: screenHeight * 0.2,
  },
  register1: {
    top: screenHeight * 0.4,
  },
  search: {
    top: screenHeight * 0.08,
    color: Color.black,
    fontSize: screenHeight * 0.04,
    width: screenWidth,
    textAlign: "center",
    position: "absolute",
    fontWeight: "bold",
  },
  searchPage: {
    backgroundColor: Color.lightPink,
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default styles;
