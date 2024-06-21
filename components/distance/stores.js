import React from "react";
import { View, Button, StyleSheet, SafeAreaView, Dimensions, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../../styles/GlobalStyles";
import BackButton from "../backButton/BackButton";

const Stores = () => {
  const navigation = useNavigation();

  const handlePress = (storeName) => {
    navigation.navigate("map", { store: storeName });
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />

      <View style={styles.first}>
        <Text style={styles.titleText}>Choose a store</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <View style={styles.buttonContainer}>
          <Button title="Castro" onPress={() => handlePress("Castro")} color={Color.darkPurple} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Golf" onPress={() => handlePress("Golf")} color={Color.darkPurple} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Hoodies" onPress={() => handlePress("Hoodies")} color={Color.darkPurple} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Renuar" onPress={() => handlePress("Renuar")} color={Color.darkPurple} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Studio Pasha" onPress={() => handlePress("Studio Pasha")} color={Color.darkPurple} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Twenty Four Seven" onPress={() => handlePress("Twenty Four Seven")} color={Color.darkPurple} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Urbanica" onPress={() => handlePress("Urbanica")} color={Color.darkPurple} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Yanga" onPress={() => handlePress("Yanga")} color={Color.darkPurple} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF9FC",
    position: "relative",
  },
  first: {
    height: screenHeight * 0.1,
    borderColor: "#000",
    borderWidth: 0.2,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#FBF9FC",
  },
  titleText: {
    fontSize: screenHeight * 0.025,
    fontWeight: "bold",
    color: Color.darkPurple,
    textAlign: "center",
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#dddddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
});

export default Stores;
