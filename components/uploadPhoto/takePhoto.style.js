import { StyleSheet, Dimensions } from "react-native";
import { Color, Border } from "../../styles/GlobalStyles";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      container2: {
        flex: 1,
        width: "100%",
      },
      oval: {
        width: 70,
        height: 70,
        bottom: 0,
        backgroundColor: "#fff",
        borderColor: Color.darkPurple,
        borderRadius: 100,
        borderWidth: 2,
      },
      text: {
        color: Color.darkPurple,
        fontSize: 20,
      },
    
      buttons: {
        width: 100,
        height: 40,
        backgroundColor: Color.white,
        borderRadius: Border.br_3xs,
        alignItems: "center",
        justifyContent: "center",
      },
    
      space: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
    
      picTook1: {
        backgroundColor: "transparent",
        flex: 1,
        width: "100%",
        height: "100%",
      },
    
      picTook2: {
        flex: 1,
        flexDirection: "column",
        padding: 15,
        justifyContent: "flex-end",
      },
      
      view1: {
        flex: 1,
        width: "100%",
        backgroundColor: "transparent",
        flexDirection: "row",
      },
    
      view2: {
        position: "absolute",
        left: "5%",
        top: "10%",
        flexDirection: "column",
        justifyContent: "space-between",
      },
    
      view3: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        flex: 1,
        width: "100%",
        padding: 20,
        justifyContent: "space-between",
      },
      view4: {
        alignSelf: "center",
        flex: 1,
        alignItems: "center",
      },
    
    });

export default styles;
