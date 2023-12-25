import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontFamily, FontSize } from "../../styles/GlobalStyles";;
import styles from "./HomePage.style";
import { TouchableOpacity } from "react-native-web";

const HomePage = () => {
  return (
    <View style={styles.home}>
      <View style={[styles.icons, styles.iconsShadowBox]}>
        <View style={[styles.iconsChild]} />
      </View>
      <View style={[styles.rectangle, styles.rectangleLayout]} />
      {/* <Text style={styles.accountAndCard}>Hi, Dana</Text> */}
      <Image
        style={[styles.logoIcon]}
        contentFit="cover"
        source={require("../../assets/logoBlack.png")}
      />

      <Image
        style={[styles.image4Icon]}
        contentFit="cover"
        source={require("../../assets/images/imgClothes.png")}
      />

      {/* //left up rec */}
      <TouchableOpacity>
      <LinearGradient
        style={[styles.recUpLeft]}
        locations={[0, 1]}
        colors={["#29085f", "#b941d7"]}
      >
        <Image
          style={styles.iconsButtons}
          source={require("../../assets/icons/search2.png")}
        />
        <Text style={styles.text}>Search</Text>
      </LinearGradient>
      </TouchableOpacity>

      {/* left down rec */}
      <TouchableOpacity>
      <LinearGradient
        style={[styles.recDownLeft]}
        locations={[0, 1]}
        colors={["#29085f", "#b941d7"]}
      >
        <Image
          style={styles.iconsButtons}
          source={require("../../assets/icons/outline--shirt.png")}
        />
        <Text style={styles.text}>Outfits</Text>
      </LinearGradient>
      </TouchableOpacity>

      {/* // right down rec  */}
      <TouchableOpacity>
      <LinearGradient
        style={styles.recDownRight}
        locations={[0, 1]}
        colors={["#29085f", "#b941d7"]}
      >
        <Image
          style={styles.iconsButtons}
          source={require("../../assets/icons/user.png")}
        />
        <Text style={styles.text}>Profile</Text>

      </LinearGradient>
      </TouchableOpacity>

      {/* // right up rec  */}
      <TouchableOpacity >
        <LinearGradient
          style={[styles.recUpRight]}
          locations={[0, 1]}
          colors={["#29085f", "#b941d7"]}
        >
          <Image
            style={styles.iconsButtons}
            source={require("../../assets/icons/favorite1.png")}
          />
          <Text style={styles.text}>Favorites</Text>
        </LinearGradient>
      </TouchableOpacity>




      <View style={[styles.toolbar]}>
        <Image
          style={[styles.shirtBar]}
          contentFit="cover"
          source={require("../../assets/icons/shirt-bar.png")}
        />

        <Image
          style={[styles.searchBar]}
          contentFit="cover"
          source={require("../../assets/icons/search-bar.png")}
        />


        <Image
          style={[styles.logoBar]}
          contentFit="cover"
          source={require("../../assets/logoBlack.png")}
        />

        <Image
          style={[styles.heartBar]}
          contentFit="cover"
          source={require("../../assets/icons/heart-bar.png")}
        />

        <Image
          style={[styles.profileBar]}
          contentFit="cover"
          source={require("../../assets/icons/profile-bar.png")}
        />
      </View >

    </View>
  );
};

export default HomePage;
