import { StyleSheet, Dimensions } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../styles/GlobalStyles";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  searchPage: {
    borderRadius: 45,
    backgroundColor: "#dfdae7",
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default styles;
