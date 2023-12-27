import * as React from "react";
import { ScrollView } from "react-native";

import ManualSearchOptions from "../components/manualSearchOptions/ManualSearchOptions";

const ManualSearch = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ManualSearchOptions></ManualSearchOptions>
    </ScrollView>
  );
};

export default ManualSearch;
