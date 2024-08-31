import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../backButton/BackButton";
import styles from "./stores.style";

const Stores = () => {
  const navigation = useNavigation();

  const handlePress = (storeName) => {
    if (storeName === "Twenty Four Seven") {
      storeName = "Twentyfourseven";
    }

    if (storeName === "Studio Pasha") {
      storeName = "Studiopasha";
    }
    navigation.navigate("map", { store: storeName });
  };

  const renderButton = (storeName) => (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => handlePress(storeName)}
    >
      <Text style={styles.buttonText}>{storeName}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />

      <View style={styles.first}>
        <Text style={styles.titleText}>Choose a store</Text>
      </View>

      <View style={styles.buttonWrapper}>
        {renderButton("Castro")}
        {renderButton("Golf")}
        {renderButton("Hoodies")}
        {renderButton("Renuar")}
        {renderButton("Studio Pasha")}
        {renderButton("Twenty Four Seven")}
        {renderButton("Urbanica")}
        {renderButton("Yanga")}
      </View>
    </SafeAreaView>
  );
};

export default Stores;
