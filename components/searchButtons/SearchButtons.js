import * as React from "react";
import styles from "./SearchButtons.style";
import { Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const SearchButtons = () => {
  const navigation = useNavigation();

  const manualSearchPress = () => {
    navigation.navigate("ManualSearch");
  };

  const imageSearchPress = () => {
    navigation.navigate("ManualSearch");
  };

  return (
    <View style={[styles.searchPage]}>
      <Text style={styles.search}>Search</Text>

      <TouchableOpacity onPress={manualSearchPress}>
        <LinearGradient
          style={[styles.register, styles.registerLayout]}
          locations={[0, 1]}
          colors={["#29085f", "#b941d7"]}
        >
          <Text style={styles.buttonSearch}>{"Manual\n search"}</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={imageSearchPress}>
        <LinearGradient
          style={[styles.register1, styles.registerLayout]}
          locations={[0, 1]}
          colors={["#29085f", "#b941d7"]}
        >
          <Text style={styles.buttonSearch}>{"Search by\n image"}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default SearchButtons;
