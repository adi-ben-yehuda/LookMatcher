import { StyleSheet, Dimensions } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../styles/GlobalStyles";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
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
    backgroundColor: Color.white,
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
    backgroundColor: Color.white,
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
    borderColor: Color.darkPurple,
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
    left: screenWidth * 0.7 - 45,
    width: 37,
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
    top: 17,
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
    color: Color.black,
  },
  logIn: {
    color: Color.darkPurple,
    fontWeight: "600",
  },
  alreadyAMemberContainer: {
    top: screenHeight * 0.25 + 550,
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
    color: Color.white,
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
    top: screenHeight * 0.25 + 450,
    width: 167,
    height: 48,
    left: "50%",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: "transparent",
    overflow: "hidden",
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
});

export default styles;
