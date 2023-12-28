import * as React from "react";
import { ScrollView } from "react-native";

import SearchButtons from "../components/searchButtons/SearchButtons";
import ToolBar from "../components/toolbar/ToolBar";

const Search = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SearchButtons></SearchButtons>
      <ToolBar></ToolBar>
    </ScrollView>
  );
};

export default Search;
