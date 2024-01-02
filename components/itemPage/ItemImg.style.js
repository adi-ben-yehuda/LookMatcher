import { StyleSheet } from "react-native";
import {  Dimensions } from "react-native";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
    container: {
   
        width: screenWidth,
        height: screenHeight * 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff"
      },
    
      itemImg: {
        width: '100%', 
        height: '100%', 
      },
    
    
    
      back: {
        left:screenWidth * 0.02,
        top:screenWidth * 0.02,
        width: screenWidth * 0.05,
        height: screenHeight * 0.05,
        position:"absolute"
    
      },
    
      heart: {
        right:screenWidth * 0.02,
        top:screenWidth * 0.02,
        width: screenWidth * 0.05,
        height: screenHeight * 0.05,
        position:"absolute"
    
      }
});

export default styles;
