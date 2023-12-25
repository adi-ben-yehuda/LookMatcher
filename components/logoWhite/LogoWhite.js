import styles from "./LogoWhite.style";
import { Image } from "react-native";

const LogoWhite = () => {
  return (
    <Image
      style={[styles.logoIcon, styles.logoIconPosition]}
      contentFit="cover"
      source={require("../../assets/logoWhite.png")}
    />
  );
};

export default LogoWhite;
