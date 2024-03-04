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
    top: screenHeight * 0.08,
    color: Color.darkPurple,
    width: screenWidth,
    textAlign: "center",
    position: "absolute",
    fontWeight: "bold",
    fontSize: screenHeight * 0.033,
    fontWeight: "bold",
  },

  title2: {
    fontSize: screenHeight * 0.019,
    fontWeight: "bold",
    color: "#333",
    top: screenHeight * 0.17,
    width: screenWidth - screenWidth * 0.05,
    height: screenHeight * 0.06,
    left: screenWidth * 0.05,
    right: screenWidth * 0.05,
  },

  title3: {
    fontSize: screenHeight * 0.019,
    fontWeight: "bold",
    color: "#333",
    top: screenHeight * 0.33,
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




  searchButtonContainer: {
    position: "absolute",
    top: screenHeight * 0.83 ,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  searchButton: {
    width: 140,
    height: 50,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    
  },
  searchText: {
    color: Color.white,
    fontSize: 21,
    top: 11,
    textAlign: "center",
    textAlignVertical: "center",
  },


  imageContainer: {
    width: 70,
    height: 70,
    top: screenHeight * 0.3,
    left: screenWidth * 0.39,
    borderRadius: 8,
    marginBottom: 5,
    backgroundColor: "#FBF9FC", // Set a background color
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    backgroundColor: "#FBF9FC", 
  },
  errorText: {
    color: "red",
    marginTop: 16,
  },



  container4: {
    top: screenHeight * 0.29,
  },
  container5: {
    top: screenHeight * 0.28,
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

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: Color.darkPurple,
    
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
  selectedTextStyle: {
    fontSize: 14,
    color: Color.darkPurple,
  },

});

export default styles;
