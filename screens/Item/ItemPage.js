import * as React from "react";
import { View, ScrollView } from "react-native";
import ToolBar from "../../components/toolbar/ToolBar";
import ItemText from "../../components/itemPage/ItemText";
import ItemImg from "../../components/itemPage/ItemImg";
import styles from "./Item.style";


const ItemPage = () => {


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.home}>
        <ItemImg></ItemImg>
        <ItemText></ItemText>
        <ToolBar></ToolBar>
      </View>
    </ScrollView>
  );
};

export default ItemPage;