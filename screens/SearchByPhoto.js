import * as React from "react";
import { View, ScrollView, Dimensions } from "react-native";

import ToolBar from "../components/toolbar/ToolBar";
import SearchByPhoto from "../components/searchByPhoto/SearchByPhoto";
import BackButton from "../components/backButton/BackButton";

const SearchPhoto = () => {
  const window = Dimensions.get("window");
  const screenHeight = window.height;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ height: screenHeight * 1.1 }}>
        <SearchByPhoto />
      </ScrollView>
      <ToolBar />
    </View>
  );
};

export default SearchPhoto;
