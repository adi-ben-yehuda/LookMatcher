import * as React from "react";
import styles from "./ManualSearchOptions.style";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
// import { ScrollView } from "react-native-virtualized-view";

const DropdownList = ({ data, selectedItem, onSelect, isVisible }) => (
  <View style={isVisible ? styles.listContainer : { display: "none" }}>
    <FlatList
      data={data}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.option,
            selectedItem === item && styles.selectedOption,
          ]}
          onPress={() => onSelect(item)}
        >
          <Text>{item}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

const MultipleDropdownList = ({ data, selectedItem, onSelect, isVisible }) => (
  <View style={isVisible ? styles.listContainer : { display: "none" }}>
    <FlatList
      data={data}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.option,
            selectedItem.includes(item) && styles.selectedOption,
          ]}
          onPress={() => onSelect(item)}
        >
          <Text>{item}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

const ManualSearch = () => {
  const navigation = useNavigation();

  // Category
  const [isCategoryListVisible, setCategoryListVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    "Shirts",
    "Pants",
    "Dresses",
    "Skirts",
    "Sweaters",
    "Jackets and coats",
    "Shoes",
  ];

  const toggleCategoryListVisibility = () => {
    setCategoryListVisible(!isCategoryListVisible);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    toggleCategoryListVisibility();
  };

  // Style
  const [isStyleListVisible, setStyleListVisible] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const shirtStyles = [
    "Tops",
    "T-shirts",
    "Button-down shirts",
    "Tank tops",
    "Sports shirts",
    "Bodysuits",
  ];

  const toggleStyleListVisibility = () => {
    setStyleListVisible(!isStyleListVisible);
  };

  const handleStyleSelect = (style) => {
    setSelectedStyle(style);
    toggleStyleListVisibility();
  };

  // Sizes
  const [isSizesListVisible, setSizesListVisible] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const sizes = [
    "ONE SIZE",
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "34",
    "36",
    "38",
    "40",
    "42",
    "44",
  ];

  const toggleSizesListVisibility = () => {
    setSizesListVisible(!isSizesListVisible);
  };

  const handleSizesSelect = (size) => {
    const isSelected = selectedSizes.includes(size);

    if (isSelected) {
      // If the size is already selected, remove it from the list
      setSelectedSizes(
        selectedSizes.filter((selectedSizes) => selectedSizes !== size)
      );
    } else {
      // If the size is not selected, add it to the list
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  // Stores
  const [isStoresListVisible, setStoresListVisible] = useState(false);
  const [selectedStores, setSelectedStores] = useState([]);
  const stores = ["Renuar", "Castro", "Zara", "H&M"];

  const toggleStoresListVisibility = () => {
    setStoresListVisible(!isStoresListVisible);
  };

  const handleStoresSelect = (store) => {
    const isSelected = selectedStores.includes(store);

    if (isSelected) {
      // If the store is already selected, remove it from the list
      setSelectedStores(
        selectedStores.filter((selectedStores) => selectedStores !== store)
      );
    } else {
      // If the store is not selected, add it to the list
      setSelectedStores([...selectedStores, store]);
    }
  };

  return (
    <View style={styles.page}>
      <Text style={styles.title}>{"Search for an item you want"}</Text>

      {/* Category */}
      <View style={styles.container}>
        <TouchableOpacity
          onPress={toggleCategoryListVisibility}
          style={styles.button}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>{"Category"}</Text>
            <Image
              style={styles.buttonIcon}
              contentFit="cover"
              source={
                isCategoryListVisible
                  ? require("../../assets/expand-up.png")
                  : require("../../assets/expand-down.png")
              }
            />
          </View>
        </TouchableOpacity>
        <DropdownList
          data={categories}
          selectedItem={selectedCategory}
          onSelect={handleCategorySelect}
          isVisible={isCategoryListVisible}
        />
      </View>

      {/* Style */}
      <View style={styles.container}>
        <TouchableOpacity
          onPress={toggleStyleListVisibility}
          style={styles.button}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>{"Style"}</Text>
            <Image
              style={styles.buttonIcon}
              contentFit="cover"
              source={
                isStyleListVisible
                  ? require("../../assets/expand-up.png")
                  : require("../../assets/expand-down.png")
              }
            />
          </View>
        </TouchableOpacity>
        <DropdownList
          data={shirtStyles}
          selectedItem={selectedStyle}
          onSelect={handleStyleSelect}
          isVisible={isStyleListVisible}
        />
      </View>

      {/* Sizes */}
      <View style={styles.container}>
        <TouchableOpacity
          onPress={toggleSizesListVisibility}
          style={styles.button}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>{"Sizes"}</Text>
            <Image
              style={styles.buttonIcon}
              contentFit="cover"
              source={
                isSizesListVisible
                  ? require("../../assets/expand-up.png")
                  : require("../../assets/expand-down.png")
              }
            />
          </View>
        </TouchableOpacity>
        <MultipleDropdownList
          data={sizes}
          selectedItem={selectedSizes}
          onSelect={handleSizesSelect}
          isVisible={isSizesListVisible}
        />
      </View>

      {/* Stores */}
      <View style={styles.container}>
        <TouchableOpacity
          onPress={toggleStoresListVisibility}
          style={styles.button}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>{"Stores"}</Text>
            <Image
              style={styles.buttonIcon}
              contentFit="cover"
              source={
                isStoresListVisible
                  ? require("../../assets/expand-up.png")
                  : require("../../assets/expand-down.png")
              }
            />
          </View>
        </TouchableOpacity>
        <MultipleDropdownList
          data={stores}
          selectedItem={selectedStores}
          onSelect={handleStoresSelect}
          isVisible={isStoresListVisible}
        />
      </View>
    </View>
  );
};

export default ManualSearch;
