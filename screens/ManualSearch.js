import * as React from "react";
import { View } from "react-native";

import ManualSearchOptions from "../components/manualSearchOptions/ManualSearchOptions";
import Tool from "../components/toolbar/ToolBar";
import BackButton from "../components/backButton/BackButton";

const ManualSearch = () => {
  return (
    <View style={{ flex: 1 }}>
      <>
        <ManualSearchOptions />
        <Tool />
      </>
      <BackButton />
    </View>
  );
};

export default ManualSearch;
