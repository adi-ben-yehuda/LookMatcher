import { StyleSheet, Dimensions } from "react-native";
import { Color } from "../../styles/GlobalStyles";

const window = Dimensions.get("window");
const screenHeight = window.height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF9FC",
    position: "relative",
  },
  first: {
    height: screenHeight * 0.1,
    borderColor: "#000",
    borderWidth: 0.2,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#FBF9FC",
  },
  titleText: {
    fontSize: screenHeight * 0.03,
    fontWeight: "bold",
    color: Color.darkPurple,
    textAlign: "center",
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 40,
  },

  buttonContainer: {
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1.5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: "5%",
    borderColor: Color.darkPurple,
  },
  buttonText: {
    fontSize: 16,
    color: Color.darkPurple,
  },
});

export default styles;
