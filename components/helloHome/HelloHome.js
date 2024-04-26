import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./HelloHome.style";

function HelloHome() {
    const route = useRoute();
    // const { name } = route.params;

    return (
        <View style={styles.home}>
            <View style={styles.userGreeting}>
                {/* <Text style={styles.userGreetingText}>Hello, {name}</Text> */}
                <Text style={styles.userGreetingText}>Hello, name</Text>

            </View>
        </View>
    );
}

export default HelloHome;