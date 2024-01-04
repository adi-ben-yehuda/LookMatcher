import { StyleSheet, Dimensions } from "react-native";
import { Color, Border } from "../../styles/GlobalStyles";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#E2DBEA",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  title: {
    top: screenHeight * 0.05,
    color: Color.black,
    width: screenWidth,
    textAlign: "center",
    position: "absolute",
    fontWeight: "bold",
    fontSize: screenHeight * 0.03,
    fontWeight: "bold",
    color: "#333",
  },

  title2: {
    fontSize: screenHeight * 0.02,
    fontWeight: "bold",
    color: "#333",
    top: screenHeight * 0.12,
    width: screenWidth - screenWidth * 0.05,
    height: screenHeight * 0.06,
    left: screenWidth * 0.05,
    right: screenWidth * 0.05,
  },

  title3: {
    fontSize: screenHeight * 0.02,
    fontWeight: "bold",
    color: "#333",
    top: screenHeight * 0.35,
    width: screenWidth - screenWidth * 0.05,
    height: screenHeight * 0.06,
    left: screenWidth * 0.05,
    right: screenWidth * 0.05,
  },

  iconsButtons: {
    height: "35%",
    width: "35%",
    resizeMode: "contain",
    marginTop: screenHeight * 0.008,
    marginRight: screenWidth * 0.001,
  },

  text: {
    color: Color.white,
    fontSize: screenWidth * 0.05,
  },

  recUpLeft: {
    backgroundColor: "transparent",
    top: screenHeight * 0.15,
    height: screenHeight * 0.12,
    width: screenWidth * 0.33,
    borderRadius: Border.br_3xs,
    left: screenWidth * 0.09,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },

  recUpRight: {
    backgroundColor: "transparent",
    top: screenHeight * 0.15,
    height: screenHeight * 0.12,
    width: screenWidth * 0.33,
    borderRadius: Border.br_3xs,
    left: screenWidth * 0.55,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    top: screenHeight * 0.35,
    left: screenWidth * 0.05,
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

  searchButtonContainer: {
    position: "absolute",
    bottom: screenHeight * 0.05 + 60,
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
