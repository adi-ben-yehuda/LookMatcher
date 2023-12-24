import { StyleSheet, Dimensions } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../styles/GlobalStyles";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  // scrollView: {
  //   marginHorizontal: 20,
  // },

  passwordLayout: {
    width: screenWidth * 0.7,
    left: (screenWidth - screenWidth * 0.7) / 2,
    height: 50,
    position: "absolute",
  },
  passwordTypo: {
    color: Color.colorGray_100,
    fontSize: FontSize.textInput_size,
    left: "7.33%",
    top: "34%",
    textAlign: "left",
    fontFamily: FontFamily.textInput,
    position: "absolute",
  },
  iconPosition: {
    left: "86%",
    right: "6%",
    width: "8%",
    height: "48%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  logoIconPosition: {
    left: "50%",
    marginLeft: -75.5,
    position: "absolute",
  },
  userIconLayout: {
    height: 24,
    width: 24,
    left: screenWidth * 0.7 - 20,
    position: "absolute",
  },
  registerPosition: {
    height: 26,
    top: "50%",
    marginLeft: -46.5,
    marginTop: -13,
    left: "50%",
    position: "absolute",
  },
  registerChild: {
    top: screenHeight * 0.25,
    boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.25)",
    width: screenWidth,
    height: screenHeight * 0.75,
    opacity: 0.85,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    borderRadius: Border.br_26xl,
  },
  emailChild: {
    width: screenWidth * 0.7,
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    width: "100%",
  },
  email1: {
    width: "14%",
    textAlign: "left",
    height: "38%",
    fontSize: FontSize.textInput_size,
    left: "7.33%",
    top: "34%",
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
  lockIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
  },
  message: {
    height: "48%",
    top: "26%",
    bottom: "26%",
    position: "absolute",
  },
  messagePosition: {
    left: screenWidth * 0.7 - 50,
    width: 40,
  },
  email: {
    top: screenHeight * 0.25 + 160,
  },
  password1: {
    width: "24%",
    textAlign: "left",
    height: "38%",
    fontSize: FontSize.textInput_size,
    left: "7.33%",
    top: "34%",
  },
  lockIcon1: {
    width: 30,
    height: 30,
    top: 12,
    left: screenWidth * 0.7 - 40,
    bottom: "25.47%",
    right: "6%",
    maxWidth: "100%",
  },
  password: {
    top: screenHeight * 0.25 + 225,
  },
  confirmPassword: {
    width: "45%",
    textAlign: "left",
    height: "38%",
    fontSize: FontSize.textInput_size,
    left: "7.33%",
    top: "34%",
  },
  chieldCheckIcon1: {
    width: 30,
    height: 30,
    top: 12,
    left: screenWidth * 0.7 - 40,
    bottom: "25.47%",
    right: "6%",
    maxWidth: "100%",
  },
  password2: {
    top: screenHeight * 0.25 + 290,
  },
  alreadyAMember1: {
    color: "#252525",
  },
  logIn: {
    color: Color.colorIndigo,
  },
  alreadyAMemberContainer: {
    top: screenHeight * 0.25 + 500,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    width: screenWidth,
  },
  fullName: {
    textAlign: "left",
  },
  userIcon2: {
    width: 30,
    height: 30,
    top: 12,
    left: screenWidth * 0.7 - 40,
    bottom: "25.47%",
    right: "6%",
    maxWidth: "100%",
  },
  firstName: {
    top: screenHeight * 0.25 + 30,
  },
  lastName: {
    top: screenHeight * 0.25 + 95,
  },
  userAltIcon2: {
    top: 336,
  },
  userAltIcon3: {
    top: 270,
  },
  register2: {
    fontSize: 20,
    color: "#fcfcfc",
    width: 79,
    textAlign: "left",
    top: "50%",
    marginLeft: -46.5,
    marginTop: -13,
  },
  vectorIcon2: {
    top: 7,
    left: 88,
    width: 5,
    height: 12,
    position: "absolute",
  },
  registerParent: {
    width: 93,
  },
  register1: {
    marginLeft: -84.5,
    top: screenHeight * 0.25 + 400,
    width: 167,
    height: 48,
    left: "50%",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  logoIcon: {
    top: 29,
    width: 160,
    height: 150,
  },
  register: {
    flex: 1,
    height: 852,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
  errorMessage: {
    top: screenHeight * 0.25 + 350,
    fontSize: 16,
    textAlign: "center",
    width: screenWidth,
    color: Color.colorRed,
    fontWeight: "bold",
  },
});

export default styles;
