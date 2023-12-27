import * as React from "react";
import { ScrollView } from "react-native";

import ManualSearchOptions from "../components/manualSearchOptions/ManualSearchOptions";
import ToolBar from "../components/toolbar/ToolBar";

const ManualSearch = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ManualSearchOptions></ManualSearchOptions>
      <ToolBar></ToolBar>
    </ScrollView>
  );
};

export default ManualSearch;
