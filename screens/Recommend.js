import * as React from "react";
import { View, Dimensions, StyleSheet } from "react-native";

import Recommendation from "../components/recommendation/Recommend.js";
import ToolBar from "../components/toolbar/ToolBar";
import BackButton from "../components/backButton/BackButton";
import TitleComponent from "../components/title/title.js";

const window = Dimensions.get("window");
const screenHeight = window.height;

const styles = StyleSheet.create({
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

const Search = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.first}>
        <BackButton />
        <TitleComponent titleText="Suggestions For You" />
      </View>

      <Recommendation />

      <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <ToolBar />
      </View>
    </View>
  );
};

export default Search;
