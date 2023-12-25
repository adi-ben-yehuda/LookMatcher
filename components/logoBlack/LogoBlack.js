import styles from "./LogoBlack.style";
import { Image } from "react-native";

const LogoWhite = () => {
  return (
    <Image
      style={[styles.logoIcon, styles.logoIconPosition]}
      contentFit="cover"
      source={require("../../assets/logoBlack.png")}
    />
  );
};

export default LogoWhite;
