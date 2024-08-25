import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import Results from "../components/results/Results";
import ToolBar from "../components/toolbar/ToolBar";
import TitleComponent from "../components/title/title.js";
import BackButton from "../components/backButton/BackButton";

const window = Dimensions.get("window");
const screenHeight = window.height;

const ResultsPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <BackButton />
        <TitleComponent titleText="Search results" />
      </View>
      <View style={styles.resultsContainer}>
        <Results />
      </View>
      <View style={styles.toolbarContainer}>
        <ToolBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container use full height
    flexDirection: "column",
    backgroundColor: "#FBF9FC",

    // Align children vertically
  },
  resultsContainer: {
    flex: 1, // Takes all available space pushing the toolbar to the bottom
  },
  toolbarContainer: {
    height: 50, // Adjust according to the height of your toolbar
    justifyContent: "flex-end",
  },
  first: {
    height: screenHeight * 0.1,
    borderColor: "#000",
    borderWidth: 0.2,
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#FBF9FC",
  },
});

export default ResultsPage;
