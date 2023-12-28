import * as React from "react";
import { View, ScrollView, Text, Dimensions, StyleSheet } from "react-native";
import ToolBar from "../../components/toolbar/ToolBar";
import ProfileDetails from "../../components/profile/ProfileDetails";
import ProfilePassword from "../../components/profile/ProfilePassword";
import styles from "./Profile.style";


const Profile = () => {
  const window = Dimensions.get("window");
  const screenHeight = window.height;


  return (
    <View>
      <ScrollView contentContainerStyle={{ minHeight: screenHeight * 1.2 }}>
        <View style={styles.home}>
          <ProfileDetails></ProfileDetails>
          <ProfilePassword></ProfilePassword>
        </View>
      </ScrollView>
      <View>
        <ToolBar />
      </View>
    </View>
  );
};


export default Profile;
