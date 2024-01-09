import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./ItemImg.style";

const imagePaths = [
  require("../../assets/images/Item.png"),
  require("../../assets/images/item2.png"),
  require("../../assets/images/item3.png"),
  // Add more image paths as needed
];

const ItemText = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    const newIndex = (currentImageIndex - 1 + imagePaths.length) % imagePaths.length;
    setCurrentImageIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentImageIndex + 1) % imagePaths.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      <Image
        style={[styles.itemImg]}
        resizeMode="cover"
        source={imagePaths[currentImageIndex]}
      />
            <Image style={[styles.back]}
        contentFit="cover"
        source={require("../../assets/icons/back2.png")}
      />

      <Image style={[styles.heart]}
        contentFit="cover"
        source={require("../../assets/icons/heart-bar.png")}
      />

      <TouchableOpacity onPress={handlePrev} style={styles.buttonPrev}>
        <Image style={[styles.iconPrev]} resizeMode="cover" source={require("../../assets/icons/prev.png")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNext} style={styles.buttonNext}>
        <Image style={[styles.iconNext]} resizeMode="cover" source={require("../../assets/icons/next.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default ItemText;
