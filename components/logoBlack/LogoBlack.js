import styles from "./LogoBlack.style";
import { Image, View } from "react-native";

const LogoBlack = () => {
  return (
    <View style={styles.cover}>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../../assets/logoBlack.png")}
      />
    </View>
  );
};

export default LogoBlack;
