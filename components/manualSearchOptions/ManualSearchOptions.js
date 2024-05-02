import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
import styles from "./ManualSearchOptions.style";
import { Dropdown } from "react-native-element-dropdown";
import { LinearGradient } from "expo-linear-gradient";
import BackButton from "../backButton/BackButton";
import { useNavigation } from "@react-navigation/native";

const colors = [
  { label: "Black", value: "1", color: "#292929" },
  { label: "Blue", value: "2", color: "#234da0" },
  { label: "Brown", value: "3", color: "#8f6038" },
  { label: "Burgundy", value: "4", color: "#940202" },
  { label: "Gray", value: "5", color: "#999999" },
  { label: "Green", value: "6", color: "#4a8157" },
  { label: "Light Blue", value: "7", color: "#49e2ff" },
  { label: "Orange", value: "8", color: "#fa7e3c" },
  { label: "Pink", value: "9", color: "#ff9ccc" },
  { label: "Purple", value: "10", color: "#9031b0" },
  { label: "Red", value: "11", color: "#FF0000" },
  { label: "White", value: "12", color: "#ffffff" },
  { label: "Yellow", value: "13", color: "#fef200" },
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
  { label: "Dresses", value: "1" },
  { label: "Jackets and coats", value: "2" },
  { label: "Jeans", value: "3" },
  { label: "Pants", value: "4" },
  { label: "Shirts", value: "5" },
  { label: "Shoes", value: "6" },
  { label: "Shorts", value: "7" },
  { label: "Skirts", value: "8" },
  { label: "Sweaters", value: "9" },
  { label: "Sweatshirts", value: "10" },
];

const categoryMan = [
  { label: "Jackets and coats", value: "1" },
  { label: "Jeans", value: "2" },
  { label: "Pants", value: "3" },
  { label: "Shirts", value: "4" },
  { label: "Shoes", value: "5" },
  { label: "Shorts", value: "6" },
  { label: "Sweaters", value: "7" },
  { label: "Sweatshirts", value: "8" },
];

export const stores = [
  { label: "Castro", value: "1" },
  { label: "Golf", value: "2" },
  { label: "Hoodies", value: "3" },
  { label: "Renuar", value: "4" },
  { label: "Studiopasha", value: "5" },
  { label: "Twentyfourseven", value: "6" },
  { label: "Urbanica", value: "7" },
  { label: "Yanga", value: "8" },
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
  1: "Dresses",
  2: "Jackets and coats",
  3: "Jeans",
  4: "Pants",
  5: "Shirts",
  6: "Shoes",
  7: "Shorts",
  8: "Skirts",
  9: "Sweaters",
  10: "Sweatshirts",
};

const categoryMappingMan = {
  1: "Jackets and coats",
  2: "Jeans",
  3: "Pants",
  4: "Shirts",
  5: "Shoes",
  6: "Shorts",
  7: "Sweaters",
  8: "Sweatshirts",
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
  2: "Golf",
  3: "Hoodies",
  4: "Renuar",
  5: "Studiopasha",
  6: "Twentyfourseven",
  7: "Urbanica",
  8: "Yanga",
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
  1: "Black",
  2: "Blue",
  3: "Brown",
  4: "Burgundy",
  5: "Gray",
  6: "Green",
  7: "Light Blue",
  8: "Orange",
  9: "Pink",
  10: "Purple",
  11: "Red",
  12: "White",
  13: "Yellow",
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
    if (selectedCategory === "6" && selectedGender === "2") {
      // The category is shoes and the gender is women
      setSelectedSize([]);
      setIsShoes(true);
    } else if (selectedCategory === "5" && selectedGender === "1") {
      // The category is shoes and the gender is men
      setSelectedSize([]);
      setIsShoes(true);
    } else {
      setSelectedSize([]);
      setIsShoes(false);
    }
  }, [selectedCategory, selectedGender]);

  useEffect(() => {
    if (selectedGender === "1") {
      // The gender is men
      setSelectedCategory(null);
      setIsMen(true);
    } else if (selectedGender === "2") {
      // The gender is women
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
        const res = await fetch("http://localhost:3000/api/SearchResults", {
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
        <Text style={{ color: "#43118C" }}>{"\n"} Loading...</Text>
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
