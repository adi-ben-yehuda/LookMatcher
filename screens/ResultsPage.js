import * as React from "react";
import { ScrollView, View, Dimensions } from "react-native";

import Results from "../components/results/Results";
import ToolBar from "../components/toolbar/ToolBar";

const window = Dimensions.get("window");
const screenHeight = window.height;

const ResultsPage = () => {
  return (
    <View style={{ flex: 1}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Results />
        <ToolBar />
      </ScrollView>
    </View>
  );
};

export default ResultsPage;
