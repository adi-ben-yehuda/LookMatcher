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
});

const Profile = () => {
  return (
    <View>
      <BackButton />
      <ScrollView contentContainerStyle={{ minHeight: screenHeight * 1.15 }}>
        <View style={styles.home}>
          <ProfileDetails />
          <ProfilePassword />
        </View>
      </ScrollView>
      <ToolBar />
    </View>
  );
};

export default Profile;
