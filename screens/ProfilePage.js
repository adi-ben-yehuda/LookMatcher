import * as React from "react";
import { View, ScrollView, Dimensions, StyleSheet } from "react-native";
import ToolBar from "../components/toolbar/ToolBar";
import ProfileDetails from "../components/profileDetails/ProfileDetails";
import ProfilePassword from "../components/profilePassword/ProfilePassword";
import BackButton from "../components/backButton/BackButton";

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
    height: screenHeight * 0.8,
  },
});

const Profile = () => {
  return (
    <View style={styles.home}>
      <View>
        <BackButton />
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
