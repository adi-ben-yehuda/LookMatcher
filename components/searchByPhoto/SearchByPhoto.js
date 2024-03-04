import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { Dimensions, View, TouchableOpacity, Text, Image } from "react-native";

import { MultiSelect } from "react-native-element-dropdown";
import styles from "./SearchByPhoto.style";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import BackButton from "../backButton/BackButton";
import * as ImagePicker from "expo-image-picker";

const stores = [
  { label: "Castro", value: "1" },
  { label: "Renuar", value: "2" },
  { label: "TwentyForSeven", value: "3" },
  { label: "Hoodies", value: "4" },
  { label: "Urbanica", value: "5" },
  { label: "H&O", value: "6" },
  { label: "Tamnoon", value: "7" },
  { label: "Golf", value: "8" },
  { label: "FashionClub", value: "9" },
];

const sizes = [
  { label: "XS", value: "1" },
  { label: "S", value: "2" },
  { label: "M", value: "3" },
  { label: "L", value: "4" },
  { label: "XL", value: "5" },
  { label: "XXL", value: "6" },
  { label: "XXXL", value: "7" },
  { label: "32", value: "8" },
  { label: "34", value: "9" },
  { label: "36", value: "10" },
  { label: "38", value: "11" },
  { label: "40", value: "12" },
  { label: "42", value: "13" },
  { label: "44", value: "14" },
  { label: "46", value: "15" },
  { label: "48", value: "16" },
  { label: "shoes 35", value: "17" },
  { label: "shoes 36", value: "18" },
  { label: "shoes 37", value: "19" },
  { label: "shoes 38", value: "20" },
  { label: "shoes 39", value: "21" },
  { label: "shoes 40", value: "22" },
  { label: "shoes 41", value: "23" },
  { label: "shoes 42", value: "24" },
  { label: "shoes 43", value: "25" },
  { label: "shoes 44", value: "26" },
  { label: "shoes 45", value: "27" },
  { label: "shoes 46", value: "28" },
  { label: "shoes 47", value: "29" },
  { label: "shoes 48", value: "30" },
  { label: "shoes 49", value: "31" },
  { label: "shoes 50", value: "32" },
];

const sizesAndShoesMapping = {
  1: "XS",
  2: "S",
  3: "M",
  4: "L",
  5: "XL",
  6: "XXL",
  7: "XXXL",
  8: "32",
  9: "34",
  10: "36",
  11: "38",
  12: "40",
  13: "42",
  14: "44",
  15: "46",
  16: "48",
  17: "shoes 35",
  18: "shoes 36",
  19: "shoes 37",
  20: "shoes 38",
  21: "shoes 39",
  22: "shoes 40",
  23: "shoes 41",
  24: "shoes 42",
  25: "shoes 43",
  26: "shoes 44",
  27: "shoes 45",
  28: "shoes 46",
  29: "shoes 47",
  30: "shoes 48",
  31: "shoes 49",
  32: "shoes 50",
};

const storesMapping = {
  1: "Castro",
  2: "Renuar",
  3: "TwentyForSeven",
  4: "Hoodies",
  5: "Urbanica",
  6: "H&O",
  7: "Tamnoon",
  8: "Golf",
  9: "FashionClub",
};

const SearchByPhoto = () => {
  const [selectedSize, setSelectedSize] = useState([]);

  const [selectedStores, setSelectedStores] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const window = Dimensions.get("window");
  const screenHeight = window.height;

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

  // Check if there's a photo in the route parameters
  useEffect(() => {
    if (route.params && route.params.photo) {
      setFile(route.params.photo.uri);
    }
  }, [route.params]);

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
      </View>
    );
  };

  const searchPress = async () => {};

  return (
    <View style={styles.page}>
      <View>
        <Text style={styles.title}>Spotted Item You Like?</Text>
        <Text style={styles.title2}>
          Take a picture and explore similar finds
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("TakePhoto")}>
          <LinearGradient
            style={[styles.recUpLeft]}
            locations={[0, 1]}
            colors={["#29085f", "#b941d7"]}
          >
            <Image
              style={styles.iconsButtons}
              source={require("../../assets/camera.png")}
            />
            <Text style={styles.text}>Camera</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={pickImage}>
          <LinearGradient
            style={[styles.recUpRight]}
            locations={[0, 1]}
            colors={["#29085f", "#b941d7"]}
          >
            <Image
              style={styles.iconsButtons}
              source={require("../../assets/gallery.png")}
            />
            <Text style={styles.text}>Photo</Text>
          </LinearGradient>
        </TouchableOpacity>

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
      <Text style={styles.title3}>And select the following details:</Text>

      <View style={styles.container4}>
        <View style={styles.container}>
          <MultiSelect
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={sizes}
            labelField="label"
            valueField="value"
            placeholder="Size"
            value={selectedSize}
            search
            searchPlaceholder="Search..."
            onChange={(selectedItems) => {
              // Check if the selected sizes do not exceed the limit
              if (selectedItems.length <= 3) {
                setSelectedSize(selectedItems);
              }
            }}
            renderItem={renderItem}
            renderSelectedItem={(item, unSelect) => (
              <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                <View style={styles.selectedStyle}>
                  <Text style={styles.textSelectedStyle}>{item.label}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

      <View style={styles.container5}>
        <View style={styles.container}>
          <MultiSelect
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={stores}
            labelField="label"
            valueField="value"
            placeholder="Store"
            value={selectedStores}
            search
            searchPlaceholder="Search..."
            onChange={(selectedItems) => {
              // Check if the selected sizes do not exceed the limit
              if (selectedItems.length <= 3) {
                setSelectedStores(selectedItems);
              }
            }}
            renderItem={renderItem}
            renderSelectedItem={(item, unSelect) => (
              <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                <View style={styles.selectedStyle}>
                  <Text style={styles.textSelectedStyle}>{item.label}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={searchPress}
        style={styles.searchButtonContainer}
      >
        <LinearGradient
          style={styles.searchButton}
          locations={[0, 1]}
          colors={["#29085f", "#b941d7"]}
        >
          <Text style={styles.searchText}>{"Search"}</Text>
        </LinearGradient>
      </TouchableOpacity>

      <BackButton />
    </View>
  );
};

export default SearchByPhoto;
