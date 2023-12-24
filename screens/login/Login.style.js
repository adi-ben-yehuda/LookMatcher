import { StyleSheet, Dimensions } from "react-native";
import { Color, FontSize, Border } from "../../styles/GlobalStyles";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  emailPosition: {
    width: screenWidth * 0.7,
    left: (screenWidth - screenWidth * 0.7) / 2,
    position: "absolute",
  },
  email1Typo: {
    color: Color.colorGray_100,
    fontSize: FontSize.textInput_size,
    left: "7.31%",
    textAlign: "left",
    position: "absolute",
  },
  messagePosition: {
    left: screenWidth * 0.7 - 50,
    width: 40,
  },
  lockIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  childPosition: {
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  loginPosition: {
    height: 26,
    top: "50%",
    marginTop: -13,
    left: "50%",
    position: "absolute",
  },
  registerNowTypo: {
    color: Color.colorIndigo,
    fontWeight: "600",
  },
  loginChild: {
    top: screenHeight * 0.25,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 50,
    elevation: 50,
    shadowOpacity: 1,
    width: screenWidth,
    height: screenHeight * 0.75,
    opacity: 0.85,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    borderRadius: Border.br_26xl,
  },
  email1: {
    width: "14.29%",
    top: "34%",
    textAlign: "left",
  },
  messageChild: {
    height: 20,
    width: "75%",
    top: "20.83%",
    bottom: "20.83%",
    left: "12.5%",
    borderStyle: "solid",
    borderColor: Color.colorIndigo,
    borderWidth: 2,
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  messageItem: {
    height: 10,
    width: "66.67%",
    top: "37.5%",
    right: "16.67%",
    bottom: "45.83%",
    left: "16.67%",
    borderRadius: Border.br_11xs,
  },
  message: {
    height: "48%",
    top: "26%",
    bottom: "26%",
    position: "absolute",
  },
  email: {
    top: screenHeight * 0.25 + 150,
    height: 60,
  },
  passwordChild: {
    backgroundColor: Color.colorWhite,
  },
  password1: {
    height: "37.25%",
    width: "25.25%",
    top: "33.33%",
    textAlign: "left",
  },
  lockIcon: {
    width: 30,
    height: 30,
    top: 12,
    left: screenWidth * 0.7 - 40,
  },
  password: {
    top: screenHeight * 0.25 + 220,
    height: 60,
  },
  login2: {
    marginLeft: -35,
    fontSize: 20,
    color: "#fcfcfc",
    width: 56,
    textAlign: "left",
  },
  vectorIcon: {
    top: 7,
    left: 65,
    width: 5,
    height: 12,
    position: "absolute",
  },
  loginParent: {
    marginLeft: -35.5,
    width: 70,
  },
  login1: {
    marginLeft: -83.5,
    top: screenHeight * 0.25 + 400,
    width: 167,
    height: 48,
    left: "50%",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.background,
    overflow: "hidden",
  },

  alreadyAMemberContainer: {
    top: screenHeight * 0.25 + 470,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    width: screenWidth,
  },
  logoIconPosition: {
    left: "50%",
    marginLeft: -75.5,
    position: "absolute",
  },

  newMember: {
    color: "#252525",
  },
  register: {
    color: Color.colorIndigo,
  },
  newMemberRegisterContainer: {
    top: screenHeight * 0.25 + 150,
    fontSize: 16,
    width: screenWidth,
    height: 17,
    textAlign: "center",
    position: "absolute",
  },
  forgetPassword: {
    top: screenHeight * 0.25 + 300,
    textAlign: "center",
    width: screenWidth,
    fontSize: 16,
    position: "absolute",
  },
  logoIcon: {
    top: 29,
    left: 116,
    width: 160,
    height: 150,
    position: "absolute",
  },
  login: {
    flex: 1,
    height: 852,
    backgroundColor: Color.background,
    overflow: "hidden",
    width: "100%",
  },
  
});

export default styles;
