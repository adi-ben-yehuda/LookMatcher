import * as React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./ToolBar.style";

const ToolBar = () => {
  const navigation = useNavigation();

  const handleSearchPress = () => {
    navigation.navigate("Results");
  };

  const handleHomePress = () => {
    navigation.navigate("Home");
  };

  const handleHeartPress = () => {
    navigation.navigate("Wishlist");
  };

  const handleProfilePress = () => {
    navigation.navigate("Profile");
  };

  const handleOutfitPress = () => {
    navigation.navigate("");
  };

  return (
    <View style={[styles.password]}>
      <View style={styles.newData} mode="outlined" />

      <TouchableOpacity onPress={handleProfilePress}>
        <View style={styles.center}>
          <Image
            style={[styles.ProfileIcon1]}
            contentFit="cover"
            source={require("../../assets/icons/profile-bar.png")}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleHeartPress}>
        <View style={styles.center}>
          <Image
            style={[styles.heartIcon1]}
            contentFit="cover"
            source={require("../../assets/icons/heart-bar.png")}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleHomePress}>
        <View style={styles.center}>
          <Image
            style={[styles.homeIcon]}
            contentFit="cover"
            source={require("../../assets/icons/home1.png")}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSearchPress}>
        <View style={styles.center}>
          <Image
            style={[styles.searchIcon]}
            contentFit="cover"
            source={require("../../assets/icons/search-bar.png")}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleOutfitPress}>
        <View style={styles.center}>
          <Image
            style={[styles.shirtIcon]}
            contentFit="cover"
            source={require("../../assets/icons/shirt-bar.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ToolBar;
