import * as React from "react";
import { ScrollView } from "react-native";

import ToolBar from "../components/toolbar/ToolBar";
import LogoBlack from "../components/logoBlack/LogoBlack";
import HomeButtons from "../components/homeButtons/HomeButtons";
import ImageHome from "../components/imageHome/ImageHome";

const HomePage = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LogoBlack />
      <HomeButtons />
      <ImageHome />
      <ToolBar />
    </ScrollView>
  );
};

export default HomePage;
