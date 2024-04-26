import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import styles from "./ItemImg.style";

const imagePaths = [
  require("../../assets/icons/images/fffff.jpg"),
  require("../../assets/icons/images/item2.png"),
  require("../../assets/icons/images/item3.png"),
];

const ItemCard = () => {
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

        <TouchableOpacity style={[styles.back2]}>
          <Image
            style={[styles.back]}
            contentFit="cover"
            source={require("../../assets/icons/back2.png")}
          />
        </TouchableOpacity>

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
          <Text style={styles.itemNameText}>Your Item Name</Text>
        </View>

        <View style={styles.itemPrice}>
          <Text style={styles.itemPriceText}>Price: ₪ 80</Text>
        </View>

        <View style={styles.itemColor}>
          <Text style={styles.itemColorText}>Color: Pink</Text>
        </View>

        <View style={styles.itemSize}>
          <Text style={styles.itemSizeText}>Size: M</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemCard;
