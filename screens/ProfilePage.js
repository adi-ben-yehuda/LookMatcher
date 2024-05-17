import * as React from "react";
import { View, ScrollView, Dimensions, StyleSheet } from "react-native";
import ToolBar from "../components/toolbar/ToolBar";
import ProfileDetails from "../components/profileDetails/ProfileDetails";
import ProfilePassword from "../components/profilePassword/ProfilePassword";
import BackButton from "../components/backButton/BackButton";
import TitleComponent from "../components/title/title.js";

const window = Dimensions.get("window");
const screenHeight = window.height;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#FBF9FC",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  scrollviewContainer: {
    height: screenHeight + 35,
    //paddingBottom: 150,
    flexGrow: 2,
  },
  first: {
    height: screenHeight * 0.12,
    borderColor: '#000', // Black border color
    borderWidth: 0.2,      // Border width of 1
    //padding: 10,         // Optional padding inside the border
    alignItems: 'center', // Centers the child components horizontally
    //justifyContent: 'space-between', // Distributes children evenly and aligns children along the main-axis
    flexDirection: 'row', // Arranges children in a row
    shadowColor: "#000",  // Shadow color
    shadowOffset: {
      width: 0,           // Horizontal shadow offset
      height: 2,          // Vertical shadow offset
    },
    shadowOpacity: 0.25,  // Shadow opacity
    shadowRadius: 3.84,   // Shadow blur radius
    elevation: 5,         // Elevation for Android (adds shadow)
    backgroundColor: '#FBF9FC', // Background color for contrast with shadow
  },

});

const Profile = () => {
  return (
    <View style={styles.home}>
      <View>
        <View style={styles.first}>
        <BackButton />
        <TitleComponent titleText="My Details" />
        </View>
        <ScrollView contentContainerStyle={styles.scrollviewContainer}>
          <ProfileDetails />
          <ProfilePassword />
        </ScrollView>
      </View>
      <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <ToolBar />
      </View>
    </View>
  );
};

export default Profile;
