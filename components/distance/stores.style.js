import { StyleSheet, Dimensions } from 'react-native';
import { Color } from "../../styles/GlobalStyles";
import styles from "./stores.js";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

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
    fontSize: screenHeight * 0.025,
    fontWeight: "bold",
    color: Color.darkPurple,
    textAlign: "center",
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#dddddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
});

export default styles;
