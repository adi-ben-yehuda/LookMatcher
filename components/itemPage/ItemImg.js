import styles from "./ItemImg.style";
import { View, Image } from "react-native";

const ItemText = () => {
    return (
        <View style={styles.container}>
        <Image style={[styles.itemImg]}
          contentFit="cover"
          source={require("../../assets/images/Item.png")}
        />
        <Image style={[styles.back]}
          contentFit="cover"
          source={require("../../assets/icons/back.png")}
        />

        <Image style={[styles.heart]}
          contentFit="cover"
          source={require("../../assets/icons/heart-bar.png")}
        />
      </View>
    );
};

export default ItemText;