import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Color, Border } from "../../styles/GlobalStyles";

const TitleComponent = ({ titleText }) => {
    return (
        <View style={styles.title}>
            <Text style={styles.titleText}>{titleText}</Text>
        </View>
    );
};

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;
const styles = StyleSheet.create({
    title: {
        top: screenHeight * 0.001,
        width: screenWidth,
        justifyContent: "center",
        alignItems: "center",
      },
    
      titleText: {
        fontSize: screenHeight * 0.04,
        fontWeight: "bold",
        color: Color.darkPurple,
      },
});

export default TitleComponent;