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
    color: Color.gray,
    fontSize: screenHeight * 0.018,
    left: "7.31%",
    textAlign: "left",
    position: "absolute",
  },
  messagePosition: {
    left: screenWidth * 0.7 - 45,
    width: 37,
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
    height: 50,
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
    color: Color.darkPurple,
    fontWeight: "600",
  },
  loginChild: {
    top: screenHeight * 0.25,
    boxShadow: {
      shadowColor: "rgba(0, 0, 0, 0.25)",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowRadius: 50,
      elevation: 50,
      shadowOpacity: 1,
    },
    width: screenWidth,
    height: screenHeight,
    opacity: 0.85,
    backgroundColor: Color.white,
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
    borderColor: Color.darkPurple,
    borderWidth: 2,
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  messageItem: {
    height: 10,
    width: "66.67%",
    top: "30%",
    right: "16.67%",
    bottom: "45.83%",
    left: "16.67%",
    borderRadius: Border.br_11xs,
  },
  message: {
    height: 45,
    top: "26%",
    bottom: "26%",
    position: "absolute",
  },
  email: {
    top: screenHeight * 0.25 + 150,
    height: 60,
    position: "absolute",
  },
  passwordChild: {
    backgroundColor: Color.white,
  },
  password1: {
    height: 38,
    width: "25.25%",
    top: "33.33%",
    textAlign: "left",
  },
  lockIcon: {
    width: 30,
    height: 30,
    top: 17,
    left: screenWidth * 0.7 - 40,
  },
  password: {
    top: screenHeight * 0.25 + 220,
    height: 60,
    position: "absolute",
  },
  login2: {
    marginLeft: -35,
    fontSize: 20,
    color: Color.white,
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
    backgroundColor: Color.lightPink,
    overflow: "hidden",
  },

  alreadyAMemberContainer: {
    top: screenHeight * 0.25 + 470,
    textAlign: "center",
    width: screenWidth,
    position: "absolute",
    textAlignVertical: "center",
    fontWeight: "bold",
  },

  newMember: {
    fontSize: screenHeight * 0.018,
    color: Color.black,
  },
  register: {
    fontSize: screenHeight * 0.018,
    fontWeight: "bold",
    color: Color.darkPurple,
  },
  newMemberRegisterContainer: {
    top: screenHeight * 0.25 + 150,
    fontSize: screenHeight * 0.018,
    width: screenWidth,
    textAlign: "center",
    position: "absolute",
  },
  forgetPassword: {
    top: screenHeight * 0.25 + 300,
    textAlign: "center",
    width: screenWidth,
    fontSize: screenHeight * 0.018,
    position: "absolute",
  },

  login: {
    flex: 1,
    height: 852,
    backgroundColor: Color.lightPink,
    overflow: "hidden",
    width: "100%",
  },

  errorMessage: {
    top: screenHeight * 0.25 + 350,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    fontWeight: "bold",
    color: Color.red,
    fontSize: screenHeight * 0.02,
    width: screenWidth * 0.7,
    textAlign: "center",
  },
});

export default styles;
