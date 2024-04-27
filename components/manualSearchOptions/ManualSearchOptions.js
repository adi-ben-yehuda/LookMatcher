import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
import styles from "./ManualSearchOptions.style";
import { Dropdown } from "react-native-element-dropdown";
// import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import BackButton from "../backButton/BackButton";
import { useNavigation } from "@react-navigation/native";
// import {
//   colors,
//   gender,
//   sizesMapping,
//   colorMapping,
//   storesMapping,
//   shoesSizesMapping,
//   categoryMappingMan,
//   categoryMapping,
//   genderMapping,
//   sizes,
//   stores,
//   categoryMan,
//   category,
//   shoesSize,
// } from "./data";

const colors = [
  { label: "Pink", value: "1", color: "#ff9ccc" },
  { label: "Red", value: "2", color: "#FF0000" },
  { label: "Burgundy", value: "3", color: "#940202" },
  { label: "Brown", value: "4", color: "#8f6038" },
  { label: "Orange", value: "5", color: "#fa7e3c" },
  { label: "Yellow", value: "6", color: "#fef200" },
  { label: "White", value: "7", color: "#ffffff" },
  { label: "Black", value: "8", color: "#292929" },
  { label: "Purple", value: "9", color: "#9031b0" },
  { label: "Blue", value: "10", color: "#234da0" },
  { label: "Light Blue", value: "11", color: "#49e2ff" },
  { label: "Gray", value: "12", color: "#999999" },
  { label: "Green", value: "13", color: "#4a8157" },
];

const shoesSize = [
  { label: "35", value: "1" },
  { label: "36", value: "2" },
  { label: "37", value: "3" },
  { label: "38", value: "4" },
  { label: "39", value: "5" },
  { label: "40", value: "6" },
  { label: "41", value: "7" },
  { label: "42", value: "8" },
  { label: "43", value: "9" },
  { label: "44", value: "10" },
  { label: "45", value: "11" },
  { label: "46", value: "12" },
];

const gender = [
  { label: "Men", value: "1" },
  { label: "Women", value: "2" },
];

const category = [
  { label: "Shirts", value: "1" },
  { label: "Pants", value: "2" },
  { label: "Jeans", value: "3" },
  { label: "Shorts", value: "4" },
  { label: "Dresses", value: "5" },
  { label: "Skirts", value: "6" },
  { label: "Sweaters", value: "7" },
  { label: "Jackets and coats", value: "8" },
  { label: "Sweatshirts", value: "9" },
  { label: "Shoes", value: "10" },
];

const categoryMan = [
  { label: "Shirts", value: "1" },
  { label: "Pants", value: "2" },
  { label: "Jeans", value: "3" },
  { label: "Shorts", value: "4" },
  { label: "Sweaters", value: "5" },
  { label: "Jackets and coats", value: "6" },
  { label: "Sweatshirts", value: "7" },
  { label: "Shoes", value: "8" },
];

export const stores = [
  { label: "Castro", value: "1" },
  { label: "Renuar", value: "2" },
  { label: "Twentyfourseven", value: "3" },
  { label: "Hoodies", value: "4" },
  { label: "Urbanica", value: "5" },
  { label: "Studiopasha", value: "6" },
  { label: "Golf", value: "7" },
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
  { label: "36", value: "14" },
  { label: "38", value: "15" },
  { label: "40", value: "16" },
  { label: "42", value: "17" },
  { label: "44", value: "18" },
  { label: "46", value: "19" },
  { label: "48", value: "20" },
];

const genderMapping = {
  1: "Men",
  2: "Women",
};

const categoryMapping = {
  1: "Shirts",
  2: "Pants",
  3: "Jeans",
  4: "Shorts",
  5: "Dresses",
  6: "Skirts",
  7: "Sweaters",
  8: "Jackets and coats",
  9: "Sweatshirts",
  10: "Shoes",
};

const categoryMappingMan = {
  1: "Shirts",
  2: "Pants",
  3: "Jeans",
  4: "Shorts",
  5: "Sweaters",
  6: "Jackets and coats",
  7: "Sweatshirts",
  8: "Shoes",
};

const shoesSizesMapping = {
  1: "35",
  2: "36",
  3: "37",
  4: "38",
  5: "39",
  6: "40",
  7: "41",
  8: "42",
  9: "43",
  10: "44",
  11: "45",
  12: "46",
};

const storesMapping = {
  1: "Castro",
  2: "Renuar",
  3: "Twentyfourseven",
  4: "Hoodies",
  5: "Urbanica",
  6: "Studiopasha",
  7: "Golf",
};

const sizesMapping = {
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
  14: "36",
  15: "38",
  16: "40",
  17: "42",
  18: "44",
  19: "46",
  20: "48",
};

const colorMapping = {
  1: "Pink",
  2: "Red",
  3: "Burgundy",
  4: "Brown",
  5: "Orange",
  6: "Yellow",
  7: "White",
  8: "Black",
  9: "Purple",
  10: "Blue",
  11: "Light Blue",
  12: "Gray",
  13: "Green",
};

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

  // Add a state variable for loading
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      try {
        const res = await fetch("http://192.168.1.109:3000/api/SearchResults", {
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
      } finally {
        setLoading(false); // Set loading to false when search is complete
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

  if (loading) {
    return (
      <View style={styles.load}>
        <ActivityIndicator size="large" color="#43118C" />
        <Text style={{ color: '#43118C' }}>{"\n"} Loading...</Text>
      </View>
    );
  }

  return (
    <View>
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
        {/* {loading && (
        <View style={[styles.loadingContainer, { flex: 1, backgroundColor: "#FBF9FC" , justifyContent: 'center', alignItems: 'center' }]}>
          <ActivityIndicator size="large" color="#43118C" />
        </View>
      )} */}
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
