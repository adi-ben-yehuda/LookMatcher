import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { Dimensions, View, TouchableOpacity, Text, Image } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
import { Dropdown } from "react-native-element-dropdown";
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
  { label: "26", value: "7" },
  { label: "28", value: "8" },
  { label: "30", value: "9" },
  { label: "31", value: "10" },
  { label: "32", value: "11" },
  { label: "33", value: "12" },
  { label: "34", value: "13" },
  { label: "35", value: "14" },
  { label: "36", value: "15" },
  { label: "37", value: "16" },
  { label: "38", value: "17" },
  { label: "39", value: "18" },
  { label: "40", value: "19" },
  { label: "41", value: "20" },
  { label: "42", value: "21" },
  { label: "43", value: "22" },
  { label: "44", value: "23" },
  { label: "45", value: "24" },
  { label: "46", value: "25" },
  { label: "48", value: "26" },
];

const sizesAndShoesMapping = {
  1: "XS",
  2: "S",
  3: "M",
  4: "L",
  5: "XL",
  6: "XXL",
  7: "26",
  8: "28",
  9: "30",
  10: "31",
  11: "32",
  12: "33",
  13: "34",
  14: "35",
  15: "36",
  16: "37",
  17: "38",
  18: "39",
  19: "40",
  20: "41",
  21: "42",
  22: "43",
  23: "44",
  24: "45",
  25: "46",
  26: "48",
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


const gender = [
  { label: "Men", value: "1" },
  { label: "Women", value: "2" },
];

const genderMapping = {
  1: "Men",
  2: "Women",
};


const SearchByPhoto = () => {
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedStores, setSelectedStores] = useState([]);
  const [isStoreSelected, setIsStoreSelected] = useState(false);
  const [isSizeSelected, setIsSizeSelected] = useState(false);
  const [isFocus1, setIsFocus1] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const [errorMsg, setErrorMsg] = useState("");
  const [error2, setError2] = useState(false);

  const window = Dimensions.get("window");
  const screenHeight = window.height;

  // Stores the selected image URI
  const [file, setFile] = useState(null);
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
        navigation.setParams({ photo: null });
      }
    }
  };

  // Check if there's a photo in the route parameters
  useEffect(() => {
    if (route.params && route.params.photo) {
      setFile(route.params.photo.uri);
    }
  }, [route.params]);

  useEffect(() => {
    // Check if at least one store is selected
    setIsStoreSelected(selectedStores.length > 0);
    setIsSizeSelected(selectedSize.length > 0);
  }, [selectedStores, selectedSize]);

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
      </View>
    );
  };

  const clearImage = () => {
    setFile(null);
  };

  const searchPress = () => {
    setErrorMsg("");
    // Check if all required choices are selected
    if (
      file &&
      selectedGender &&
      selectedSize.length > 0 &&
      selectedStores.length > 0
    ) {
      const stores = selectedStores.map(
        (storeValue) => storesMapping[storeValue]
      );

      const sizes = selectedSize.map(
        (sizeValue) => sizesAndShoesMapping[sizeValue]
      );
      const gender = genderMapping[selectedGender];

      console.log("Selected Sizes for Current Category:", sizes);
      console.log("Selected Stores:", stores);
      console.log("Selected ggg:", gender);

      const search = {
        gender: gender,
        size: sizes,
        store: stores,
      };
    } else {
      const errorMsg = "Please select all choices";
      setErrorMsg(errorMsg);
      setError2(true);
      console.log("Please select all choices before searching.");
      console.log(error);
      console.log(errorMsg);
    }
  };

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
            <TouchableOpacity style={styles.closeIcon} onPress={clearImage}>
              <Image
                style={styles.closeIcon}
                source={require("../../assets/icons/X.png")}
              />
            </TouchableOpacity>
          </View>
        ) : (
          // Display an error message if there's
          // an error or no image selected
          <Text style={styles.errorText}>{error}</Text>
        )}
      </View>
      <Text style={styles.title3}>And select the following details:</Text>

      <View style={styles.container3}>
        <View style={styles.container}>
          <Dropdown
            style={[styles.dropdown, isFocus1 && { borderColor: "#43118C" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={gender}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus1 ? "Gender" : "..."}
            searchPlaceholder="Search..."
            value={selectedGender}
            onFocus={() => setIsFocus1(true)}
            onBlur={() => setIsFocus1(false)}
            onChange={(item) => {
              setSelectedGender(item.value);
              setIsFocus1(false);
            }}
          />
        </View>
      </View>

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

      {error2 && (
        <View style={styles.errorMessage}>
          <Text style={styles.error}>{errorMsg}</Text>
        </View>
      )}

      <TouchableOpacity
        onPress={searchPress}
        style={[
          styles.buttonContainer,
          (isStoreSelected || isSizeSelected) &&
            styles.buttonContainerSelected1,
          isStoreSelected && isSizeSelected && styles.buttonContainerSelected2,
          isStoreSelected &&
            isSizeSelected &&
            file &&
            styles.buttonContainerSelected3,
        ]}
      >
        <LinearGradient
          style={[
            styles.searchButton,
            (isStoreSelected || isSizeSelected) && styles.searchButton,
            isStoreSelected && isSizeSelected && styles.searchButton,
            isStoreSelected && isSizeSelected && file && styles.searchButton,
          ]}
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
