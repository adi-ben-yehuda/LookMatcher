import * as React from "react";
import { View, Text } from "react-native";
import { Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import styles from "./ProfilePassword.style";

const ProfilePassword = () => {



  const [currPassword, setCurrPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // States for checking the errors
  const [error, setError] = useState(false);
  const [errorList, setErrorList] = useState([]);


  const checkCurrPassword = () => {
    //add if curr == data
    if (currPassword === "") {
      return false;
    }
    return true;
  };

  const checkPassword = () => {
    const passwordRegex = /^[A-Za-z0-9]*$/;
    if (
      newPassword === "" ||
      newPassword.length < 8 ||
      passwordRegex.test(newPassword) === false
    ) {
      return false;
    }
    return true;
  };

  const CheckConfirmPassword = () => {
    if (confirmPassword == "") {
      return false;
    }
    if (newPassword === confirmPassword) {
      return true;
    }
    return false;
  };

  const handleRegisterPress = () => {
    setErrorList([]);
    errorList.splice(0, errorList.length);


    if (!checkCurrPassword()) {
      setError(true);
      errorList.push(" currrent password");
    }

    if (!checkPassword()) {
      setError(true);
      errorList.push(" new password");
    }
    if (!CheckConfirmPassword()) {
      setError(true);
      errorList.push(" confirm password");
    }

    if (errorList.length > 0) {
      setError(true);
      setErrorList(errorList);
    }
    // } else {
    //   // All the fields are correct
    //   navigation.navigate("Login");
    // }
  };

  // Show all errors separated by a comma
  const renderList = errorList.map((item, index) => (
    <Text key={index} style={styles.error}>
      {item}
      {index !== errorList.length - 1 && ","}
    </Text>
  ));


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


      {error && (
        <View style={styles.errorMessage}>
          <Text style={styles.error}>Invalid{renderList}</Text>
        </View>
      )}


      <TouchableOpacity onPress={handleRegisterPress}>
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