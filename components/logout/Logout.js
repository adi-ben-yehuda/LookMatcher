import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./Logout.style";

function LogOut() {
  const navigation = useNavigation();

  const handleLogoutPress = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.logout}>
      <TouchableOpacity onPress={handleLogoutPress}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../assets/icons/logout.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

export default LogOut;
