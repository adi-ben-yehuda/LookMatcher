import * as React from "react";
import { ScrollView } from "react-native";

import LogoBlack from "../components/logoBlack/LogoBlack";
import HomeButtons from "../components/homeButtons/HomeButtons";
import ImageHome from "../components/imageHome/ImageHome";
import ToolBar from "../components/toolbar/ToolBar";

const HomePage = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LogoBlack />
      <HomeButtons />
      {/* <ImageHome /> */}
      <ToolBar />
    </ScrollView>
  );
};

export default HomePage;
