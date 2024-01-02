import { StyleSheet, Dimensions } from "react-native";
import { Border } from "../../styles/GlobalStyles";

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

      savePass: {
        width: screenWidth * 0.32,
        height: screenHeight * 0.06,
        left: screenWidth * 0.35,
        top: screenHeight * 0.88,
        position: "relative",
        borderRadius: Border.br_11xs,
        alignItems: "center",
        justifyContent: "center",
      },

      currPass: {
        width: screenWidth * 0.7,
        left: (screenWidth - screenWidth * 0.7) / 2,
        top: screenHeight * 0.55,
        position: "absolute",
      },
    
      newPass: {
        width: screenWidth * 0.7,
        left: (screenWidth - screenWidth * 0.7) / 2,
        top: screenHeight * 0.65,
        position: "absolute",
      },
    
      confirmPass: {
        width: screenWidth * 0.7,
        left: (screenWidth - screenWidth * 0.7) / 2,
        top: screenHeight * 0.75,
        position: "absolute",
      },
    
      savePassText: {
        fontSize: screenHeight * 0.02,
        color: '#fff',
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

      saveDetailsText: {
        fontSize: screenHeight * 0.02,
        color: '#fff',
      },

});

export default styles;








