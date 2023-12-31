import React, { useState } from "react";


import { Text, StyleSheet, View } from "react-native";
import styles from "./Results.style";
import { Image } from "expo-image";

const Results = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [iconSource, setIconSource] = useState(require('../../assets/component-1661.png'));



  const handleSortByClick = () => {
    // Toggle dropdown visibility
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = (item) => {
    setSelectedItem(item);
    // Close the dropdown after clicking an item

    // Change the icon source based on the selected item
    if (iconSource === '../../assets/component-1661.png') {
      setIconSource(require('../../assets/component-166.png'));
    } else {
      setIconSource(require('../../assets/component-1661.png'));
    }

    //setIsDropdownOpen(false);
  };


  return (
    <View style={[styles.results, styles.resultsLayout]}>
      <Text style={styles.headline}>Button-down shirts</Text>
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
        <Text style={[styles.item1, styles.text5Position]}>
          Satin shirt
        </Text>
        <Text style={[styles.price1, styles.text5Position]}>$ 50.00</Text>
        <Text style={[styles.store1, styles.text5Position]}>Castro</Text>
        <Image
          style={[styles.image8Icon, styles.text5Position]}
          contentFit="cover"
          source={require("../../assets/image-8.png")}
        />
        <Image style={[styles.icon1, styles.iconPosition]} contentFit="cover" />
        {/* <Image
          style={styles.favoriteLightIcon5}
          contentFit="cover"
          source={require("../../assets/favorite-light1.png")}
        /> */}
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
      <Image
        style={[styles.taskbarIcon, styles.resultsLayout]}
        contentFit="cover"
        source={require("../../assets/taskbar.png")}
      />
      <Image
        style={[styles.taskbarIcon, styles.resultsLayout]}
        contentFit="cover"
        source={require("../../assets/taskbar.png")}
      />
      <Image
        style={[styles.taskbarIcon, styles.resultsLayout]}
        contentFit="cover"
        source={require("../../assets/taskbar.png")}
      />
      <View style={[styles.component156, styles.stateLayerFlexBox]}onTouchEnd={handleSortByClick}>
        <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
          <Text style={styles.labelText1}>{ selectedItem|| "Sort By"}</Text>
          <Image
            style={styles.icon3}
            contentFit="cover"
            source={require("../../assets/icon.png")}
          />
        </View>
      </View>




      {isDropdownOpen && (
        <View style={styles.dropDownList}>
        <View style={[styles.list2DensityDark, styles.listLayout]}>
          <View style={[styles.listLayout]}>
            <View style={[styles.buildingPosition,]} />
            <View style={[styles.divider, styles.dividerLayout]} />
          </View>
          <View style={[styles.listLayout]}>
            <View style={[styles.buildingPosition,]} />
            <View style={[styles.horizontalFlexBox,]}>
              <View style={[styles.divider, styles.dividerLayout]} />
            </View>
          </View>
          <View style={[styles.listLayout]}>
            <View style={[styles.buildingPosition,]} />
            <View style={[styles.horizontalFlexBox,]}>
              <View style={[styles.divider, styles.dividerLayout]} />
            </View>
          </View>
          <View style={[styles.listItemlistItem2Densit3, styles.listLayout]}>
            <View style={[, styles.buildingPosition,]} />
            <View style={[styles.horizontalFlexBox]}>
              <View style={[styles.divider, styles.dividerLayout]} />
            </View>
          </View>
          <View style={[styles.listItemlistItem2Densit4, styles.listLayout,
             selectedItem === "Price: low to high" && styles.buildingBlocksstateLayerDaItem,
            ]}
            onTouchEnd={() => handleDropdownItemClick("Price: low to high")}
            >
            <View style={[styles.buildingPosition,]}>
              <View style={[styles.buildingBlocksstateLayerDaChild, styles.buildingPosition,]} />
            </View>
            <View style={[styles.stateLayer1, styles.contentFlexBox]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={iconSource}
              />
              <View style={[styles.content, styles.contentFlexBox]}>
                <Text style={[styles.headline4, styles.headlineTypo]}>  Price: from low to high  </Text>
              </View>
            </View>
            <View style={styles.horizontalFlexBox}>
              <View style={[styles.divider, styles.dividerLayout]} />
            </View>
          </View>
          <View style={[styles.listItemlistItem2Densit5, styles.listLayout,
                       selectedItem === "HighTolow" && styles.buildingBlocksstateLayerDaItem,
            ]}
            onTouchEnd={() => handleDropdownItemClick("Price: High To Low")}
            >
            <View style={[styles.buildingPosition,]}>
              <View style={[styles.buildingPosition,]} />
            </View>
            <View style={[styles.stateLayer1, styles.contentFlexBox]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../../assets/component-1661.png")}
              />
              <View style={[styles.content, styles.contentFlexBox]}>
                <Text style={[styles.headline4, styles.headlineTypo]}> Price: from high to low </Text>
              </View>
            </View>
            <View style={styles.horizontalFlexBox}>
              <View style={[styles.divider, styles.dividerLayout]} />
            </View>
          </View>
          <View style={[styles.listItemlistItem2Densit6, styles.listLayout,
                        selectedItem === "Distance: near to far" && styles.buildingBlocksstateLayerDaItem,
                      ]}
                      onTouchEnd={() => handleDropdownItemClick("Distance: near to far")}
                      >
            <View style={[styles.buildingPosition,]}>
              <View style={[styles.buildingBlocksstateLayerDaItem, styles.buildingPosition,]} />
            </View>
            <View style={[styles.stateLayer1, styles.contentFlexBox]}>
              <Image style={styles.iconLayout} contentFit="cover"
                source={require("../../assets/component-1661.png")}
              />
              <View style={[styles.content, styles.contentFlexBox]}>
                <Text style={[styles.headline4, styles.headlineTypo]}> Distance: from near to far </Text>
              </View>
            </View>
            <View style={styles.horizontalFlexBox}>
              <View style={[styles.divider, styles.dividerLayout]} />
            </View>
          </View>
          <View style={[styles.listItemlistItem2Densit7, styles.listLayout,
                        selectedItem === "Distance: far to near" && styles.building,
                      ]}
                      onTouchEnd={() => handleDropdownItemClick("Distance: far to near")}
                      >
            <View style={[styles.buildingPosition,]}>
              <View style={[styles.buildingBlocksstateLayerDaItem, styles.buildingPosition,]} />
            </View>
            <View style={[styles.stateLayer1, styles.contentFlexBox]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../../assets/component-1661.png")}
              />
              <View style={[styles.content, styles.contentFlexBox]}>
                <Text style={[styles.headline4, styles.headlineTypo]}> Distance: from far to near </Text>
              </View>
            </View>
            <View style={styles.horizontalFlexBox}>
              <View style={[styles.divider, styles.dividerLayout]} />
            </View>
          </View>
        </View>
        <Image
          style={styles.scrollBarIcon}
          contentFit="cover"
          source={require("../../assets/scroll-bar.png")}
        />
      </View>
       )}
    </View>
  );
};



export default Results;
