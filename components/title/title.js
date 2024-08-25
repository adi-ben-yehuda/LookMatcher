import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Color } from "../../styles/GlobalStyles";

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
    top: 0,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },

  titleText: {
    fontSize: screenHeight * 0.03,
    fontWeight: "bold",
    color: Color.darkPurple,
  },
});

export default TitleComponent;
