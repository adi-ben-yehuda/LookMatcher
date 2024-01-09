import * as React from "react";
import { ScrollView, View, Dimensions } from "react-native";

import Results from "../components/results/Results";
import ToolBar from "../components/toolbar/ToolBar";

const window = Dimensions.get("window");
const screenHeight = window.height;

const ResultsPage = () => {
  return (
    <View>
      <ScrollView contentContainerStyle={{ minHeight: screenHeight * 1.3 }}>
        <Results />
      </ScrollView>
      <View>
        <ToolBar />
      </View>
    </View>
  );
};

export default ResultsPage;
