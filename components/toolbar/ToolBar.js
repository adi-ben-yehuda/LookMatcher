import React from 'react';
import styles from "./ToolBar.style";
import { Image, View, TouchableOpacity } from "react-native";

const ToolBar = () => {
  return (
    <View style={[styles.toolbar]}>
      <TouchableOpacity>
        <Image
          style={[styles.shirtBar]}
          contentFit="cover"
          source={require("../../assets/icons/shirt-bar.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          style={[styles.searchBar]}
          contentFit="cover"
          source={require("../../assets/icons/search-bar.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          style={[styles.logoBar]}
          contentFit="cover"
          source={require("../../assets/logoBlack.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          style={[styles.heartBar]}
          contentFit="cover"
          source={require("../../assets/icons/heart-bar.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          style={[styles.profileBar]}
          contentFit="cover"
          source={require("../../assets/icons/profile-bar.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ToolBar;
