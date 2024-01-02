import { StyleSheet, Dimensions } from "react-native";
import { Color, FontSize, Border } from "../../styles/GlobalStyles";


const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#E2DBEA",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

});

export default styles;