import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./Wishlist.style";
import { Image } from "expo-image";

const Results = () => {

    const handleMakeMePress = () => {
    };
    const handleMakeYourselfPress = () => {
    };

    return (
        <View style={[styles.results, styles.resultsLayout]}>
            <Text style={styles.headline}>Wishlist</Text>
            <View style={[styles.result4, styles.resultLayout]}>
                <Text style={[styles.item4, styles.shirtTypo]}>Oxford shirt</Text>
                <Text style={styles.price4}>$ 70.00</Text>
                <Text style={styles.store4}>Zara</Text>
                <Image
                    style={styles.image7Icon}
                    contentFit="cover"
                    source={require("../../assets/image-7.png")}
                />
                {/* <Image
          style={styles.favoriteLightIcon5}
          contentFit="cover"
          source={require("../../assets/favorite-light.png")}
        /> */}
            </View>
            {/* <Image
        style={styles.result3Icon}
        contentFit="cover"
        source={require("../../assets/result-3.png")}
      /> */}
            {/* <Image
        style={styles.favoriteLightIcon5}
        contentFit="cover"
        source={require("../../assets/favorite-light.png")}
      /> */}
            <View style={[styles.result2, styles.resultLayout]}>
                {/* <Text style={[styles.text4, styles.text4Position]}>$ 55.00</Text>
        <Text style={[styles.renuar, styles.renuarTypo]}>Renuar</Text>
        <Text style={[styles.oxfordShirt1, styles.text4Position]}>
          Oxford shirt
        </Text> */}
                {/* <Image
          style={[styles.image6Icon, styles.text5Position]}
          contentFit="cover"
          source={require("../../assets/image-6.png")}
        /> */}
                <Image style={[styles.icon1, styles.iconPosition]} contentFit="cover" />
                {/* <Image
          style={styles.favoriteLightIcon5}
          contentFit="cover"
          source={require("../../assets/favorite-light1.png")}
        /> */}
            </View>
            <View style={[styles.result1, styles.resultLayout]}>
                <Text style={[styles.item1]}>
                    Satin shirt
                </Text>
                <Text style={[styles.price1]}>$ 50.00</Text>
                <Text style={[styles.store1]}>Castro</Text>
                {/* <Image
          style={[styles.image8Icon]}
          contentFit="cover"
          source={require("../../assets/image-8.png")}
        /> */}
                <Image style={[styles.icon1, styles.iconPosition]} contentFit="cover" />
                <Image
                    style={styles.favoriteLightIcon5}
                    contentFit="cover"
                    source={require("../../assets/favorite-light1.png")}
                />
            </View>
            {/* <Image
        style={[styles.favoriteLightIcon8, styles.favoriteIconLayout]}
        contentFit="cover"
        source={require("../../assets/favorite-light2.png")}
      /> */}
            {/* <Image
        style={[styles.favoriteLightIcon9, styles.favoriteIconLayout]}
        contentFit="cover"
        source={require("../../assets/favorite-light2.png")}
      /> */}
            <View style={styles.buttons}>
                <TouchableOpacity onPress={handleMakeMePress}>
                    <LinearGradient
                        style={[styles.makeMe, styles.makeLayout]}
                        locations={[0, 1]}
                        colors={["#29085f", "#b941d7"]}
                    >
                        <View style={[styles.makeAnOutfitWrapper, styles.makePosition]}>
                            <Text style={[styles.makeAnContainer, styles.makePosition]}>
                                Make me an outfit
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
            </View>
        </View>
    );
};

export default Results; 