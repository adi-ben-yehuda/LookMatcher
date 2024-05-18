import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";

import ManualSearchOptions from "../components/manualSearchOptions/ManualSearchOptions";
import Tool from "../components/toolbar/ToolBar";
import BackButton from "../components/backButton/BackButton";
import TitleComponent from "../components/title/title.js";

const ManualSearch = () => {

  return (
    <View style={styles.container}>
       <View style={styles.first}>
        <BackButton />
        <TitleComponent titleText="Search" />
        </View>
      <ScrollView contentContainerStyle={styles.scrollviewContainer}>
        <ManualSearchOptions />
      </ScrollView>
      <View style={styles.toolContainer}>
        <Tool />
      </View>
    </View>
  );
};
const window = Dimensions.get("window");
  const screenHeight = window.height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBF9FC",
    flex: 1,
  },
  scrollviewContainer: {
    height: screenHeight+110,
    flexGrow: 2
  },
  toolContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  first: {
    height: screenHeight * 0.1,
    borderColor: '#000', 
    borderWidth: 0.2,      
    alignItems: 'center', 
    flexDirection: 'row', 
    shadowColor: "#000",  
    shadowOffset: {
      width: 0,          
      height: 2,        
    },
    shadowOpacity: 0.25,  
    shadowRadius: 3.84,   
    elevation: 5,         
    backgroundColor: '#FBF9FC',
  },
});

export default ManualSearch;
