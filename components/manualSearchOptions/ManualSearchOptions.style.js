import { StyleSheet, Dimensions } from "react-native";
import { Color, Border } from "../../styles/GlobalStyles";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FBF9FC",
    flex: 1,
    overflow: "hidden",
  },

  title: {
    top: screenHeight * 0.07,
    fontSize: screenHeight * 0.07,
    fontWeight: "bold",
    color: Color.darkPurple,
    fontSize: 30,
    width: screenWidth,
    textAlign: "center",
    position: "absolute",
  },
  container1: {
    top: screenHeight * 0.205,
  },
  container2: {
    top: screenHeight * 0.215,
  },
  container3: {
    top: screenHeight * 0.225,
  },
  container4: {
    top: screenHeight * 0.235,
  },
  container5: {
    top: screenHeight * 0.245,
  },

  colorRectangle: {
    marginRight: "auto", // Pushes the text to the right
    width: 30,
    height: 30,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  container: { padding: 16 },

  dropdown: {
    borderColor: Color.darkPurple,
    borderWidth: 1.5,
    height: 50,
    //backgroundColor: "#f0f0f0",
    backgroundColor: Color.white,
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  placeholderStyle: {
    fontSize: 16,
    color: Color.darkPurple,
  },
  selectedTextStyle: {

    fontSize: 14,
    color: Color.darkPurple,
    marginRight: 'auto', 
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: Color.darkPurple,
  },

  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "flex-end", // Aligns children (text and rectangle) to the right
    alignItems: "center",
  },
  selectedStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    backgroundColor: "white",
    shadowColor: "#000",
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderColor: Color.darkPurple,
    borderWidth: 1.5,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
    //fontWeight: "bold",
    color: Color.darkPurple,
  },

  textStyle: {
    fontSize: 16,
    color: Color.darkPurple,
    marginRight: "auto",
  },

  searchText: {
    color: Color.white,
    fontSize: 25,
    top: 6,
    textAlign: "center",
    textAlignVertical: "center",
  },


 buttonContainerSelected2: {
    top: screenHeight * 0.88, // Updated value when isStoreSelected is true
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainerSelected3: {
    top: screenHeight * 0.93, // Updated value when isStoreSelected is true
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainerSelected4: {
    top: screenHeight * 0.98, // Updated value when isStoreSelected is true
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    top: screenHeight * 0.8, // Default value when isStoreSelected is false
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  searchButton: {
    width: 140,
    height: 42,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },

  errorMessage: {
    top: screenHeight * 0.248,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    fontWeight: "bold",
    color: Color.red,
    fontSize: screenHeight * 0.02,
    width: screenWidth * 0.7,
    textAlign: "center",
  },

 
});

export default styles;
