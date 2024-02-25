import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";

import ManualSearchOptions from "../components/manualSearchOptions/ManualSearchOptions";
import Tool from "../components/toolbar/ToolBar";
import BackButton from "../components/backButton/BackButton";

const ManualSearch = () => {
  const [scrollViewHeight, setScrollViewHeight] = useState(Dimensions.get("window").height);

  useEffect(() => {
    const handleDimensionsChange = ({ window }) => {
      setScrollViewHeight(window.height);
    };

    // Subscribe to the event when component mounts
    Dimensions.addEventListener("change", handleDimensionsChange);

    // Clean up the event listener when component unmounts
    return () => {
      Dimensions.removeEventListener("change", handleDimensionsChange);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ height: scrollViewHeight }}>
        <ManualSearchOptions />
      </ScrollView>
      <View style={styles.toolContainer}>
        <Tool />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default ManualSearch;
