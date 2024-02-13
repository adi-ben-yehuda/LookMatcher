import React, { useState, useEffect } from "react";
import { Text, StyleSheet, FlatList, View, TouchableOpacity } from "react-native";
import styles from "./Results.style";
import { Image } from "expo-image";

const Results = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [results, setResults] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  // Maintain individual icon sources for each item
  const [iconSources, setIconSources] = useState({
    "Price: low to high": require("../../assets/component-1661.png"),
    "Price: High To Low": require("../../assets/component-1661.png"),
    "Distance: near to far": require("../../assets/component-1661.png"),
    "Distance: far to near": require("../../assets/component-1661.png"),
  });

  const ItemCard = ({ item }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
      setIsFavorite(!isFavorite);
    };

    return (
      <View style={styles.cardContainer}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteIcon}>
          <Image
            source={
              isFavorite
                ? require("../../assets/favorite-light1.png")
                : require("../../assets/favorite-light2.png")
            }
            style={styles.favoriteImage}
          />
        </TouchableOpacity>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{`Price: ${item.price} ₪`}</Text>
        <Text style={styles.itemCompany}>{`Company: ${item.company}`}</Text>
      </View>
    );
  };

  const handleSortByClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = (item) => {
    setSelectedItem(item);

    // Update the selected item's icon and reset others to the default
    setIconSources((prevIconSources) => {
      const updatedIconSources = {};
      for (const key in prevIconSources) {
        updatedIconSources[key] =
          key === item
            ? require("../../assets/component-166.png")
            : require("../../assets/component-1661.png");
      }
      return updatedIconSources;
    });

    setIsDropdownOpen(false);


    // Sort the results based on the selected item
    if (item === "Price: low to high") {
      setResults([...results].sort((a, b) => a.price - b.price));
    } else if (item === "Price: High To Low") {
      setResults([...results].sort((a, b) => b.price - a.price));
    }
  };

  const getResults = async () => {

    try {
      const res = await fetch("http://192.168.56.1:3000/api/SearchResults", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const body = await res.json();
        setResults(body);
        console.log(body);
      }
      // else if (res.status === 409) {
      //   const body = await res.json();
      //   const errorMsg = body.error;
      //   setErrorMsg(errorMsg);
      //   setError(true);
      // } else if (res.status === 400) {
      //   const body = await res.json();
      //   const errorMsg = body.error;
      //   setErrorMsg(errorMsg);
      //   setError(true);
      // } 
      else {
        throw new Error("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <View style={[styles.results, styles.resultsLayout]}>
      <Text style={styles.headline}>Button-down shirts</Text>

      <View style={styles.container}>
        <FlatList
          data={results}
          renderItem={({ item }) => <ItemCard item={item} />}
          keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}
          numColumns={2}
        />
      </View>

      <View
        style={[styles.sort, styles.stateLayerFlexBox]}
        onTouchEnd={handleSortByClick}
      >
        <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
          <Text style={styles.sortText}>{selectedItem || "Sort By"}</Text>
          <Image
            style={styles.arrow}
            contentFit="cover"
            source={require("../../assets/icon.png")}
          />
        </View>
      </View>

      {isDropdownOpen && (
        <View style={styles.dropDownList}>
          <View style={[styles.list2DensityDark, styles.listLayout]}>
            <View style={[styles.listLayout]}>
              <View style={[styles.buildingPosition]} />
              <View style={[styles.divider, styles.dividerLayout]} />
            </View>
            <View style={[styles.listLayout]}>
              <View style={[styles.buildingPosition]} />
              <View style={[styles.horizontalFlexBox]}>
                <View style={[styles.divider, styles.dividerLayout]} />
              </View>
            </View>
            <View style={[styles.listLayout]}>
              <View style={[styles.buildingPosition]} />
              <View style={[styles.horizontalFlexBox]}>
                <View style={[styles.divider, styles.dividerLayout]} />
              </View>
            </View>
            <View style={[styles.listItemlistItem2Densit3, styles.listLayout]}>
              <View style={[, styles.buildingPosition]} />
              <View style={[styles.horizontalFlexBox]}>
                <View style={[styles.divider, styles.dividerLayout]} />
              </View>
            </View>
            <View
              style={[
                styles.listItemlistItem2Densit4,
                styles.listLayout,
                selectedItem === "Price: low to high" &&
                styles.buildingBlocksstateLayerDaItem,
              ]}
              onTouchEnd={() => handleDropdownItemClick("Price: low to high")}
            >
              <View style={[styles.buildingPosition]}>
                <View
                  style={[
                    styles.buildingBlocksstateLayerDaChild,
                    styles.buildingPosition,
                  ]}
                />
              </View>
              <View style={[styles.stateLayer1, styles.contentFlexBox]}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={iconSources["Price: low to high"]}
                />
                <View style={[styles.content, styles.contentFlexBox]}>
                  <Text style={[styles.headline4, styles.headlineTypo]}>
                    {" "}
                    Price: from low to high{" "}
                  </Text>
                </View>
              </View>
              <View style={styles.horizontalFlexBox}>
                <View style={[styles.divider, styles.dividerLayout]} />
              </View>
            </View>
            <View
              style={[
                styles.listItemlistItem2Densit5,
                styles.listLayout,
                selectedItem === "HighTolow" &&
                styles.buildingBlocksstateLayerDaItem,
              ]}
              onTouchEnd={() => handleDropdownItemClick("Price: High To Low")}
            >
              <View style={[styles.buildingPosition]}>
                <View style={[styles.buildingPosition]} />
              </View>
              <View style={[styles.stateLayer1, styles.contentFlexBox]}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={iconSources["Price: High To Low"]}
                />
                <View style={[styles.content, styles.contentFlexBox]}>
                  <Text style={[styles.headline4, styles.headlineTypo]}>
                    {" "}
                    Price: from high to low{" "}
                  </Text>
                </View>
              </View>
              <View style={styles.horizontalFlexBox}>
                <View style={[styles.divider, styles.dividerLayout]} />
              </View>
            </View>
            <View
              style={[
                styles.listItemlistItem2Densit6,
                styles.listLayout,
                selectedItem === "Distance: near to far" &&
                styles.buildingBlocksstateLayerDaItem,
              ]}
              onTouchEnd={() =>
                handleDropdownItemClick("Distance: near to far")
              }
            >
              <View style={[styles.buildingPosition]}>
                <View
                  style={[
                    styles.buildingBlocksstateLayerDaItem,
                    styles.buildingPosition,
                  ]}
                />
              </View>
              <View style={[styles.stateLayer1, styles.contentFlexBox]}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={iconSources["Distance: near to far"]}
                />
                <View style={[styles.content, styles.contentFlexBox]}>
                  <Text style={[styles.headline4, styles.headlineTypo]}>
                    {" "}
                    Distance: from near to far{" "}
                  </Text>
                </View>
              </View>
              <View style={styles.horizontalFlexBox}>
                <View style={[styles.divider, styles.dividerLayout]} />
              </View>
            </View>
            <View
              style={[
                styles.listItemlistItem2Densit7,
                styles.listLayout,
                selectedItem === "Distance: far to near" && styles.building,
              ]}
              onTouchEnd={() =>
                handleDropdownItemClick("Distance: far to near")
              }
            >
              <View style={[styles.buildingPosition]}>
                <View
                  style={[
                    styles.buildingBlocksstateLayerDaItem,
                    styles.buildingPosition,
                  ]}
                />
              </View>
              <View style={[styles.stateLayer1, styles.contentFlexBox]}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={iconSources["Distance: far to near"]}
                />
                <View style={[styles.content, styles.contentFlexBox]}>
                  <Text style={[styles.headline4, styles.headlineTypo]}>
                    {" "}
                    Distance: from far to near{" "}
                  </Text>
                </View>
              </View>
              <View style={styles.horizontalFlexBox}>
                <View style={[styles.divider, styles.dividerLayout]} />
              </View>
            </View>
          </View>
          <Image
            style={styles.scrollBarIcon}
            contentFit="cover"
            source={require("../../assets/scroll-bar.png")}
          />
        </View>
      )}
    </View>
  );
};

export default Results;
