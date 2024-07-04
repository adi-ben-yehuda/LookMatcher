import React, { useState, useContext, useEffect } from "react";
import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./Wishlist.style";
import UsersContext from "../../context/userContext";
import { useNavigation } from "@react-navigation/native";

const Wishlist = () => {
  const [results, setResults] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const { token, user } = useContext(UsersContext);

  const navigation = useNavigation();
  const navigateToDetailPage = (itemId) => {
    console.log("Navigating to ItemPage with itemId:", itemId); // Print itemId
    navigation.navigate("ItemPage", { itemId }); // Navigate and pass itemId
};

  const ItemCard = ({ item }) => {
    const [isFavorite, setIsFavorite] = useState(true);

    const toggleFavorite = async (itemId) => {
      const isCurrentlyFavorite = isFavorite;
      setIsFavorite(!isFavorite);
      try {
        const action = isCurrentlyFavorite ? "remove" : "add";

        const res = await fetch(
          
          "http://192.168.1.109:3000/api/updateWishlist",
          {
            // const res = await fetch("http://192.168.233.245:3000/api/updateWishlist", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: "Bearer " + token,
            },
            body: JSON.stringify({ itemId, action }),
          }
        );

        if (res.ok) {
        } else {
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
        </TouchableOpacity>

    );
  };

  const getResults = async () => {
    try {
      const res = await fetch("http://192.168.1.109:3000/api/wishlistPage", {
        // const res = await fetch("http://192.168.233.245:3000/api/wishlistPage", {
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

        console.log("in wish list page ", results);
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
      <View style={styles.container}>
        {!results.length > 0 && (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResults}>Nothing saved{"\n"}</Text>
          </View>
        )}
        {results.length > 0 && (
          <FlatList
            data={
              results.length % 2 === 0
                ? results
                : [...results, { id: "empty-item" }]
            }
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
      </View>

      {/* <View style={styles.buttons}>
        <TouchableOpacity onPress={handleMakeMePress}>
          <LinearGradient
            style={[styles.makeMe, styles.makeLayout]}
            locations={[0, 1]}
            colors={["#29085f", "#b941d7"]}
          >
            <View style={[styles.makeAnOutfitWrapper, styles.makePosition]}>
              <Text style={[styles.makeAnContainer, styles.makePosition]}>
                {"Make me\nan outfit"}
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMakeYourselfPress}>
          <LinearGradient
            style={[styles.makeYourself, styles.makeLayout]}
            locations={[0, 1]}
            colors={["#29085f", "#b941d7"]}
          >
            <View style={[styles.makeAnOutfitWrapper, styles.makePosition]}>
              <Text style={[styles.makeAnContainer, styles.makePosition]}>
                Make yourself an outfit
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Wishlist;
