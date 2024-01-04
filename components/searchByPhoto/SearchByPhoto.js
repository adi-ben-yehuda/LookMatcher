import styles from "./SearchByPhoto.style";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

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

const SearchByPhoto = () => {
  const createToggleFunction = (setState, otherSetStates) => () => {
    // Close other lists
    otherSetStates.forEach((setOtherState) => setOtherState(false));

    // Toggle the visibility of the current list
    setState((prev) => !prev);
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

  const navigation = useNavigation();
  const searchPress = () => {
    navigation.navigate("Results");
  };

  return (
    <View style={styles.home}>
      <Text style={styles.title}>Did you saw an item you want?</Text>
      <Text style={styles.title2}>
        Take a picture to search for something similar
      </Text>

      <TouchableOpacity>
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

      <TouchableOpacity>
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

      <Text style={styles.title3}>And select the following details:</Text>

      <View>
        {/* Sizes */}
        <MultipleDropdownSelector
          title="Sizes"
          data={sizes}
          selectedItem={selectedSizes}
          onSelect={(size) => handleSizesSelect(size)}
          isVisible={isSizesListVisible}
          toggleVisibility={createToggleFunction(setSizesListVisible, [
            setStoresListVisible,
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
            setSizesListVisible,
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

export default SearchByPhoto;
