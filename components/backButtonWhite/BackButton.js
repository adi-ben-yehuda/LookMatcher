import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../backButton/BackButton.style";

function BackButton() {
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.back}>
      <TouchableOpacity onPress={handleBackButtonPress}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../assets/icons/prevWhite.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

export default BackButton;
