import React from "react";
import {
  View,
  Button,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../../styles/GlobalStyles";
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

      {/* <View style={styles.buttonWrapper}>
        <View style={styles.buttonContainer}>
          <Button
            title="Castro"
            onPress={() => handlePress("Castro")}
            color={Color.darkPurple}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Golf"
            onPress={() => handlePress("Golf")}
            color={Color.darkPurple}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Hoodies"
            onPress={() => handlePress("Hoodies")}
            color={Color.darkPurple}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Renuar"
            onPress={() => handlePress("Renuar")}
            color={Color.darkPurple}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Studio Pasha"
            onPress={() => handlePress("Studio Pasha")}
            color={Color.darkPurple}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Twenty Four Seven"
            onPress={() => handlePress("Twenty Four Seven")}
            color={Color.darkPurple}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Urbanica"
            onPress={() => handlePress("Urbanica")}
            color={Color.darkPurple}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Yanga"
            onPress={() => handlePress("Yanga")}
            color={Color.darkPurple}
          />
        </View>
      </View> */}

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
