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
import { LinearGradient } from "expo-linear-gradient";

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

const TitleDropdown = ({ title, isVisible, toggleVisibility }) => (
  <TouchableOpacity onPress={toggleVisibility} style={styles.button}>
    <View style={styles.buttonContent}>
      <Text style={styles.buttonText}>{title}</Text>
      <Image
        style={styles.buttonIcon}
        contentFit="cover"
        source={
          isVisible
            ? require("../../assets/expand-up.png")
            : require("../../assets/expand-down.png")
        }
      />
    </View>
  </TouchableOpacity>
);

const DropdownSelector = ({
  title,
  data,
  selectedItem,
  onSelect,
  isVisible,
  toggleVisibility,
}) => (
  <View style={styles.container}>
    <TitleDropdown
      title={title}
      isVisible={isVisible}
      toggleVisibility={toggleVisibility}
    ></TitleDropdown>
    <DropdownList
      data={data}
      selectedItem={selectedItem}
      onSelect={onSelect}
      isVisible={isVisible}
    />
  </View>
);

const MultipleDropdownSelector = ({
  title,
  data,
  selectedItem,
  onSelect,
  isVisible,
  toggleVisibility,
}) => (
  <View style={styles.container}>
    <TitleDropdown
      title={title}
      isVisible={isVisible}
      toggleVisibility={toggleVisibility}
    ></TitleDropdown>
    <MultipleDropdownList
      data={data}
      selectedItem={selectedItem}
      onSelect={onSelect}
      isVisible={isVisible}
    />
  </View>
);

const ManualSearch = () => {
  const navigation = useNavigation();

  const createToggleFunction = (setState) => () => {
    setState((prev) => !prev);
  };

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

  // Colors
  const [isColorsListVisible, setColorsListVisible] = useState(false);
  const [selectedColors, setSelectedColors] = useState([]);

  const searchPress = () => {
    navigation.navigate("ItemPage");
  };

  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>{"Search for an item you want"}</Text>
        <ScrollView>
          {/* Category */}
          <DropdownSelector
            title="Category"
            data={categories}
            selectedItem={selectedCategory}
            onSelect={setSelectedCategory}
            isVisible={isCategoryListVisible}
            toggleVisibility={createToggleFunction(setCategoryListVisible)}
          />

          {/* Style */}
          <DropdownSelector
            title="Style"
            data={shirtStyles}
            selectedItem={selectedStyle}
            onSelect={setSelectedStyle}
            isVisible={isStyleListVisible}
            toggleVisibility={createToggleFunction(setStyleListVisible)}
          />

          {/* Sizes */}
          <MultipleDropdownSelector
            title="Sizes"
            data={sizes}
            selectedItem={selectedSizes}
            onSelect={(size) => handleSizesSelect(size)}
            isVisible={isSizesListVisible}
            toggleVisibility={createToggleFunction(setSizesListVisible)}
          />

          {/* Stores */}
          <MultipleDropdownSelector
            title="Stores"
            data={stores}
            selectedItem={selectedStores}
            onSelect={(store) => handleStoresSelect(store)}
            isVisible={isStoresListVisible}
            toggleVisibility={createToggleFunction(setStoresListVisible)}
          />
        </ScrollView>

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
      </ScrollView>
    </View>
  );
};

export default ManualSearch;
