import * as React from "react";
import { View, Text, Dimensions } from "react-native";
import { Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect, useContext } from "react";
import styles from "./ProfileDetails.style";
import UsersContext from "../../context/userContext";

const ProfileDetails = () => {
  // States for checking the errors
  const [error, setError] = useState(false);
  const [errorList, setErrorList] = useState([]);
  const [detailsFetched, setDetailsFetched] = useState(false);
  const { token, user } = useContext(UsersContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const getDetails = async () => {
    try {
      const res = await fetch("http://192.168.56.1:3000/api/Users/:email", {
        method: "get",
        headers: {
          authorization: "Bearer " + token,
        },
      });
     
      if (res.ok) {
        const result = await res.json();
        setFirstName(result.firstName);
        setLastName(result.lastName);
        setEmail(result.email);
        return result;

      } else {
        throw new Error("Failed to get details");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!detailsFetched) {
      getDetails();
      setDetailsFetched(true);
    }
  }, [detailsFetched]);



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

      <TouchableOpacity onPress={handleSavePress}>
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
