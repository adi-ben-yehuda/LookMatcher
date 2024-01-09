import * as React from "react";
import { View } from "react-native";

import SearchButtons from "../components/searchButtons/SearchButtons";
import ToolBar from "../components/toolbar/ToolBar";

const Search = () => {
  return (
    <View style={{ flex: 1 }}>
      <SearchButtons />
      <ToolBar />
    </View>
  );
};

export default Search;
