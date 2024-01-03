import { Color, FontSize, Border } from "../../styles/GlobalStyles";
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
        marginTop: 30,
        fontSize: screenWidth * 0.07,
        lineHeight: screenWidth * 0.08,
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
        top: "60%",
        height: screenHeight * 0.3,
        width: screenWidth * 0.45,
    },
    item4: {
        top: screenHeight * 0.55,
        textAlign: "left",
        color: Color.black3,
        fontWeight: "600",
        fontSize: screenWidth * 0.035,
    },
    price4: {
        top: screenHeight * 0.55,
        color: Color.blackFont,
        fontWeight: "600",
        fontSize: screenWidth * 0.03,
        textAlign: "left",
    },
    store4: {
        top: screenHeight * 0.55,
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
        top: screenHeight * 0.6,
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
    results: {
        backgroundColor: Color.ll,
        flex: 1,
        height: 852,
        overflow: "hidden",
    },

    //buttons
    makeLayout: {
        backgroundColor: "transparent",
        height: screenHeight * 0.085,
        width: screenWidth * 0.4,
        borderRadius: Border.br_3xs,
        top: screenHeight * 0.75,
        position: "absolute",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
    },
    makeAnContainer: {
        fontSize: screenHeight * 0.022,
        color: Color.white,
        textAlign: "center",
    },
    makeAnOutfitWrapper: {
        width: screenWidth * 0.3,
        height: screenWidth * 0.08,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
    },
    makeMe: {
        right: screenWidth * 0.07,
    },
    makeYourself: {
        left: screenWidth * 0.07,
    },
});

export default styles;