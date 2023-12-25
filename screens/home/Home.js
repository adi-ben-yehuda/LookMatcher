import * as React from "react";
import { View, Text } from "react-native";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ToolBar from "../../components/toolbar/ToolBar";
import styles from "./Home.style";
import { TouchableOpacity } from "react-native";
import LogoBlack from "../../components/logoBlack/LogoBlack";

const HomePage = () => {
  return (
    <View style={styles.home}>
      <LogoBlack></LogoBlack>
      <View style={[styles.icons, styles.iconsShadowBox, { marginBottom: 20 }]}></View>


     

      <View style={[styles.image4Icon]}>
        <Image
          contentFit="cover"
          source={require("../../assets/images/imgClothes.png")}
        />
      </View>

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


      <TouchableOpacity>
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

      <ToolBar></ToolBar>
    </View>
  );
};

export default HomePage;
