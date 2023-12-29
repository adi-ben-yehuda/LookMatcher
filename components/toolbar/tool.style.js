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

center: {
    alignItems: "center",
    justifyContent: "center",
},

  lockIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },

  password: {
    height: 70,
    position: "absolute",
    width: screenWidth,
    left: 0,
    top: screenHeight-70,
     alignItems: "center",
     justifyContent: "center",
  },

  ProfileIcon: {
    width: 35,
    height: 35,
    left: screenWidth * 0.3,
    // alignItems: "center",
    // justifyContent: "center",
    // position:"absolute"
  },

  heartIcon: {
    width: 35,
    height: 35,
    left: screenWidth * 0.12,
    alignItems: "center",
    justifyContent: "center",
    position:"absolute"
  },

  homeIcon: {
    width: 35,
    height: 35,
    right: screenWidth * 0.1 - 55,
    alignItems: "center",
    justifyContent: "center",
    position:"absolute"
  },

  searchIcon: {
    width: 35,
    height: 35,
    right: screenWidth * 0.13,
    alignItems: "center",
    justifyContent: "center",
  },


  shirtIcon: {
    width: 35,
    height: 35,
    right: screenWidth * 0.3,
   // right:0,
    alignItems: "center",
    justifyContent: "center",
  },

  newData: {
    borderRadius: Border.br_11xs,
    //left: "0%",
    bottom: 0,
    //right: "0%",
    //top: "0%",
    height: 70,
    position: "absolute",
    backgroundColor: "#E2DBEA",
    width: "100%",
    alignItems: "flex-start", 
    justifyContent: "center", 


    borderRadius: 50,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    flexDirection: "row",
    //alignItems: "center",
  },

  position: {
    width: screenWidth,
    left: 0,
    buttom: 0,
    position: "absolute",
    
  },
  
});

export default styles;