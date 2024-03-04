import React, { useState } from "react";
import { Color, Border } from "../../styles/GlobalStyles";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
  
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  // Stores the selected image URI
  const [file, setFile] = useState(null);

  // Stores any error message
  const [error, setError] = useState(null);

  // Function to pick an image from
  //the device's media library
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      // If permission is denied, show an alert
      Alert.alert(
        "Permission Denied",
        `Sorry, we need camera  
                 roll permission to upload images.`
      );
    } else {
      // Launch the image library and get
      // the selected image
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        // If an image is selected (not cancelled),
        // update the file state variable
        setFile(result.assets[0].uri);

        // Clear any previous errors
        setError(null);
      }
    }
  };

 

  return (
    <View style={styles.container}>
      {/* Button to choose an image */}
      <TouchableOpacity onPress={pickImage}>
        <LinearGradient
          style={[styles.register1, styles.registerLayout]}
          locations={[0, 1]}
          colors={["#29085f", "#b941d7"]}
        >
          <Text style={styles.buttonSearch}>{"Search by\n image"}</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Conditionally render the image  
            or error message */}
      {file ? (
        // Display the selected image
        <View style={styles.imageContainer}>
          <Image source={{ uri: file }} style={styles.image} />
        </View>
      ) : (
        // Display an error message if there's
        // an error or no image selected
        <Text style={styles.errorText}>{error}</Text>
      )}
    </View>
  );
}

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  register1: {
    top: screenHeight * 0.2,
  },

  registerLayout: {
    backgroundColor: "transparent",
    width: screenWidth * 0.6,
    height: screenHeight * 0.1,
    borderRadius: Border.br_3xs,
    marginLeft: screenWidth * -0.3,
    left: "50%",
    position: "absolute",
  },
  buttonSearch: {
    color: Color.white,
    fontSize: screenHeight * 0.033,
    textAlign: "center",
    textAlignVertical: "center",
  },
  
 
  imageContainer: {
    top: screenHeight * 0.3,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  errorText: {
    color: "red",
    marginTop: 16,
  },
});
