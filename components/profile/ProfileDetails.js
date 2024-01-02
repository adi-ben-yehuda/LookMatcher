import * as React from "react";
import { View, Text, Dimensions } from "react-native";
import { Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import styles from "./ProfileDetails.style";

const ProfileDetails = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // States for checking the errors
  const [error, setError] = useState(false);
  const [errorList, setErrorList] = useState([]);


  const handleEmail = (text) => {
    setError(false);
  };

  const checkEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email) === false) {
      return false;
    }
    return true;
  };

  const handleRegisterPress = () => {
    // setErrorList([]);
    setError(false);
    // errorList.splice(0, errorList.length);


    if (!checkEmail()) {
      setError(true);
      //errorList.push(" email");
    }

    // if (errorList.length > 0) {
    //   setError(true);
    // setErrorList(errorList);
    // } else {
    //   // All the fields are correct
    //   navigation.navigate("Login");
    // }
  }


  // Show all errors separated by a comma
  const renderList = errorList.map((item, index) => (
    <Text key={index} style={styles.error}>
      {item}
      {index !== errorList.length - 1 && ","}
    </Text>
  ));

  // const registerButtonStyle = () => {
  //   if (error) {
  //     return {
  //       ...styles.register1,
  //       marginTop: -10,
  //     };
  //   }
  //   return 0;
  // };
 
 

  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.titelText}>My Details</Text>
      </View>
      <View style={[styles.password, styles.firstNamePosition]}>
        <TextInput
          placeholder="Dana"
          style={styles.newData}
          mode="outlined"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />

        <Image
          style={[styles.lockIcon, styles.lockIconLayout]}
          contentFit="cover"
          source={require("../../assets/user-alt.png")}
        />
      </View>


      <View style={[styles.password, styles.lastNamePosition]}>
        <TextInput
          placeholder="Danilenko"
          style={styles.newData}
          mode="outlined"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />

        <Image
          style={[styles.lockIcon, styles.lockIconLayout]}
          contentFit="cover"
          source={require("../../assets/user-alt.png")}
        />
      </View>

      <View style={[styles.password, styles.emailPosition]}>
        <TextInput
          placeholder="a@gmail.com"
          style={styles.newData}
          mode="outlined"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Image
          style={[styles.lockIcon, styles.lockIconLayout]}
          contentFit="cover"
          source={require("../../assets/email.png")}
        />
      </View>



      {error && (
        <View style={styles.errorMessage}>
          <Text style={styles.error}>Invalid email</Text>
        </View>
      )}

      <TouchableOpacity onPress={handleRegisterPress}>
        <LinearGradient
         style={
          styles.saveDetails
          
        }
          locations={[0, 1]}
          colors={["#29085f", "#b941d7"]}
        >
          <View >
            <Text style={styles.saveDetailsText}>Change{'\n'} Details</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );

};


export default ProfileDetails;
