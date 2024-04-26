import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./Logout.style";
import AsyncStorage from '@react-native-async-storage/async-storage';


function LogOut() {
  const navigation = useNavigation();

  const handleLogoutPress = async () => {
    await AsyncStorage.removeItem("userName");
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
