import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";

import ManualSearchOptions from "../components/manualSearchOptions/ManualSearchOptions";
import Tool from "../components/toolbar/ToolBar";
import BackButton from "../components/backButton/BackButton";

const ManualSearch = () => {

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollviewContainer}>
        <ManualSearchOptions />
      </ScrollView>
      <View style={styles.toolContainer}>
        <Tool />
      </View>
    </View>
  );
};
const window = Dimensions.get("window");
  const screenHeight = window.height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollviewContainer: {
    height: screenHeight+35,
    //paddingBottom: 150,
    flexGrow: 2
  },
  toolContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default ManualSearch;
