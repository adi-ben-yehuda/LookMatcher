import { StyleSheet, Dimensions } from 'react-native';
import { Color } from "../../styles/GlobalStyles";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "85%",
  },
  title: {
    top: -15,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: screenHeight * 0.029,
    fontWeight: "bold",
    color: Color.darkPurple,
  },
});

export default styles;