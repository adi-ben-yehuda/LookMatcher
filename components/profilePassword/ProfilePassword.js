import * as React from "react";
import { View, Text } from "react-native";
import { Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useContext } from "react";
import styles from "./ProfilePassword.style";
import UsersContext from "../../context/userContext";

const ProfilePassword = () => {
  const [currPassword, setCurrPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { token, user } = useContext(UsersContext);

  // States for checking the errors
  const [error, setError] = useState(false);

  const handleCurr = (text) => {
    setCurrPassword(text);
    setError(false);
  };

  const handleNew = (text) => {
    setNewPassword(text);
    setError(false);
  };

  const handleConfirm = (text) => {
    setConfirmPassword(text);
    setError(false);
  };

  const handleSavePress = async () => {
    setErrorMsg("");
    setSuccessMessage("");

    const user = {
      currPassword: currPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };

    try {
      const res = await fetch(`http://172.20.10.4:3000/api/Users/password`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        setCurrPassword(currPassword);
        setNewPassword("");
        setConfirmPassword("");
        setSuccessMessage("Password changed successfully!");
      } else if (res.status === 409) {
        const body = await res.json();
        const errorMsg = body.error;
        setErrorMsg(errorMsg);
        setError(true);
      } else if (res.status === 400) {
        const body = await res.json();
        const errorMsg = body.error;
        setErrorMsg(errorMsg);
        setError(true);
      } else {
        throw new Error("Failed to change password");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <View style={[styles.password, styles.currPass]}>
        <TextInput
          placeholder="Current Password"
          style={styles.newData2}
          mode="outlined"
          value={currPassword}
          onChangeText={handleCurr}
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
          style={styles.newData2}
          mode="outlined"
          value={newPassword}
          onChangeText={handleNew}
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
          style={styles.newData2}
          mode="outlined"
          value={confirmPassword}
          onChangeText={handleConfirm}
          secureTextEntry={true}
        />

        <Image
          style={[styles.lockIcon, styles.lockIconLayout]}
          contentFit="cover"
          source={require("../../assets/chield-check.png")}
        />
      </View>

      {successMessage && (
        <View style={styles.successMessage}>
          <Text style={styles.success}>{successMessage}</Text>
        </View>
      )}

      {error && (
        <View style={styles.errorMessage1}>
          {console.log("errorMsg:", errorMsg)}
          <Text style={styles.error1}>Invalid: {errorMsg}</Text>
        </View>
      )}

      <TouchableOpacity onPress={handleSavePress}>
        <LinearGradient
          style={styles.register1}
          locations={[0, 1]}
          colors={["#29085f", "#b941d7"]}
        >
          <View style={[styles.registerParent, styles.registerPosition]}>
            <Text style={styles.register2}>Change Password</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePassword;
