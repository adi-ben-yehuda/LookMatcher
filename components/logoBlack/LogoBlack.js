import styles from "./LogoBlack.style";
import { Image } from "react-native";

const LogoBlack = () => {
  return (
    <Image
      style={styles.logoIcon}
      contentFit="cover"
      source={require("../../assets/logoBlack.png")}
    />
  );
};

export default LogoBlack;
