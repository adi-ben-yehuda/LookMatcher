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
    navigation.navigate("ItemPage", { itemId }); // Navigate and pass itemId
  };
  const scrollToStart = () => {
    flatListRef.current.scrollToOffset({ offset: 0, animated: true });
  };

  const scrollToEnd = () => {
    flatListRef.current.scrollToEnd({ animated: true });
  };

  const ItemCard = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => navigateToDetailPage(item._id)}
      >
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{`Price: ${item.price} ₪`}</Text>
        <Text style={styles.itemCompany}>
          {" "}
          {`Company: ${
            item.store.name === "Studiopasha"
              ? "Studio Pasha"
              : item.store.name === "Twentyfourseven"
              ? "Twenty Four Seven"
              : item.store.name
          }`}
        </Text>
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
            <Text style={styles.noResults}>
              Add your favorites to get{"\n"}personalized suggestions!{"\n"}
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
