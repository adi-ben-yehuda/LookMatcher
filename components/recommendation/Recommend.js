import React, { useState, useContext, useEffect, useRef } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import UsersContext from "../../context/userContext";
import styles from "./Recommend.style";
import { useNavigation } from "@react-navigation/native";

const Recommendation = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const { token } = useContext(UsersContext);
  const flatListRef = useRef(null);
  const navigation = useNavigation();
  const navigateToDetailPage = (itemId) => {
    console.log("Navigating to ItemPage with itemId:", itemId); // Print itemId
    navigation.navigate("ItemPage", { itemId }); // Navigate and pass itemId
  };
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
        const action = isCurrentlyFavorite ? "add" : "remove";
        console.log(item._id);
        const res = await fetch(
          "http://192.168.1.109:3000/api/updateWishlist",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: "Bearer " + token,
            },
            body: JSON.stringify({ itemId, action }),
          }
        );

        if (!res.ok) {
          throw new Error("Failed to update wishlist");
        }
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => navigateToDetailPage(item.id)}
      >
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <TouchableOpacity
          onPress={() => toggleFavorite(item._id)}
          style={styles.favoriteIcon}
        >
          <Image
            source={
              isFavorite
                ? require("../../assets/favorite-light2.png")
                : require("../../assets/favorite-light1.png")
            }
            style={styles.favoriteImage}
          />
        </TouchableOpacity>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{`Price: ${item.price} ₪`}</Text>
        <Text style={styles.itemCompany}>{`Company: ${item.store}`}</Text>
      </TouchableOpacity>
    );
  };

  const triggerPythonScript = async () => {
    try {
      const res = await fetch("http://192.168.1.109:3000/api/recommendations", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: "Bearer " + token,
        },
      });

      if (res.ok) {
        const body = await res.json();
        setResults(body.similar_items);
      } else {
        throw new Error("Failed to trigger Python script");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    triggerPythonScript();
  }, []);

  if (loading) {
    return (
      <View style={styles.container2}>
        <View style={styles.load}>
          <ActivityIndicator size="large" color="#43118C" />
          <Text style={{ color: "#43118C" }}>{"\n"} Loading...</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.results, styles.resultsLayout]}>
      <View style={styles.container}>
        {!results.length > 0 && (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResults}>No Suggestions{"\n"}</Text>
            <Text style={styles.noResults}>
              Add items to your wishlist first{"\n"}
            </Text>
          </View>
        )}
        {results.length > 0 && (
          <View style={styles.horizontalListContainer}>
            <TouchableOpacity
              onPress={scrollToStart}
              style={styles.scrollButton}
            >
              <Icon name="arrow-back" style={styles.scrollButtonText} />
            </TouchableOpacity>
            <FlatList
              ref={flatListRef}
              horizontal
              data={results}
              renderItem={({ item }) => <ItemCard item={item} />}
              keyExtractor={(item) => item._id.toString()}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListContentContainer}
            />
            <TouchableOpacity onPress={scrollToEnd} style={styles.scrollButton}>
              <Icon
                name="arrow-forward"
                size={24}
                style={styles.scrollButtonText}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Recommendation;
