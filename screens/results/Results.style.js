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
    shirtTypo: {
        textAlign: "left",
        color: Color.black3,
        fontWeight: "500",
        fontSize: screenWidth * 0.03,
    },
    resultLayout: {
        height: 270,
        top: 178,
        width: 157,
        position: "absolute",
    },
    text4Position: {
        left: 3,
    },
    renuarTypo: {
        left: 3,
        top: screenHeight * 0.295,
        color: Color.blackFont,
        fontSize: FontSize.priceClothe_size,
        textAlign: "left",
    },
    iconPosition: {
        top: 0,
        height: 200,
    },
    favoriteIconLayout: {
        top: 348,
        height: 24,
        width: 24,
        borderRadius: Border.br_8xs,
        position: "absolute",
    },
    stateLayerFlexBox: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: 32,
    },
    headline: {
        marginLeft: "auto",
        marginRight: "auto",
        top: screenHeight * 0.04, 
        fontSize: screenWidth * 0.05, 
        lineHeight: screenWidth * 0.05, 
        marginLeft: "auto",
        marginRight: "auto",
        textTransform: "capitalize",
        fontWeight: "700",
        color: Color.primary,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",

    },
    addSquareLightIcon1: {
        top: 346,
        left: 334,
        width: 28,
        height: 28,
        borderRadius: Border.br_8xs,
        position: "absolute",
    },

    image7Icon: {
        top: screenHeight * 0.28,
        height: screenHeight * 0.3,
        width: screenWidth * 0.45,
    },
    item4: {
        top: screenHeight * 0.64,
        textAlign: "left",
        color: Color.black3,
        fontWeight: "500",
        fontSize: screenWidth * 0.035,
    },
    price4: {
        top: screenHeight * 0.65,
        color: Color.blackFont,
        fontWeight: "600",
        fontSize: screenWidth * 0.03,
        textAlign: "left",

    },
    store4: {
        top: screenHeight * 0.66,
        color: Color.blackFont,
        fontSize: screenWidth * 0.03,
        textAlign: "left",
    },
    favoriteLightIcon5: {
        top: 170,
        left: 126,
        height: 24,
        width: 24,
        borderRadius: Border.br_8xs,
        position: "absolute",
    },
    result4: {
        left: screenWidth * 0.51,
        position: "absolute",
    },
    result3Icon: {
        left: screenWidth * 0.04,
        height: screenHeight * 0.35,
        width: screenWidth * 0.45,
        top: screenHeight * 0.55,
        position: "absolute",
    },
    text4: {
        color: Color.blackFont,
        fontWeight: "600",
        fontSize: FontSize.priceClothe_size,
        textAlign: "left",
        top: screenHeight * 0.26,

    },
    oxfordShirt1: {
        textAlign: "left",
        color: Color.black3,
        fontWeight: "500",
        fontSize: screenWidth * 0.035,
        top: screenHeight * 0.22,
    },
    image6Icon: {
        bottom: screenHeight * 0.1,
        height: screenHeight * 0.3,
        width: screenWidth * 0.45,
    },
    icon1: {
        left: -38,
        width: 222,
        display: "none",
        position: "absolute",
    },
    result2: {
        left: screenWidth * 0.51,
    },
    image8Icon: {
        bottom: screenHeight * 0.1,
        height: screenHeight * 0.3,
        width: screenWidth * 0.45,
    },
    item1: {
        textAlign: "left",
        color: Color.black3,
        fontWeight: "500",
        fontSize: screenWidth * 0.035,
        width: screenWidth * 0.2,
        top: screenHeight * 0.26,
    },
    price1: {
        top: screenHeight * 0.27,
        color: Color.blackFont,
        fontWeight: "600",
        fontSize: screenWidth * 0.03,
        textAlign: "left",
    },
    store1: {
        top: screenHeight * 0.28,
        color: Color.blackFont,
        fontSize: screenWidth * 0.03,
        textAlign: "left",
    },
    result1: {
        left: screenWidth * 0.04,
    },
    favoriteLightIcon8: {
        left: 333,
    },
    favoriteLightIcon9: {
        left: 155,
    },
    taskbarIcon: {
        height: "8.69%",
        top: "91.31%",
        right: "0%",
        bottom: "0%",
        left: "0%",
        maxWidth: "100%",
        maxHeight: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    labelText1: {
        letterSpacing: 0,
        lineHeight: 20,
        color: "#1b1616",
        fontWeight: "500",
        fontSize: screenWidth * 0.03,
        textAlign: "center",
        left:5,
        bottom:1
    },
    icon3: {
        width: 18,
        height: 18,
        marginLeft: 5,
    },
    stateLayer: {
        paddingVertical: screenHeight * 0.005,
        
    },
    component156: {
        zIndex: 2, 
        top: screenHeight*0.08,
        left: 20,
        borderRadius: 36,
        borderStyle: "solid",
        borderColor: "#2f085f",
        borderWidth: 1,
        position: "absolute",
        overflow: "hidden",
    },
    results: {
        backgroundColor: Color.ll,
        flex: 1,
        height: 852,
        overflow: "hidden",
    },


//sort
    dropDownList: {
        top: screenHeight*0.12,
        right: screenWidth*0.2,
        borderRadius: 8,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 11,
            height: 13,
        },
        shadowRadius: 5,
        elevation: 5,
        shadowOpacity: 1,
        width: screenWidth*0.67,
        height: screenHeight*0.2,
        backgroundColor: Color.colorCardBackground,
        position: "absolute",
        overflow: "hidden",
    },
    list2DensityDark: {
        bottom:screenHeight*0.37,
        left: 1,
    },
    listItemlistItem2Densit4: {
        top: screenHeight*0.21,
        justifyContent: "center",
        alignItems: "center",
        left: 0,
    },
    listItemlistItem2Densit5: {
        top: screenHeight*0.261,
        justifyContent: "center",
        alignItems: "center",
        left: 0,
        height: screenHeight*0.05,
    },
    listItemlistItem2Densit6: {
        top: screenHeight*0.313,
        justifyContent: "center",
        alignItems: "center",
        left: 0,
    },
    listItemlistItem2Densit7: {
        top: screenHeight*0.364,
        justifyContent: "center",
        alignItems: "center",
        left: 0,
    },
    listLayout: {
        width: screenWidth*0.7,
        height: screenHeight*0.04,
        position: "absolute",
    },
    contentFlexBox: {
        alignSelf: "stretch",
        justifyContent: "center",
    },
    stateLayer1: {
        height: screenHeight*0.05,
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
});

export default styles;