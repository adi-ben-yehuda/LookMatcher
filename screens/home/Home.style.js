import { StyleSheet, Dimensions } from "react-native";
import { Color, FontSize, Border } from "../../styles/GlobalStyles";

import { PixelRatio } from "react-native";

const density = PixelRatio.get();

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;
const recHeight = screenHeight * 0.12;
const recWidth = screenWidth * 0.33;

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

  recUpLeft: {
    //rec up
    backgroundColor: "transparent",
    height: screenHeight * 0.12,
    width: screenWidth * 0.33,
    borderRadius: Border.br_3xs,
    top: screenHeight * 0.27,
    left: screenWidth * 0.09,
    position: "absolute",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  recUpRight: {
    //rec up
    backgroundColor: "transparent",
    height: screenHeight * 0.12,
    width: screenWidth * 0.33,
    borderRadius: Border.br_3xs,
    top: screenHeight * 0.27,
    right: screenWidth * 0.09,
    position: "absolute",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  recDownLeft: {
    //rec up
    backgroundColor: "transparent",
    height: screenHeight * 0.12,
    width: screenWidth * 0.33,
    borderRadius: Border.br_3xs,
    top: screenHeight * 0.43,
    left: screenWidth * 0.09,
    position: "absolute",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  recDownRight: {
    backgroundColor: "transparent",
    height: screenHeight * 0.12,
    width: screenWidth * 0.33,
    borderRadius: Border.br_3xs,
    position: "absolute",
    top: screenHeight * 0.43,
    right: screenWidth * 0.09,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  iconsButtons: {
    height: "8vw",
    width: "8vw",
    marginTop: screenHeight * 0.008,
    marginRight: screenWidth * 0.001,
  },

  text: {
    color: Color.colorGray,
    fontSize: screenWidth * 0.05,
    //marginTop: 3, // Adjust based on your preference
  },

  image4Icon: {
    height: screenHeight * 0.3,
    width: screenWidth * 0.85,
    bottom: screenHeight * 0.11,
    right: (screenWidth - screenWidth * 0.85) / 2,
    borderRadius: (screenWidth * 0.1) / 2,
    overflow: "hidden",
    position: "absolute",

    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 4, // Android specific elevation for shadow
  },

  toolbar: {
    height: screenHeight * 0.08,
    width: screenWidth,
    backgroundColor: "#E2DBEA",
    bottom: 0,
    position: "absolute",
    borderRadius: 50,
    borderWidth: 1, // Border width
    borderColor: "rgba(0, 0, 0, 0.1)", // Border color
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  shirtBar: {
    height: "8vw",
    width: "8vw",
    left: "8vw",
  },

  searchBar: {
    height: "8vw",
    width: "8vw",
    left: "16vw",
  },

  logoBar: {
    height: "28vw",
    width: "28vw",
    left: "19vw",
  },
  heartBar: {
    height: "8vw",
    width: "8vw",
    left: "22vw",
  },

  profileBar: {
    height: "8vw",
    width: "8vw",
    left: "30vw",
  },

  searchTypo: {
    textAlign: "left",
    color: Color.colorGray,
    fontSize: FontSize.size_5xl,
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
    width: "33.33%",
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

  wrapperPosition: {
    height: 28,
    top: "50%",
    marginTop: 0,
    left: "50%",
    position: "absolute",
  },

  profileWrapper: {
    marginLeft: -34.8,
    width: 70,
  },
  // userIcon: {
  //   height: screenHeight * 0.6,
  //   width: screenWidth * 0.1,
  //   //borderRadius: Border.br_3xs,
  //   top: "10%",
  //   right: screenWidth * 0.1,
  //   overflow: "hidden",
  // },

  iconPosition: {
    bottom: "56.67%",
    top: "10%",
    height: "33.33%",
    maxHeight: "100%",
    position: "absolute",
  },

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
