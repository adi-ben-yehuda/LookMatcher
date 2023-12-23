import { StyleSheet, Dimensions } from "react-native";
import { Color, FontSize, Border } from "../../styles/GlobalStyles";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({

  home: {
    //borderRadius: 45,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#E2DBEA",
  },


  iconsShadowBox: {
    height: screenHeight * 0.32,
    width: screenWidth,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    position: "absolute",
    top: screenHeight * 0.25,
    backgroundColor: "#E2DBEA",
  },
  rectangleLayout: {
    opacity: 0.85,
    borderRadius: Border.br_xs,
    position: "absolute",
  },

  recUpLeft: { //rec up
    backgroundColor: "transparent",
    height: screenHeight * 0.1,
    width: screenWidth * 0.38,
    borderRadius: Border.br_3xs,
    top: screenHeight * 0.28,
    left: screenWidth * 0.08,
    position: "absolute",
    overflow: "hidden",
  },

  recUpRight: { //rec up
    backgroundColor: "transparent",
    height: screenHeight * 0.1,
    width: screenWidth * 0.38,
    borderRadius: Border.br_3xs,
    top: screenHeight * 0.28,
    right: screenWidth * 0.08,
    position: "absolute",
    overflow: "hidden",
  },

  recDownRight: { //rec up
    backgroundColor: "transparent",
    height: screenHeight * 0.1,
    width: screenWidth * 0.38,
    borderRadius: Border.br_3xs,
    top: screenHeight * 0.44,
    right: screenWidth * 0.08,
    position: "absolute",
    overflow: "hidden",
  },

  recDownLeft: { //rec up
    backgroundColor: "transparent",
    height: screenHeight * 0.1,
    width: screenWidth * 0.38,
    borderRadius: Border.br_3xs,
    top: screenHeight * 0.44,
    left: screenWidth * 0.08,
    position: "absolute",
    overflow: "hidden",
  },

  image4Icon: {
    height: screenHeight * 0.3,
    width: screenWidth * 0.85,
    bottom: screenHeight * 0.11,
    right: (screenWidth - (screenWidth * 0.85)) / 2,
    borderRadius: (screenWidth * 0.1) / 2,
    overflow: 'hidden',
    position: "absolute",

    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 4, // Android specific elevation for shadow
  },



  wrapperPosition: {
    height: 28,
    top: "50%",
    marginTop: 0,
    left: "50%",
    position: "absolute",
  },
  searchTypo: {
    textAlign: "left",
    color: Color.colorGray,
    fontSize: FontSize.size_5xl,
  },
  iconPosition: {
    bottom: "56.67%",
    top: "10%",
    height: "33.33%",
    maxHeight: "100%",
    position: "absolute",
  },

  createPosition: {
    width: 74,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  iconsChild: {
    top: 0,
    backgroundColor: Color.ll,
  },
  icons: {
    top: 188,
  },
  rectangle: {
    height: "5.63%",
    width: "12.21%",
    top: "26.29%",
    right: "19.34%",
    bottom: "68.08%",
    left: "68.45%",
    backgroundColor: Color.ll,
  },
  accountAndCard: {
    top: 156,
    left: 12,
    fontSize: 30,
    lineHeight: 20,
    fontWeight: "600",
    color: "#43118c",
    textAlign: "center",
    width: 121,
    height: 61,
    position: "absolute",
  },
  logoIcon: {
    height: screenHeight * 0.35,
    width: screenWidth * 0.38,
    top: -screenHeight * 0.08,
    right: screenWidth * 0.3,
    position: "absolute",
  },
  favoriteIcon: {
    top: 235,
    left: 280,
    width: 26,
    height: 26,
    position: "absolute",
  },

  // taskbarIcon: {
  //   height: "8.69%",
  //   top: "91.31%",
  //   right: "-0.25%",
  //   bottom: "0%",
  //   left: "0.25%",
  //   width: "100%",
  //   maxHeight: "100%",
  // },
  search: {
    marginLeft: -38.5,
    marginTop: -14,
    color: Color.colorGray,
    fontSize: FontSize.size_5xl,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  searchWrapper: {
    marginLeft: -37.8,
    width: 77,
  },
  searchIcon: {
    marginLeft: -14.8,
    width: 30,
    left: "50%",
    top: "10%",
    height: "33.33%",
  },
  // register: {
  //   marginLeft: -168.5,
  // },
  createOutfit: {
    marginTop: -28,
    marginLeft: -37,
    textAlign: "left",
    color: Color.colorGray,
    fontSize: FontSize.size_5xl,
  },
  createOutfitWrapper: {
    marginTop: -11,
    marginLeft: -36.8,
    height: 56,
  },
  // register1: {
  //   marginLeft: -169.5,
  // },
  profile: {
    marginLeft: -35,
    marginTop: -14,
    color: Color.colorGray,
    fontSize: FontSize.size_5xl,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  profileWrapper: {
    marginLeft: -34.8,
    width: 70,
  },
  userIcon: {
    width: "20.33%",
    right: "39.7%",
    left: "39.97%",
    top: "10%",
    height: "33.33%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  // register2: {
  //   marginLeft: 22.5,
  // },
  favorites: {
    marginLeft: -50,
    marginTop: -14,
    color: Color.colorGray,
    fontSize: FontSize.size_5xl,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  favoritesWrapper: {
    marginLeft: -49.8,
    width: 100,
  },
  // register3: {
  //   marginLeft: 20.5,
  // },
  outlineShirt: {
    height: "3.52%",
    width: "7.63%",
    top: "43.66%",
    right: "70.48%",
    bottom: "52.82%",
    left: "21.88%",
  },

});

export default styles;
