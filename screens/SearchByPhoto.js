import * as React from "react";
import { View, ScrollView, Dimensions,StyleSheet } from "react-native";

import ToolBar from "../components/toolbar/ToolBar";
import SearchByPhoto from "../components/searchByPhoto/SearchByPhoto";
import BackButton from "../components/backButton/BackButton";
import TitleComponent from "../components/title/title.js";

const window = Dimensions.get("window");
const screenHeight = window.height;

const styles = StyleSheet.create({

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

const SearchPhoto = () => {
  const window = Dimensions.get("window");
  const screenHeight = window.height;
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.first}>
        <BackButton />
        <TitleComponent titleText="Spotted Item You Like?" />
        </View>
      <ScrollView contentContainerStyle={{ height: screenHeight * 1.1 }}>
        <SearchByPhoto />
      </ScrollView>
      <ToolBar />
    </View>
  );
};

export default SearchPhoto;
