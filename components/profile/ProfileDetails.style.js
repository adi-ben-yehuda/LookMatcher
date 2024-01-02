import { StyleSheet, Dimensions } from "react-native";
import { Color, Border } from "../../styles/GlobalStyles";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
   
    lockIconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
      },

      password: {
        top: screenHeight * 0.25 + 60,
        height: 60,
        position: "absolute",
      },
    
      lockIcon: {
        width: 30,
        height: 30,
        top: 13,
        left: screenWidth * 0.7 - 40,
      },

     
      newData: {
        borderRadius: Border.br_11xs,
        left: "0%",
        bottom: "0%",
        right: "0%",
        top: "0%",
        height: 50,
        position: "absolute",
        backgroundColor: "#fff",
        width: "100%",
        alignItems: "flex-start", 
        justifyContent: "center", 
      },

      firstNamePosition: {
        width: screenWidth * 0.7,
        left: (screenWidth - screenWidth * 0.7) / 2,
        top: screenHeight * 0.17,
        position: "absolute",
      },
    
      lastNamePosition: {
        width: screenWidth * 0.7,
        left: (screenWidth - screenWidth * 0.7) / 2,
        top: screenHeight * 0.27,
        position: "absolute",
      },
    
      emailPosition: {
        width: screenWidth * 0.7,
        left: (screenWidth - screenWidth * 0.7) / 2,
        top: screenHeight * 0.37,
        position: "absolute",
      },
    
      saveDetails: {
        width: screenWidth * 0.32,
        height: screenHeight * 0.06,
        left: screenWidth * 0.35,
        top: screenHeight * 0.42,
        position: "relative",
        borderRadius: Border.br_11xs,
        alignItems: "center",
        justifyContent: "center",
      },
    
    
      saveDetailsText: {
        fontSize: screenHeight * 0.02,
        color: '#fff',
      },

      title: {
        top: screenHeight * 0.05,
        width: screenWidth,
        height: screenHeight * 0.08,
        justifyContent: "center",
        alignItems: "center",
    
      },
    
      titelText: {
        fontSize: screenHeight * 0.06,
        fontWeight: 'bold',
        color: '#333',
      },

      errorMessage: {
        top: screenHeight * 0.4,
        fontSize: 16,
        alignItems: "center",
        justifyContent: "center",
      },
      error: {
        fontWeight: "bold",
        color: Color.red,
        fontSize: 14,
        width: screenWidth * 0.7,
        textAlign: "center",
      },

      register1: {
        marginLeft: -84.5,
        top: screenHeight * 0.25 + 450,
        width: 167,
        height: 48,
        left: "50%",
        borderRadius: Border.br_3xs,
        position: "absolute",
        backgroundColor: "transparent",
        overflow: "hidden",
      },
    

});

export default styles;








