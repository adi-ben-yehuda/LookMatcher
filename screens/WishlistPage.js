import * as React from "react";
import { ScrollView, View, Dimensions, StyleSheet } from "react-native";
import TitleComponent from "../components/title/title.js";
import Wishlist from "../components/wishlist/Wishlist";
import ToolBar from "../components/toolbar/ToolBar";
import BackButton from "../components/backButton/BackButton";




const WishlistPage = () => {

return (
  <View style={styles.container}>
     <View style={styles.first}>
      <BackButton />
      <TitleComponent titleText="Wish List" />
      </View>
    <View style={styles.resultsContainer}>
      <Wishlist/>
    </View>
    <View style={styles.toolbarContainer}>
      <ToolBar />
    </View>
  </View>
);
};


const window = Dimensions.get("window");
const screenHeight = window.height;

const styles = StyleSheet.create({
container: {
  flex: 1,  // Make the container use full height
  flexDirection: 'column',
  backgroundColor: "#FBF9FC",

   // Align children vertically
},
resultsContainer: {
  flex: 1,  // Takes all available space pushing the toolbar to the bottom
},
toolbarContainer: {
  height: 50, // Adjust according to the height of your toolbar
  justifyContent: 'flex-end',
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

export default WishlistPage;

