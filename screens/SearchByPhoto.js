import * as React from "react";
import { View } from "react-native";

import ToolBar from "../components/toolbar/ToolBar";
import SearchByPhoto from "../components/searchByPhoto/SearchByPhoto";
import BackButton from "../components/backButton/BackButton";

const SearchPhoto = () => {
  return (
    <View style={{ flex: 1 }}>
      <>
        <SearchByPhoto />
        <ToolBar />
      </>
      <BackButton />
    </View>
  );
};

export default SearchPhoto;
