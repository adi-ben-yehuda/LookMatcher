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
    
      

      title: {
        top: screenHeight * 0.05,
        width: screenWidth,
        height: screenHeight * 0.07,
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

      registerParent: {
        width: 167,
        height: 48,
        borderRadius: Border.br_11xs,
        position: "absolute",
        backgroundColor: "transparent",
        overflow: "hidden",
        justifyContent: "center", // Center the text vertically
      },
      
     
      registerPosition: {
        height: 48,
        top: 0,
        marginLeft: -47,
        left: "50%",
        position: "absolute",
      },

      registerChild: {
        top: screenHeight * 0.65,
        boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.25)",
        width: screenWidth,
        height: screenHeight * 0.75,
        opacity: 0.85,
        backgroundColor: Color.white,
        position: "absolute",
        borderRadius: Border.br_26xl,
      },

      register2: {
        fontSize: 16,
        color: Color.white,
        width: 100,
        textAlign: "center", // Center the text horizontally
        textAlignVertical: "center", // Center the text vertically
      },

      register1: {
        top: screenHeight * 0.45 ,
        width: 167,
        height: 48,
        left: screenWidth * 0.35,
        borderRadius: Border.br_11xs,
        position: "absolute",
        backgroundColor: "transparent",
        overflow: "hidden",
        alignItems: "flex-start", 
        justifyContent: "center", 
      },
    

});

export default styles;








