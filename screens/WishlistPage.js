import * as React from "react";
import { ScrollView, View } from "react-native";

import Wishlist from "../components/wishlist/Wishlist";
import ToolBar from "../components/toolbar/ToolBar";
import BackButton from "../components/backButton/BackButton";

const WishlistPage = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Wishlist />
        <ToolBar />
      </ScrollView>
      <BackButton />
    </View>
  );
};

export default WishlistPage;
