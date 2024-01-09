import { StyleSheet, Dimensions } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../styles/GlobalStyles";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Color.lightPink,
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
  title: {
    top: screenHeight * 0.08,
    color: Color.black,
    fontSize: 28,
    width: screenWidth,
    textAlign: "center",
    position: "absolute",
    fontWeight: "bold",
  },

  container: {
    top: screenHeight * 0.19,
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
  selectedColorOption: {
    borderColor: Color.black,
    borderWidth: 3.5,
    borderRadius: 50,
    overflow: "hidden",
    margin: 15,
  },

  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20, // to make it a circle
    margin: 15,
  },
  colorText: {
    fontSize: 16,
  },
  selectedColorCircle: {
    borderWidth: 2,
    borderColor: Color.black,
  },
  colorListContainer: {
    borderWidth: 1,
    borderColor: Color.gray,
    zIndex: 1,
    backgroundColor: Color.lightPink,
    width: screenWidth * 0.9,
    alignSelf: "center",
    fontSize: 16,
    flexDirection: "row", // Arrange colors horizontally
    flexWrap: "wrap", // Wrap to a new row when there's not enough space
  },

  searchButtonContainer: {
    bottom: screenHeight * 0.05 + 60,
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  searchButton: {
    width: 180,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  searchText: {
    color: Color.white,
    fontSize: 36,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default styles;
