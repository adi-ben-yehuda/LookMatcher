import * as React from "react";
import styles from "./ManualSearchOptions.style";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const categorySizesMap = {
  Shirts: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL",
    "32",
    "34",
    "36",
    "38",
    "40",
    "42",
    "44",
    "46",
    "48",
  ],
  Pants: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL",
    "32",
    "34",
    "36",
    "38",
    "40",
    "42",
    "44",
    "46",
    "48",
  ],
  Jeans: ["32", "34", "36", "38", "40", "42", "44", "46", "48"],
  Shorts: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL",
    "32",
    "34",
    "36",
    "38",
    "40",
    "42",
    "44",
    "46",
    "48",
  ],
  Dresses: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL",
    "32",
    "34",
    "36",
    "38",
    "40",
    "42",
    "44",
    "46",
    "48",
  ],
  Skirts: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL",
    "32",
    "34",
    "36",
    "38",
    "40",
    "42",
    "44",
    "46",
    "48",
  ],
  Sweaters: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL",
    "32",
    "34",
    "36",
    "38",
    "40",
    "42",
    "44",
    "46",
    "48",
  ],
  Jackets_and_coats: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL",
    "32",
    "34",
    "36",
    "38",
    "40",
    "42",
    "44",
    "46",
    "48",
  ],
  Sweatshirts: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL",
    "32",
    "34",
    "36",
    "38",
    "40",
    "42",
    "44",
    "46",
    "48",
  ],
  Shoes: [
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
  ],
};

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
      onSelect={(item) => {
        onSelect(item);
        toggleVisibility();
      }}
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

const ColorDropdownSelector = ({
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
    <ColorList
      data={data}
      onSelect={onSelect}
      selectedColors={selectedItem}
      isVisible={isVisible}
    />
  </View>
);

const ColorList = ({ data, selectedColors, onSelect, isVisible }) => (
  <View style={isVisible ? styles.colorListContainer : { display: "none" }}>
    <FlatList
      data={data}
      keyExtractor={(item) => item}
      numColumns={5}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSelect(item)}>
          <View
            style={[
              styles.colorCircle,
              selectedColors.includes(item) && styles.selectedColorCircle,
              { backgroundColor: item },
            ]}
          />
        </TouchableOpacity>
      )}
    />
  </View>
);

const ManualSearch = () => {
  const navigation = useNavigation();

  //handele selected choices
  const [selectedChoices, setSelectedChoices] = useState({
    gender: null,
    category: null,
    sizes: [],
    stores: [],
    colors: [],
  });

  const createToggleFunction = (setState, otherSetStates) => () => {
    // Close other lists
    otherSetStates.forEach((setOtherState) => setOtherState(false));

    // Toggle the visibility of the current list
    setState((prev) => !prev);
  };

  // Category
  const [isCategoryListVisible, setCategoryListVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    "Shirts",
    "Pants",
    "Jeans",
    "Shorts",
    "Dresses",
    "Skirts",
    "Sweaters",
    "Jackets and coats",
    "Sweatshirts",
    "Shoes",
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedChoices((prev) => ({ ...prev, category }));
  };

  // gender
  const [isStyleListVisible, setStyleListVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState(null);
  const gender = ["men", "women"];

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setSelectedChoices((prev) => ({ ...prev, gender }));
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

  const handleSizesSelect = (size) => {
    const isSelected = selectedSizes.includes(size);
    setSelectedSizes((prevSizes) =>
      isSelected
        ? prevSizes.filter((selectedSize) => selectedSize !== size)
        : [...prevSizes, size]
    );
    setSelectedChoices((prev) => ({ ...prev, sizes: [...prev.sizes, size] }));
  };

  // Stores
  const [isStoresListVisible, setStoresListVisible] = useState(false);
  const [selectedStores, setSelectedStores] = useState([]);
  const stores = [
    "Castro",
    "FashionClub",
    "Golf",
    "H&O",
    "Hoodies",
    "Tamnoon",
    "Renuar",
    "Urbanica",
  ];

  const handleStoresSelect = (store) => {
    const isSelected = selectedStores.includes(store);
    setSelectedStores((prevStores) =>
      isSelected
        ? prevStores.filter((selectedStore) => selectedStore !== store)
        : [...prevStores, store]
    );
    setSelectedChoices((prev) => ({
      ...prev,
      stores: [...prev.stores, store],
    }));
  };

  // Colors
  const [isColorsListVisible, setColorsListVisible] = useState(false);
  const [selectedColors, setSelectedColors] = useState([]);
  const colors = [
    "#ff9ccc", // pink
    "#FF0000", // red
    "#940202", // dark red
    "#8f6038", // brown
    "#fa7e3c", // orange
    "#fef200", // Yellow
    "#ffffff", // white
    "#292929", // black
    "#9031b0", // purple
    "#234da0", // blue
    "#49e2ff", // light blue
    "#999999", // gray
    "#4a8157", // green
  ];

  const handleColorsSelect = (color) => {
    const isSelected = selectedColors.includes(color);
    setSelectedColors((prevColors) =>
      isSelected
        ? prevColors.filter((selectedColor) => selectedColor !== color)
        : [...prevColors, color]
    );
    setSelectedChoices((prev) => ({
      ...prev,
      colors: isSelected
        ? prev.colors.filter((selectedColor) => selectedColor !== color)
        : [...prev.colors, color],
    }));
  };


    
  const searchPress = async () => {

    const selectedSizes = selectedChoices.sizes;
    const selectedStores = selectedChoices.stores;
    const selectedColors = selectedChoices.colors;
    const selectedGender = selectedChoices.gender;
    const selectedCategory = selectedChoices.category;

    console.log(
      "Selected Sizes for Current Category:",
      selectedSizes
    );
    console.log("Selected Stores:", selectedStores);
    console.log("Selected Colors:", selectedColors);
    console.log("Selected Gender:", selectedGender);
    console.log("Selected Category:", selectedCategory);

    const search = {
      gender: selectedGender,
      category: selectedCategory,
      color: selectedColors,
      size: selectedSizes,
      store: selectedStores,
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
        navigation.navigate("Results", { selectedChoices });
      } else if (res.status === 409) {
        
      } else if (res.status === 400) {
       
      } else {
        //throw new Error("Failed to add user");
      }
    } catch (error) {
      console.error(error);
    }
  };
   

    
  

  return (
    <View style={styles.page}>
      <Text style={styles.title}>{"Search for an item you want"}</Text>
      <View>
        {/* gender */}
        <DropdownSelector
          title={selectedGender || "Gender"}
          data={gender}
          selectedItem={selectedGender}
          onSelect={handleGenderSelect}
          isVisible={isStyleListVisible}
          toggleVisibility={createToggleFunction(setStyleListVisible, [
            setCategoryListVisible,
            setSizesListVisible,
            setStoresListVisible,
            setColorsListVisible,
          ])}
        />

        {/* Category */}
        <DropdownSelector
          title={selectedCategory || "Category"}
          data={categories}
          selectedItem={selectedCategory}
          onSelect={(category) => {
            handleCategorySelect(category);
            setSizesListVisible(true);
          }}
          isVisible={isCategoryListVisible}
          toggleVisibility={createToggleFunction(setCategoryListVisible, [
            setStyleListVisible,
            setSizesListVisible,
            setStoresListVisible,
            setColorsListVisible,
          ])}
        />

        {/* Color */}
        <ColorDropdownSelector
  title="Colors"
  data={colors}
  selectedItem={selectedColors}
  isVisible={isColorsListVisible}
  onSelect={(color) => handleColorsSelect(color)} // Use handleColorsSelect here
  toggleVisibility={createToggleFunction(setColorsListVisible, [
    setCategoryListVisible,
    setStyleListVisible,
    setSizesListVisible,
    setStoresListVisible,
  ])}
/>

        {/* Sizes */}
        <MultipleDropdownSelector
          title="Sizes"
          data={categorySizesMap[selectedCategory] || []}
          selectedItem={selectedSizes}
          onSelect={(size) => handleSizesSelect(size)}
          isVisible={isSizesListVisible}
          toggleVisibility={createToggleFunction(setSizesListVisible, [
            setCategoryListVisible,
            setStyleListVisible,
            setStoresListVisible,
            setColorsListVisible,
          ])}
        />

        {/* Stores */}
        <MultipleDropdownSelector
          title="Stores"
          data={stores}
          selectedItem={selectedStores}
          onSelect={(store) => handleStoresSelect(store)}
          isVisible={isStoresListVisible}
          toggleVisibility={createToggleFunction(setStoresListVisible, [
            setCategoryListVisible,
            setStyleListVisible,
            setSizesListVisible,
            setColorsListVisible,
          ])}
        />
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
    </View>
  );
};

export default ManualSearch;
