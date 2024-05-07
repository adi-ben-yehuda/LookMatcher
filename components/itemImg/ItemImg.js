import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./ItemImg.style";


const imagePaths = [
  require("../../assets/icons/images/fffff.jpg"),
  require("../../assets/icons/images/item2.png"),
  require("../../assets/icons/images/item3.png"),
];

const ItemCard = () => {
  const route = useRoute();
  const { itemId } = route.params || { body: {} };
  
  const [itemDetails, setItemDetails] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    const newIndex =
      (currentImageIndex - 1 + imagePaths.length) % imagePaths.length;
    setCurrentImageIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentImageIndex + 1) % imagePaths.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    getItemDetails();
  }, []);


  const getItemDetails = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/ItemDetalis", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({itemId}),
      });

      if (res.ok) {
        const body = await res.json();
        setItemDetails(body);
        console.log("itemDetails", body);
      } else if (res.status === 409) {
        // Handle conflict
      } else if (res.status === 400) {
        // Handle bad request
      } else {
        // Handle other errors
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.card}>
          <Image
            source={imagePaths[currentImageIndex]}
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

        <TouchableOpacity style={[styles.heart]}>
          <Image
            style={[styles.heart]}
            contentFit="cover"
            source={require("../../assets/icons/heart-bar.png")}
          />
        </TouchableOpacity>

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
        <View style={styles.itemName}>
          <Text style={styles.itemNameText}>{itemDetails.name}</Text>
        </View>

        <View style={styles.itemStore}>
          <Text style={styles.itemStoreText}>Store: {itemDetails.store}</Text>
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
      </View>
    </View>
  );
};

export default ItemCard;
