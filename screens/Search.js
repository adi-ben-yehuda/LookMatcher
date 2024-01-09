import * as React from "react";
import { ScrollView, View } from "react-native";

import SearchButtons from "../components/searchButtons/SearchButtons";
import ToolBar from "../components/toolbar/ToolBar";
import BackButton from "../components/backButton/BackButton";

const Search = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SearchButtons />
        <ToolBar />
      </ScrollView>
      <BackButton />
    </View>
  );
};

export default Search;
