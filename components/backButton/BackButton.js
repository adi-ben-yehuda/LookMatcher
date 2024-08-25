import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./BackButton.style";

function BackButton() {
  const navigation = useNavigation();
  const route = useRoute(); 

  const handleBackButtonPress = () => {
    if (route.name === 'Wishlist') { // Check if the current route is 'Wishlist'
      navigation.navigate('Home'); 
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.back}>
      <TouchableOpacity onPress={handleBackButtonPress}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../assets/icons/prev.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

export default BackButton;
