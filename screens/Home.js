import * as React from "react";
import { ScrollView, View } from "react-native";

import LogoBlack from "../components/logoBlack/LogoBlack";
import HomeButtons from "../components/homeButtons/HomeButtons";
//import ImageHome from "../components/imageHome/ImageHome";
import ToolBar from "../components/toolbar/ToolBar";
import LogOut from "../components/logout/Logout";
import HelloHome from "../components/helloHome/HelloHome";

const HomePage = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <LogoBlack />
        <HelloHome/>
        <HomeButtons />
        {/* <ImageHome /> */}
        <ToolBar />
      </ScrollView>
      <LogOut />
    </View>
  );
};

export default HomePage;
