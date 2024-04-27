import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import Results from "../components/results/Results";
import ToolBar from "../components/toolbar/ToolBar";

const window = Dimensions.get("window");
const screenHeight = window.height;

const ResultsPage = () => {
  return (
    <View style={styles.container}>
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
    flex: 1,  // Make the container use full height
    flexDirection: 'column',
    backgroundColor: "#FBF9FC",

     // Align children vertically
  },
  resultsContainer: {
    flex: 1,  // Takes all available space pushing the toolbar to the bottom
  },
  toolbarContainer: {
    height: 50, // Adjust according to the height of your toolbar
    justifyContent: 'flex-end',
  }
});

export default ResultsPage;