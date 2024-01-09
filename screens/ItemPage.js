import * as React from "react";
import { View, ScrollView } from "react-native";
import ToolBar from "../components/toolbar/ToolBar";
import ItemText from "../components/itemText/ItemText";
import ItemImg from "../components/itemImg/ItemImg";
import { StyleSheet, Dimensions } from "react-native";

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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.home}>
        <ItemImg />
        <ItemText />
        <ToolBar />
      </View>
    </ScrollView>
  );
};

export default ItemPage;
