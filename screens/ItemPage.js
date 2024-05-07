import * as React from "react";
import { View, ScrollView } from "react-native";
import ToolBar from "../components/toolbar/ToolBar";
import ItemImg from "../components/itemImg/ItemImg";
import BackButton from "../components/backButton/BackButton";
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
    <View style={styles.home}>
      <View>
        <BackButton />
        <ScrollView contentContainerStyle={styles.scrollviewContainer}>
          <ItemImg />
        </ScrollView>
      </View>
      <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <ToolBar />
      </View>
    </View>
  );
};

export default ItemPage;
