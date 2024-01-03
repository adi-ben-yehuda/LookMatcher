import * as React from "react";
import { View, ScrollView, Dimensions, StyleSheet } from "react-native";
import ToolBar from "../components/toolbar/tool";
import ProfileDetails from "../components/profile/ProfileDetails";
import ProfilePassword from "../components/profile/ProfilePassword";

const window = Dimensions.get("window");
const screenHeight = window.height;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#E2DBEA",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

const Profile = () => {
  return (
    <View>
      <ScrollView contentContainerStyle={{ minHeight: screenHeight * 1.3 }}>
        <View style={styles.home}>
          <ProfileDetails />
          <ProfilePassword />
        </View>
      </ScrollView>
      <View>
        <ToolBar />
      </View>
    </View>
  );
};

export default Profile;