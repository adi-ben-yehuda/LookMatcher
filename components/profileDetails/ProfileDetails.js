import * as React from "react";
import { View, Text, Dimensions } from "react-native";
import { Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import styles from "./ProfileDetails.style";

const ProfileDetails = () => {

  const [firstName, setFirstName] = useState("Dana");
  const [lastName, setLastName] = useState("Danilenko");
  const [email, setEmail] = useState("aa@gmail.com");

  // States for checking the errors
  const [error, setError] = useState(false);
  const [errorList, setErrorList] = useState([]);


  const checkEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email) === false) {
      return false;
    }
    return true;
  };

  const handleEmail = (text) => {
    setEmail(text);
    setError(false);
  };
  const handleFirstName = (text) => {
    setFirstName(text);
    setError(false);
  };
  const handleSecondName = (text) => {
    setLastName(text);
    setError(false);
  };


  const handleSavePress = () => {
  
    setErrorList([]);
    errorList.splice(0, errorList.length);

    if (firstName === "") {
      setError(true);
      errorList.push(" first name");
    }

    if (lastName === "") {
      setError(true);
      errorList.push(" last name");
    }

    if (!checkEmail()) {
      setError(true);
      //console.log("Email 1:", email);
      errorList.push(" email");
    }

    if (errorList.length > 0) {
      setError(true);
      setErrorList(errorList);
    }
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
      <View style={styles.title}>
        <Text style={styles.titelText}>My Details</Text>
      </View>

      <View style={[styles.password, styles.firstNamePosition]}>
        <TextInput
          style={styles.newData}
          mode="outlined"
          value={firstName}
          onChangeText={handleFirstName}
        />

        <Image
          style={[styles.lockIcon, styles.lockIconLayout]}
          contentFit="cover"
          source={require("../../assets/user-alt.png")}
        />
      </View>


      <View style={[styles.password, styles.lastNamePosition]}>
        <TextInput
          style={styles.newData}
          mode="outlined"
          value={lastName}
          onChangeText={handleSecondName}
        />

        <Image
          style={[styles.lockIcon, styles.lockIconLayout]}
          contentFit="cover"
          source={require("../../assets/user-alt.png")}
        />
      </View>

      <View style={[styles.password, styles.emailPosition]}>
        <TextInput
          style={styles.newData}
          mode="outlined"
          value={email}
          onChangeText={handleEmail}
        />

        <Image
          style={[styles.lockIcon, styles.lockIconLayout]}
          contentFit="cover"
          source={require("../../assets/email.png")}
        />
      </View>



      {error && (
        <View style={styles.errorMessage}>
          <Text style={styles.error}>Invalid{renderList}</Text>
        </View>
      )}

      
<TouchableOpacity onPress={handleSavePress} >
        <LinearGradient
          style={styles.register1}
          locations={[0, 1]}
          colors={["#29085f", "#b941d7"]}
        >
          <View style={[styles.registerParent, styles.registerPosition]}>
            <Text style={styles.register2}>Change Details</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );

};


export default ProfileDetails;
