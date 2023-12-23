import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontFamily, FontSize } from "../../styles/GlobalStyles";;
import styles from "./HomePage.style";

const HomePage = () => {
  return (
    <View style={styles.home}>
      <View style={[styles.icons, styles.iconsShadowBox]}>
        <View style={[styles.iconsChild]} />
      </View>
      <View style={[styles.rectangle, styles.rectangleLayout]} />
      <Text style={styles.accountAndCard}>Hi, Dana</Text>
      <Image
        style={[styles.logoIcon]}
        contentFit="cover"
        source={require("../../assets/logoBlack.png")}
      />
      {/* <Image
        style={styles.favoriteIcon}
        contentFit="cover"
        source={require("../../assets/icons/favorite.png")}
      /> */}
      <Image
        style={[ styles.image4Icon]}
        contentFit="cover"
        source={require("../../assets/images/imgClothes.png")}
      />
      
      {/* //left up rec */}
      <LinearGradient
        style={[styles.recUpLeft]}
        locations={[0, 1]}
        colors={["#29085f", "#b941d7"]}
      >
        <View style={[styles.searchWrapper, styles.wrapperPosition]}>
          <Text style={[styles.search, styles.searchTypo]}>Search</Text>
        </View>
        <Image
          style={[styles.searchIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../../assets/icons/search2.png")}
        />
      </LinearGradient>

       {/* left down rec */}
      <LinearGradient
        style={[ styles.recDownLeft]}
        locations={[0, 1]}
        colors={["#29085f", "#b941d7"]}
      >
        <View style={[styles.createOutfitWrapper, styles.createPosition]}>
          <Text style={[styles.createOutfit, styles.createPosition]}>
            Create Outfit
          </Text>
        </View>
        <Image
        style={[styles.outlineShirt, styles.taskbarIconLayout]}
        contentFit="cover"
        source={require("../../assets/icons/outline--shirt.png")}
      />
      </LinearGradient>

      {/* // right down rec  */}
      <LinearGradient
        style={[ styles.recDownRight]}
        locations={[0, 1]}
        colors={["#29085f", "#b941d7"]}
      >
        <View style={[styles.profileWrapper, styles.wrapperPosition]}>
          <Text style={[styles.profile, styles.searchTypo]}>Profile</Text>
        </View>
        <Image
          style={[styles.userIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../../assets/icons/user.png")}
        />
      </LinearGradient>

     {/* // right up rec  */}
      <LinearGradient
        style={[ styles.recUpRight]}
        locations={[0, 1]}
        colors={["#29085f", "#b941d7"]}
      >
        <View style={[styles.favoritesWrapper, styles.wrapperPosition]}>
          <Text style={[styles.favorites, styles.searchTypo]}>Favorites</Text>
        </View>
        <Image
          style={[styles.userIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../../assets/icons/favorite.png")}
        />
      </LinearGradient>

      
     
    </View>
  );
};

export default HomePage;
