import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import styles from "./HomeButtons.style";


function HomeButtons() {
  const navigation = useNavigation();

  const handleSearchPress = () => {
    navigation.navigate("Search");
  };

  const handleWishlistPress = () => {
    navigation.navigate("Wishlist");
  };

  const handleProfilePress = () => {
    navigation.navigate("Profile");
  };

  const handleOutfitPress = () => {
    navigation.navigate("");
  };

  return (
    <View style={styles.home}>

      <TouchableOpacity onPress={handleSearchPress}>
        <LinearGradient
          style={[styles.recUpLeft, styles.buttonsUp]}
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

      <TouchableOpacity onPress={handleWishlistPress}>
        <LinearGradient
          style={[styles.recUpRight, styles.buttonsUp]}
          locations={[0, 1]}
          colors={["#29085f", "#b941d7"]}
        >
          <Image
            style={styles.iconsButtons}
            source={require("../../assets/icons/favorite1.png")}
          />
          <Text style={styles.text}>Wishlist</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleOutfitPress}>
        <LinearGradient
          style={[styles.recDownLeft, styles.buttonsDown, styles.buttonsUp]}
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

      <TouchableOpacity onPress={handleProfilePress}>
        <LinearGradient
          style={[styles.recDownRight, styles.buttonsDown, styles.buttonsUp]}
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

      {/* <View
        style={[styles.icons, styles.iconsShadowBox, { marginBottom: 20 }]}
      ></View> */}
    </View>
  );
}

export default HomeButtons;
