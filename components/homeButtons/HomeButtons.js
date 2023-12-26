import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./HomeButtons.style";

function HomeButtons() {
  return (
    <View style={styles.home}>
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

      {/* <View
        style={[styles.icons, styles.iconsShadowBox, { marginBottom: 20 }]}
      ></View> */}
    </View>
  );
}

export default HomeButtons;
