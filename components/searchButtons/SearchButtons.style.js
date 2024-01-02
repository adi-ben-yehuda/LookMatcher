import { StyleSheet, Dimensions } from "react-native";
import { Color, Border } from "../../styles/GlobalStyles";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  registerLayout: {
    backgroundColor: "transparent",
    height: 113,
    width: 275,
    borderRadius: Border.br_3xs,
    marginLeft: -137.5,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonSearch: {
    color: Color.white,
    fontSize: 40,
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
    top: 65,
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
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default styles;
