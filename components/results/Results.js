import React, { useState, useEffect, useContext } from "react";
import { Text, FlatList, View, TouchableOpacity } from "react-native";
import styles from "./Results.style";
import { Image } from "expo-image";
import UsersContext from "../../context/userContext";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const Results = () => {
  const route = useRoute();
  const { body } = route.params || { body: {} };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [results, setResults] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const { token, user } = useContext(UsersContext);
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.goBack();
  };
  useEffect(() => {
    setResults(body);
  }, [body]);

  // Maintain individual icon sources for each item
  const [iconSources, setIconSources] = useState({
    "Price: low to high": require("../../assets/component-1661.png"),
    "Price: High To Low": require("../../assets/component-1661.png"),
    "Distance: near to far": require("../../assets/component-1661.png"),
    "Distance: far to near": require("../../assets/component-1661.png"),
  });

  const renderHeader = () => (
    <View>
      <Text style={styles.headline}>Search Results</Text>
      <TouchableOpacity style={styles.back} onPress={handleBackButtonPress}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../assets/icons/prev.png")}
        />
      </TouchableOpacity>
      <View
        style={[styles.sort, styles.stateLayerFlexBox]}
        onTouchEnd={handleSortByClick}
      >
        <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
          <Text style={styles.sortText}>{selectedItem || "Sort By"}</Text>
          <Image
            style={styles.arrow}
            contentFit="cover"
            source={require("../../assets/icons/filter.png")}
          />
        </View>
      </View>
    </View>
  );

  const ItemCard = ({ item }) => {
    const [isFavorite, setIsFavorite] = useState(wishlist.includes(item.id));

    if (!item || item.id === "empty-item") {
      return <View style={styles.emptyItem} />;
    }

    const toggleFavorite = async (itemId) => {
      const isCurrentlyFavorite = isFavorite;
      setIsFavorite(!isFavorite);
      try {
        const action = isCurrentlyFavorite ? "remove" : "add";

        const res = await fetch("http://192.168.56.1:3000/api/updateWishlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + token,
          },
          body: JSON.stringify({ itemId, action }),
        });

        if (res.ok) {
        } else {
          throw new Error("Failed to update wishlist");
        }
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <View style={styles.cardContainer}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <TouchableOpacity
          onPress={() => toggleFavorite(item.id)}
          style={styles.favoriteIcon}
        >
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
        <Text style={styles.itemCompany}>{`Store: ${item.company}`}</Text>
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

  const getWishlist = async () => {
    try {
      const resWishlist = await fetch(
        "http://192.168.56.1:3000/api/getWishlist",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: "Bearer " + token,
          },
        }
      );
      if (resWishlist.ok) {
        console.log("resWishlist.ok");
        const bodyWishlist = await resWishlist.json();
        setWishlist(bodyWishlist.wishlist);
        console.log(wishlist);
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
  //  getWishlist();
  // useEffect(() => {
  //   getWishlist();
  // }, []);

  return (
    <View style={styles.container}>
      {!results.length > 0 && (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResults}>
            No results found{"\n"}     search again
          </Text>
          <TouchableOpacity style={styles.back} onPress={handleBackButtonPress}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../../assets/icons/prev.png")}
            />
          </TouchableOpacity>
        </View>
      )}
      {results.length > 0 && (
        <FlatList
          data={
            results.length % 2 === 0
              ? results
              : [...results, { id: "empty-item" }]
          }
          ListHeaderComponent={renderHeader}
          renderItem={({ item, index, separators }) => {
            if (item.id === "empty-item") {
              return <View style={{ flex: 1 }} />;
            } else {
              const isLastItem =
                index === results.length && results.length % 2 === 1;
              return (
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <ItemCard item={item} />
                  {isLastItem && <View style={{ flex: 0.5 }} />}
                </View>
              );
            }
          }}
          keyExtractor={(item) =>
            item.id ? item.id.toString() : Math.random().toString()
          }
          numColumns={2}
        />
      )}

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
          {/* <Image
            style={styles.scrollBarIcon}
            contentFit="cover"
            source={require("../../assets/scroll-bar.png")}
          /> */}
        </View>
      )}
    </View>
  );
};

export default Results;
