import * as React from "react";
import { ScrollView } from "react-native";

import ToolBar from "../components/toolbar/ToolBar";
import SearchByPhoto from "../components/searchByPhoto/SearchByPhoto";

const SearchFoto = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SearchByPhoto></SearchByPhoto>
      <ToolBar />
    </ScrollView>
  );
};

export default SearchFoto;
