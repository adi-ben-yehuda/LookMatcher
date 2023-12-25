import { StyleSheet, Dimensions } from "react-native";


const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
 

    toolbar: {
        height: screenHeight * 0.08,
        width: screenWidth,
        backgroundColor: "#E2DBEA",
        bottom: 0,
        position: "absolute",
        borderRadius: 50,
        borderWidth: 1, // Border width
        borderColor: "rgba(0, 0, 0, 0.1)", // Border color
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        flexDirection: "row",
        alignItems: "center",
      },
      shirtBar: {
        height: screenHeight * 0.05,
        width: screenWidth * 0.1,
        left: screenWidth * 0.1,
        position:"relative",
      },
    
      searchBar: {
        height: screenHeight * 0.05,
        width: screenWidth * 0.1,
        left: screenWidth * 0.17,
        position:"relative",
      },
    
      logoBar: {
        height: screenHeight * 0.15,
        width: screenWidth * 0.15,
        left: screenWidth * 0.22,
        position:"relative",
      },
      heartBar: {
        height: screenHeight * 0.05,
        width: screenWidth * 0.1,
        left: screenWidth * 0.28,
        position:"relative",
      },
    
      profileBar: {
        height: screenHeight * 0.05,
        width: screenWidth * 0.1,
        left: screenWidth * 0.35,
        position:"relative",
      },
  
});

export default styles;
