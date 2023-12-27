import { StyleSheet, Dimensions } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../styles/GlobalStyles";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Color.lightPink,
    flex: 1,
    height: screenHeight,
    overflow: "hidden",
    width: "100%",
  },
  title: {
    top: 65,
    color: Color.black,
    fontSize: 28,
    width: screenWidth,
    textAlign: "center",
    position: "absolute",
    fontWeight: "bold",
  },

  container: {
    top: screenHeight * 0.15,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    width: screenWidth * 0.9,
    alignSelf: "center",
  },
  buttonIcon: {
    width: 20,
    height: 20,
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  listContainer: {
    borderWidth: 1,
    borderColor: Color.gray,
    maxHeight: 150,
    zIndex: 1,
    backgroundColor: Color.lightPink,
    width: screenWidth * 0.9,
    alignSelf: "center",
    fontSize: 16,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: Color.gray,
  },
  selectedOption: {
    backgroundColor: Color.lightGray,
  },
});

export default styles;
