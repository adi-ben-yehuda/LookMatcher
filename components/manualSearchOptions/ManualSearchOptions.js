import * as React from "react";
import styles from "./ManualSearchOptions.style";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const ManualSearch = () => {
  const navigation = useNavigation();

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

  const [isStoresListVisible, setStoresListVisible] = useState(false);
  const [selectedStores, setSelectedStores] = useState([]);
  const stores = ["Renuar", "Castro", "Zara", "H&M"];

  const toggleStoresListVisibility = () => {
    setStoresListVisible(!isStoresListVisible);
  };

  const handleStoresSelect = (store) => {
    const isSelected = selectedStores.includes(store);

    if (isSelected) {
      // If the style is already selected, remove it from the list
      setSelectedStores(
        selectedStores.filter((selectedStores) => selectedStores !== store)
      );
    } else {
      // If the style is not selected, add it to the list
      setSelectedStores([...selectedStores, store]);
    }
  };

  return (
    <View style={styles.page}>
      <Text style={styles.title}>{"Search for an item you want"}</Text>

      <View style={styles.container}>
        <TouchableOpacity
          onPress={toggleCategoryListVisibility}
          style={styles.button}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>
              {selectedCategory || "Category"}
            </Text>
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
        {isCategoryListVisible && (
          <View style={styles.listContainer}>
            <FlatList
              data={categories}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.option,
                    selectedCategory === item && styles.selectedOption,
                  ]}
                  onPress={() => handleCategorySelect(item)}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          onPress={toggleStyleListVisibility}
          style={styles.button}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>{selectedStyle || "Style"}</Text>
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
        {isStyleListVisible && (
          <View style={styles.listContainer}>
            <FlatList
              data={shirtStyles}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.option,
                    selectedStyle === item && styles.selectedOption,
                  ]}
                  onPress={() => handleStyleSelect(item)}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </View>

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
        {isStoresListVisible && (
          <View style={styles.listContainer}>
            <FlatList
              data={stores}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.option,
                    selectedStores === item && styles.selectedOption,
                  ]}
                  onPress={() => handleStoresSelect(item)}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default ManualSearch;
