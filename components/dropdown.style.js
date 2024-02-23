import { StyleSheet, Dimensions } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../styles/GlobalStyles";

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
    width: 30,
    height: 30,
    marginRight: 10, 
    borderWidth: 1,
    borderColor: 'black',
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
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
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

  textSelectedColorStyle: {
    marginRight: 5,
    fontSize: 16,
    color: Color.white,
  },
  
  searchButtonContainer: {
    top: screenHeight * 0.8,
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  searchButton: {
    width: 140,
    height:42,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  searchText: {
    color: Color.white,
    fontSize: 25,
    top: 6,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default styles;
