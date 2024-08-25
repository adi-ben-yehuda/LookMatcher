import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  Linking,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import styles from "./ItemImg.style";
import BackButton from "../backButton/BackButton";

const ItemCard = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { itemId } = route.params || { body: {} };
  const [loading, setLoading] = useState(false);
  const [itemDetails, setItemDetails] = useState({
    id: "",
    image: "",
    price: null,
    store: "",
    name: "",
    size: "",
    color: "",
    colors: [],
    images: [],
    url: "",
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    const newIndex =
      (currentImageIndex - 1 + itemDetails.images.length) %
      itemDetails.images.length;
    setCurrentImageIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentImageIndex + 1) % itemDetails.images.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    getItemDetails();
  }, []);

  useEffect(() => {}, [itemDetails]);

  const isColorCode = (color) => /^#([0-9A-F]{3}){1,2}$/i.test(color);

  const getItemDetails = async () => {
    setLoading(true);

    try {
      const res = await fetch("http://192.168.0.169:3000/api/ItemDetalis", {
        // const res = await fetch("http://192.168.1.245:3000/api/ItemDetalis", {
        // const res = await fetch("http://172.18.54.23:3000/api/ItemDetalis", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId }),
      });

      if (res.ok) {
        const body = await res.json();
        setItemDetails(body);
        // console.log("itemDetails", body);
        // if (body.color && body.color.length > 0) {
        //   console.log(
        //     "Color URL from first item in array:",
        //     itemDetails.colors[0]
        //   );
        // }
      } else if (res.status === 409) {
        // Handle conflict
      } else if (res.status === 400) {
        // Handle bad request
      } else {
        // Handle other errors
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false when search is complete
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.load}>
          <ActivityIndicator size="large" color="#43118C" />
          <Text style={{ color: "#43118C" }}>{"\n"} Loading...</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.first}>
          <View style={styles.title}>
            <Text style={styles.titleText}>{itemDetails.name}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: itemDetails.images?.[currentImageIndex] }}
            style={styles.image}
            resizeMode="contain" // Ensures the image fits within the container without being cropped
          />
        </View>

        {/* <TouchableOpacity style={[styles.back2]}>
          <Image
            style={[styles.back]}
            contentFit="cover"
            source={require("../../assets/icons/back2.png")}
          />
        </TouchableOpacity> */}

        {/* <TouchableOpacity style={[styles.heart]}>
          <Image
            style={[styles.heart]}
            contentFit="cover"
            source={require("../../assets/icons/heart-bar.png")}
          />
        </TouchableOpacity> */}

        <TouchableOpacity onPress={handlePrev} style={styles.buttonPrev}>
          <Image
            style={[styles.iconPrev]}
            resizeMode="cover"
            source={require("../../assets/icons/prev.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} style={styles.buttonNext}>
          <Image
            style={[styles.iconNext]}
            resizeMode="cover"
            source={require("../../assets/icons/next.png")}
          />
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.itemStore}>
          <Text style={styles.itemStoreText}>
            Store:{" "}
            {itemDetails.store === "Twentyfourseven"
              ? "Twenty Four Seven"
              : itemDetails.store === "Studiopasha"
              ? "Studio Pasha"
              : itemDetails.store}
          </Text>
        </View>

        <View style={styles.itemPrice}>
          <Text style={styles.itemPriceText}>Price: ₪ {itemDetails.price}</Text>
        </View>

        <View style={styles.itemColor}>
          <Text style={styles.itemColorText}>Color: {itemDetails.color}</Text>
        </View>

        <View style={styles.itemSize}>
          <Text style={styles.itemSizeText}>Size: {itemDetails.size}</Text>
        </View>

        <View style={styles.itemColor}>
          <Text style={styles.itemSizeText}>
            Available in Colors:
            {"\n"}
          </Text>
        </View>

        {itemDetails.colors && itemDetails.colors.length > 0 && (
          <View style={styles.colorsRow}>
            {itemDetails.colors.map((item, index) =>
              isColorCode(item) ? (
                <View
                  key={index}
                  style={[styles.colorRectangle, { backgroundColor: item }]}
                />
              ) : (
                <Image
                  key={index}
                  source={{ uri: item }}
                  style={styles.colorImage}
                />
              )
            )}
          </View>
        )}
      </View>
      <View style={styles.iconRow}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("map", { store: itemDetails.store })
          }
        >
          <Image
            source={require("../../assets/icons/loc2.png")} // Update the path to your icon
            style={styles.icon}
          />
        </TouchableOpacity>

        <View style={styles.marginIcon}>
          <TouchableOpacity onPress={() => Linking.openURL(itemDetails.url)}>
            <Image
              source={require("../../assets/icons/earth.png")} // Update the path to your icon
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <BackButton />
    </View>
  );
};

export default ItemCard;
