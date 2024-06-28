import React, { useState, useContext, useEffect, useRef } from "react";
import { Text, View, FlatList, TouchableOpacity, Image, Dimensions, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import UsersContext from "../../context/userContext";
import styles from "./Wishlist.style";
import { ScreenHeight } from "react-native-elements/dist/helpers";

const screenWidth = Dimensions.get("window").width;

const Wishlist = () => {
  const [results, setResults] = useState([]);
  const { token } = useContext(UsersContext);
  const flatListRef = useRef(null);

  const handleMakeMePress = () => {};
  const handleMakeYourselfPress = () => {};

  const scrollToStart = () => {
    flatListRef.current.scrollToOffset({ offset: 0, animated: true });
  };

  const scrollToEnd = () => {
    flatListRef.current.scrollToEnd({ animated: true });
  };

  const ItemCard = ({ item }) => {
    const [isFavorite, setIsFavorite] = useState(true);

    const toggleFavorite = async (itemId) => {
      const isCurrentlyFavorite = isFavorite;
      setIsFavorite(!isFavorite);
      try {
        const action = isCurrentlyFavorite ? "remove" : "add";
        
        const res = await fetch("http://192.168.1.109:3000/api/updateWishlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + token,
          },
          body: JSON.stringify({ itemId, action }),
        });

        if (!res.ok) {
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
        <Text style={styles.itemCompany}>{`Company: ${item.company}`}</Text>
      </View>
    );
  };

  const getResults = async () => {
    try {
      const res = await fetch("http://192.168.1.109:3000/api/wishlistPage", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: "Bearer " + token,
        },
      });

      if (res.ok) {
        const body = await res.json();
        setResults(body.items);
      } else {
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
      <View style={styles.container}>
        {!results.length > 0 && (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResults}>
              Nothing saved{"\n"}
            </Text>
          </View>
        )}
        {results.length > 0 && (
          <View style={styles.horizontalListContainer}>
            <TouchableOpacity onPress={scrollToStart} style={styles.scrollButton}>
              <Icon name="arrow-back" style={styles.scrollButtonText} />
            </TouchableOpacity>
            <FlatList
              ref={flatListRef}
              horizontal
              data={results}
              renderItem={({ item }) => <ItemCard item={item} />}
              keyExtractor={(item) => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListContentContainer}
            />
            <TouchableOpacity onPress={scrollToEnd} style={styles.scrollButton}>
              <Icon name="arrow-forward" size={24} style={styles.scrollButtonText} />
            </TouchableOpacity>
          </View>

          
        )}
      </View>
    </View>
  );
};


export default Wishlist;