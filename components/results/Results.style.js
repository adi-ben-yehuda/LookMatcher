import { Color, FontSize, Border, Padding } from "../../styles/GlobalStyles";
import { StyleSheet, Dimensions } from "react-native";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  resultsLayout: {
    width: "100%",
    overflow: "hidden",
  },
  // resultLayout: {
  //   height: 270,
  //   top: 178,
  //   width: 157,
  //   position: "absolute",
  // },
  headline: {
    marginLeft: "auto",
    marginRight: "auto",
    top: 0,
    fontSize: screenWidth * 0.06,
    lineHeight: screenWidth * 0.3,
    marginLeft: "auto",
    marginRight: "auto",
    textTransform: "capitalize",
    fontWeight: "700",
    color: Color.darkPurple,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  results: {
    backgroundColor: "#fff",
    flex: 1,
    height: 852,
    overflow: "hidden",
  },

  sort: {
    zIndex: 2,
    top: screenHeight * 0.1,
    right: 10,
    borderRadius: 36,
    borderStyle: "solid",
    borderColor: "#2f085f",
    borderWidth: 1,
    position: "absolute",
    overflow: "hidden",
    flexDirection: "row",
  },

  //sort
  stateLayerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 30,
  },

  sortText: {
    letterSpacing: 0,
    lineHeight: 20,
    color: "#1b1616",
    fontWeight: "500",
    fontSize: screenWidth * 0.027,
    textAlign: "center",
    left: 5,
    bottom: 1,
  },
  arrow: {
    width: 18,
    height: 18,
    marginLeft: 5,
  },
  stateLayer: {
    paddingVertical: screenHeight * 0.005,
  },
  
  dropDownList: {
    top: screenHeight * 0.15,
    right: screenWidth * 0.2,
    borderRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 11,
      height: 13,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    width: screenWidth * 0.67,
    height: screenHeight * 0.2,
    backgroundColor: "#ffffff",
    position: "absolute",
    overflow: "hidden",
  },
  list2DensityDark: {
    bottom: screenHeight * 0.37,
    left: 1,
  },
  listItemlistItem2Densit4: {
    top: screenHeight * 0.21,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
  },
  listItemlistItem2Densit5: {
    top: screenHeight * 0.261,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    height: screenHeight * 0.05,
  },
  listItemlistItem2Densit6: {
    top: screenHeight * 0.313,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
  },
  listItemlistItem2Densit7: {
    top: screenHeight * 0.364,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
  },
  listLayout: {
    width: screenWidth * 0.7,
    height: screenHeight * 0.04,
    position: "absolute",
  },
  contentFlexBox: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  stateLayer1: {
    height: screenHeight * 0.05,
    paddingLeft: Padding.p_base,
    paddingRight: Padding.p_5xl,
    zIndex: 1,
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  divider: {
    borderColor: Color.colorGainsboro_100,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  content: {
    marginLeft: 5,
    overflow: "hidden",
    alignSelf: "stretch",
    flex: 1,
  },
  headlineTypo: {
    color: Color.colorDarkslategray_100,
    lineHeight: 24,
    letterSpacing: 0.7,
    alignSelf: "stretch",
    textAlign: "left",
  },
  dividerLayout: {
    height: 1,
    borderTopWidth: 2,
    alignSelf: "stretch",
    borderStyle: "solid",
  },
  listItemlistItem2Densit3: {
    top: 144,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
  },
  buildingBlocksstateLayerDaChild: {
    backgroundColor: Color.colorWhitesmoke,
  },
  headline4: {
    fontWeight: "500",
    fontSize: screenWidth * 0.04,
  },
  buildingBlocksstateLayerDaItem: {
    backgroundColor: Color.colorCardBackground,
  },
  buildingBlocksstateLayerDaChild: {
    backgroundColor: Color.colorWhitesmoke,
  },
  horizontalFlexBox: {
    zIndex: 2,
    alignSelf: "stretch",
    justifyContent: "center",
  },

  container: {
   
    backgroundColor: "#FBF9FC",
    //marginTop: screenHeight * 0.035,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: "#f0f0f0", //#fff
    marginTop: 10,
    margin: 15,
    padding: 16,
    marginBottom: 25,
    borderRadius: 8,
    elevation: 2,
    position: "relative",
  },
  itemImage: {
    height: screenHeight * 0.2 + screenWidth * 0.18,
    resizeMode: "cover",
    borderRadius: 4,
    marginBottom: 8,
    // shadowColor: "#000",
    // shadowOffset: { width: 1, height: 1 },
    // shadowOpacity: 0.25,
    // shadowRadius: 8,
    elevation: 5, // For Android
  },
  favoriteIcon: {
    position: "absolute",
    bottom: -5,
    right: -2,
    zIndex: 1,
  },
  favoriteImage: {
    width: 30,
    height: 30,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  itemCompany: {
    fontSize: 14,
    color: "#666",
  },

  icon: {
    height: screenHeight * 0.045,
    width: screenHeight * 0.045,
    marginTop: screenHeight * 0.015,
  },

  back: {
    position: "absolute",
    top: 10,
    left: 10,
    //padding: 5,
  },

  emptyItem: {
    backgroundColor: "#FBF9FC",

  },

  noResultsContainer: {

    justifyContent: 'center',
    alignItems: 'center',
  },

  noResults: {
    top: screenHeight * 0.4,
    color: 'red',
    fontSize: 20,
    fontWeight: "bold",

  },
  
  load: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FBF9FC",
    alignItems: "center",
  },


});

export default styles;
