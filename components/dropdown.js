import React, { useState, useEffect } from "react";
import {
  Dimensions,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
import styles from "./dropdown.style";
import { Dropdown } from "react-native-element-dropdown";
// import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import Tool from "../components/toolbar/ToolBar";
import BackButton from "./backButton/BackButton";

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
  { label: "47", value: "13" },
  { label: "48", value: "14" },
  { label: "49", value: "15" },
  { label: "50", value: "16" },
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
  { label: "XXS", value: "1" },
  { label: "XS", value: "2" },
  { label: "S", value: "3" },
  { label: "M", value: "4" },
  { label: "L", value: "5" },
  { label: "XL", value: "6" },
  { label: "XXL", value: "7" },
  { label: "XXXL", value: "8" },
  { label: "32", value: "9" },
  { label: "34", value: "10" },
  { label: "36", value: "11" },
  { label: "38", value: "12" },
  { label: "40", value: "13" },
  { label: "42", value: "14" },
  { label: "44", value: "15" },
  { label: "46", value: "16" },
  { label: "48", value: "17" },
];

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
  13: "47",
  14: "48",
  15: "49",
  16: "50",
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

const sizesMapping = {
  1: "XXS",
  2: "XS",
  3: "S",
  4: "M",
  5: "L",
  6: "XL",
  7: "XXL",
  8: "XXXL",
  9: "32",
  10: "34",
  11: "36",
  12: "38",
  13: "40",
  14: "42",
  15: "44",
  16: "46",
  17: "48",
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

const MultiSelectComponent = () => {
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedStores, setSelectedStores] = useState([]);
  const [isFocus1, setIsFocus1] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);
  const [isShoes, setIsShoes] = useState(false);
  const window = Dimensions.get("window");
  const screenHeight = window.height;


  const renderItemColor = (item) => {
    return (
      <View style={styles.item}>
        <View
          style={[styles.colorRectangle, { backgroundColor: item.color }]}
        />
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

  const renderSelectedColor = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
      </View>
    );
  };

  const searchPress = async () => {
    const selectedMapping = isShoes ? shoesSizesMapping : sizesMapping;

    const sizes = selectedSize.map((sizeValue) => selectedMapping[sizeValue]);

    const stores = selectedStores.map(
      (storeValue) => storesMapping[storeValue]
    );
    const colors = selectedColor.map((colorValue) => colorMapping[colorValue]);

    const gender = selectedGender;
    const category = selectedCategory;

    console.log("shoes:", isShoes);
    console.log("Selected Sizes for Current Category:", sizes);
    console.log("Selected Stores:", stores);
    console.log("Selected Colorssss:", colors);
    console.log("Selected ggg:", gender);
    console.log("Selected Category:", category);

    const search = {
      gender: gender,
      category: category,
      color: colors,
      size: sizes,
      store: stores,
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
        //navigation.navigate("Results", { selectedChoices });
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
  };

  return (
    <View style={styles.page}>
      {/* <View style={{ flex: 1 }}> */}
      {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
      <ScrollView>
        <Text style={styles.title}> Search For An Item{"\n"}You Want</Text>
        <View style={styles.container1}>
          <View style={styles.container}>
            <Dropdown
              style={[styles.dropdown, isFocus1 && { borderColor: "#43118C" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
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
                setSelectedGender(item.label);
                console.log(" Gender:", selectedGender);
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
              data={category}
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
                setIsFocus2(false);
                setSelectedCategory(item.label);
                console.log(" category:", selectedCategory);
                setSelectedSize([]);
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
              onChange={(item) => {
                setSelectedColor(item);
                console.log(" color:", selectedColor);
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
                          color:
                            item.label === "White"
                              ? "black"
                              : item.color,
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
              data={selectedCategory === "Shoes" ? shoesSize : sizes}
              labelField="label"
              valueField="value"
              placeholder="Size"
              value={selectedSize}
              search
              searchPlaceholder="Search..."
              onChange={(item) => {
                //setSelectedSize(item);
                setSelectedSize(item);
                if (selectedCategory === "Shoes") {
                  setIsShoes(true);
                }
                console.log(" sizes:", selectedSize);
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
              onChange={(item) => {
                setSelectedStores(item);
                console.log(" storesssss:", item);
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
      </ScrollView>

      {/* </View> */}

      <View>
        <Tool />
      </View>
    </View>
  );
};

export default MultiSelectComponent;
