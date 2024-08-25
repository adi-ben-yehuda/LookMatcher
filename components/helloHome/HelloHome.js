import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./HelloHome.style";
import AsyncStorage from "@react-native-async-storage/async-storage";

function HelloHome() {
  const [name, setName] = useState("");

  useEffect(() => {
    const loadUserData = async () => {
      const storedName = await AsyncStorage.getItem("userName");
      if (storedName) {
        setName(storedName);
      }
    };

    loadUserData();
  }, []);

  return (
    <View style={styles.home}>
      <View style={styles.userGreeting}>
        <Text style={styles.userGreetingText}>Hello, {name}</Text>
      </View>
    </View>
  );
}

export default HelloHome;
