import * as React from "react";
import { View, ScrollView } from "react-native";
import ToolBar from "../components/toolbar/ToolBar";
import ItemText from "../components/itemPage/ItemText";
import ItemImg from "../components/itemPage/ItemImg";
import { StyleSheet, Dimensions } from "react-native";
import BackButton from "../components/backButton/BackButton";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#E2DBEA",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

const ItemPage = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.home}>
          <ItemImg />
          <ItemText />
          <ToolBar />
        </View>
      </ScrollView>
      <BackButton />
    </View>
  );
};

export default ItemPage;
