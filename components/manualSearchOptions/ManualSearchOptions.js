import React, { useState, useEffect } from "react";
import {
  Dimensions,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
import styles from "./ManualSearchOptions.style";
import { Dropdown } from "react-native-element-dropdown";
// import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import BackButton from "../backButton/BackButton";
import { useNavigation } from "@react-navigation/native";

import {
  colors,
  gender,
  sizesMapping,
  colorMapping,
  storesMapping,
  shoesSizesMapping,
  categoryMappingMan,
  categoryMapping,
  genderMapping,
  sizes,
  stores,
  categoryMan,
  category,
  shoesSize,
} from "./data";

const Search = () => {
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedStores, setSelectedStores] = useState([]);
  const [isFocus1, setIsFocus1] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);
  const [isShoes, setIsShoes] = useState(false);
  const [isMen, setIsMen] = useState(false);
  const [isStoreSelected, setIsStoreSelected] = useState(false);
  const [isSizeSelected, setIsSizeSelected] = useState(false);
  const [isColorSelected, setIsColorSelected] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [error, setError] = useState(false);

  const window = Dimensions.get("window");
  const screenHeight = window.height;
  const navigation = useNavigation();

  useEffect(() => {
    if (selectedCategory === "10" && selectedGender === "2") {
      setSelectedSize([]);
      setIsShoes(true);
    } else if (selectedCategory === "8" && selectedGender === "1") {
      setSelectedSize([]);
      setIsShoes(true);
    } else {
      setSelectedSize([]);
      setIsShoes(false);
    }
  }, [selectedCategory, selectedGender]);

  useEffect(() => {
    // Update category options based on the selected gender
    if (selectedGender === "1") {
      setSelectedCategory(null);
      setIsMen(true);
    } else {
      setSelectedCategory(null);
      setIsMen(false);
    }
  }, [selectedGender]);

  useEffect(() => {
    // Check if at least one store is selected
    setIsStoreSelected(selectedStores.length > 0);
    setIsSizeSelected(selectedSize.length > 0);
    setIsColorSelected(selectedColor.length > 0);
  }, [selectedStores, selectedSize, selectedColor]);

  const renderItemColor = (item) => {
    return (
      <View style={styles.item}>
        <View
          style={[styles.colorRectangle, { backgroundColor: item.color }]}
        />
        <Text style={styles.textStyle}>{colorMapping[item.value]}</Text>
      </View>
    );
  };

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
      </View>
    );
  };

  const searchPress = async () => {
    setErrorMsg("");
    // Check if all required choices are selected
    if (
      selectedGender &&
      selectedCategory &&
      selectedColor.length > 0 &&
      selectedSize.length > 0 &&
      selectedStores.length > 0
    ) {
      const selectedMapping = isShoes ? shoesSizesMapping : sizesMapping;

      const sizes = selectedSize.map((sizeValue) => selectedMapping[sizeValue]);

      const stores = selectedStores.map(
        (storeValue) => storesMapping[storeValue]
      );
      const colors = selectedColor.map(
        (colorValue) => colorMapping[colorValue]
      );

      const gender = genderMapping[selectedGender];
      const selectedMap = isMen ? categoryMappingMan : categoryMapping;
      const category = selectedMap[selectedCategory];

      console.log("shoes:", isShoes);
      console.log("Selected Sizes for Current Category:", sizes);
      console.log("Selected Stores:", stores);
      console.log("Selected Colorssss:", colors);
      console.log("Selected ggg:", gender);
      console.log("Selected Category:", category);

      const search = {
        gender: genderMapping[selectedGender],
        category: isMen
          ? categoryMappingMan[selectedCategory]
          : categoryMapping[selectedCategory],
        colors: selectedColor.map((color) => colorMapping[color]),
        sizes: selectedSize.map((size) =>
          isShoes ? shoesSizesMapping[size] : sizesMapping[size]
        ),
        stores: selectedStores.map((store) => storesMapping[store]),
      };

      try {
        const res = await fetch("http://192.168.56.1:3000/api/SearchResults", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(search),
        });

        if (res.ok) {
          const body = await res.json();
          navigation.navigate("Results", { body });
        } else if (res.status === 409) {
          // Handle conflict
        } else if (res.status === 400) {
          // Handle bad request
        } else {
          // Handle other errors
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      const errorMsg = "Please select all choices";
      setErrorMsg(errorMsg);
      setError(true);
      console.log("Please select all choices before searching.");
      console.log(error);
      console.log(errorMsg);
    }
  };

  return (
    <View style={styles.page}>
      <Text style={styles.title}> Search For An Item{"\n"}You Want</Text>
      <View style={styles.container1}>
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

      <View style={styles.container2}>
        <View style={styles.container}>
          <Dropdown
            style={[styles.dropdown, isFocus2 && { borderColor: "#43118C" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={isMen ? categoryMan : category}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus2 ? "Category" : "..."}
            searchPlaceholder="Search..."
            value={selectedCategory}
            onFocus={() => setIsFocus2(true)}
            onBlur={() => setIsFocus2(false)}
            onChange={(item) => {
              setSelectedCategory(item.value);
              setIsFocus2(false);
            }}
          />
        </View>
      </View>

      <View style={styles.container3}>
        <View style={styles.container}>
          <MultiSelect
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={colors}
            labelField="label"
            valueField="value"
            placeholder="Color"
            value={selectedColor}
            search
            searchPlaceholder="Search..."
            onChange={(selectedItems) => {
              // Check if the selected sizes do not exceed the limit
              if (selectedItems.length <= 3) {
                setSelectedColor(selectedItems);
              }
            }}
            renderItem={renderItemColor}
            renderSelectedItem={(item, unSelect) => (
              <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                <View
                  style={[
                    styles.selectedStyle,
                    { borderColor: item.color, borderWidth: 1.8 },
                  ]}
                >
                  <Text
                    style={[
                      styles.textSelectedStyle,
                      {
                        color: item.label === "White" ? "black" : item.color,
                      },
                    ]}
                  >
                    {item.label}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
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
            data={isShoes ? shoesSize : sizes}
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

      {error && (
        <View style={styles.errorMessage}>
          <Text style={styles.error}>{errorMsg}</Text>
        </View>
      )}

      <TouchableOpacity
        onPress={searchPress}
        style={[
          styles.buttonContainer,
          (isStoreSelected || isSizeSelected || isColorSelected) &&
            styles.buttonContainerSelected2,
          isColorSelected && isSizeSelected && styles.buttonContainerSelected3,
          isStoreSelected && isSizeSelected && styles.buttonContainerSelected3,
          isStoreSelected && isColorSelected && styles.buttonContainerSelected3,
          isStoreSelected &&
            isColorSelected &&
            isSizeSelected &&
            styles.buttonContainerSelected4,
        ]}
      >
        <LinearGradient
          style={[
            styles.searchButton,
            (isStoreSelected || isSizeSelected || isColorSelected) &&
              styles.searchButton,
            isColorSelected && isSizeSelected && styles.searchButton,
            isStoreSelected && isSizeSelected && styles.searchButton,
            isStoreSelected && isColorSelected && styles.searchButton,
            isStoreSelected &&
              isColorSelected &&
              isSizeSelected &&
              styles.searchButton,
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

export default Search;
