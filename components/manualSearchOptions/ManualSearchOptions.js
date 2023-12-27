import * as React from "react";
import styles from "./ManualSearchOptions.style";
import { View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const ManualSearch = () => {
  const navigation = useNavigation();

  const handleSearchPress = () => {
    navigation.navigate("Search");
  };

  return <View style={[styles.searchPage]}></View>;
};

export default ManualSearch;
