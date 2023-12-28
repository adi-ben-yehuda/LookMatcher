import * as React from "react";
import { View, ScrollView, Text } from "react-native";
import { Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import styles from "./ProfilePassword.style";

const ProfilePassword = () => {

  

  const [currPassword, setCurrPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View>




          <View style={[styles.password, styles.currPass]}>
            <TextInput
              placeholder="Current Password"
              style={styles.newData}
              mode="outlined"
              value={currPassword}
              onChangeText={(text) => setCurrPassword(text)}
              secureTextEntry={true}
            />

            <Image
              style={[styles.lockIcon, styles.lockIconLayout]}
              contentFit="cover"
              source={require("../../assets/lock.png")}
            />
          </View>


          <View style={[styles.password, styles.newPass]}>
            <TextInput
              placeholder="New Password"
              style={styles.newData}
              mode="outlined"
              value={newPassword}
              onChangeText={(text) => setNewPassword(text)}
              secureTextEntry={true}
            />

            <Image
              style={[styles.lockIcon, styles.lockIconLayout]}
              contentFit="cover"
              source={require("../../assets/lock.png")}
            />
          </View>

          <View style={[styles.password, styles.confirmPass]}>
            <TextInput
              placeholder="Confirm New Password"
              style={styles.newData}
              mode="outlined"
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry={true}
            />

            <Image
              style={[styles.lockIcon, styles.lockIconLayout]}
              contentFit="cover"
              source={require("../../assets/chield-check.png")}
            />
          </View>


          <TouchableOpacity >
            <LinearGradient
              style={styles.savePass}
              locations={[0, 1]}
              colors={["#29085f", "#b941d7"]}
            >
              <View >
                <Text style={styles.saveDetailsText}> Change{'\n'}Password</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        
    </View>
  );
};


export default ProfilePassword;
