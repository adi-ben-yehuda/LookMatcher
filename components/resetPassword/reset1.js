import * as React from "react";
import { View, Text, Image, Alert } from "react-native";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./reset1.style";
import { useState, useRef, useContext } from "react";

const Reset = () => {
  const navigation = useNavigation();

  const emailInput = useRef(null);

  const [email, setEmail] = useState("");

  const [emailPlaceholder, setEmailPlaceholder] = useState("Email");

  // States for checking the errors
  const [error, setError] = useState(false);
  const [errorList, setErrorList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const handleEmail = (text) => {
    setEmail(text);
    setError(false);
  };

  const emailBlur = () => {
    emailInput.current && emailInput.current.handleBlur();
    setEmailPlaceholder("Email");
  };

  const emailFocus = () => {
    emailInput.current && emailInput.current.handleFocus();
    setEmailPlaceholder("");
  };

  const loginButtonStyle = error
    ? [styles.login1, { marginTop: -20 }]
    : styles.login1;

  const handleEmailPress = async () => {
    setErrorMsg("");

    const user = {
      email: email,
    };

    try {
      const res = await fetch("http://192.168.233.245:3000/api/email", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        setEmail("");
        navigation.navigate("ChangePass2", { email: email });
      } else if (res.status === 409) {
        const body = await res.json();
        const errorMsg = body.error;
        setErrorMsg(errorMsg);
        setError(true);
        Alert.alert("Error", errorMsg);
      } else {
        throw new Error("Failed to find email");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LinearGradient
      style={styles.login}
      locations={[0, 0.37, 0.67, 1]}
      colors={["#2f085f", "#5b1c89", "#e069eb", "#ecc9f1"]}
    >
      <View style={styles.title}>
        <Text style={styles.titelText}>Reset{"\n"}Password</Text>
      </View>

      <View style={styles.loginChild} />
      <View style={styles.title2}>
        <Text style={styles.titelText2}>
          Enter your email and check your mailBox
        </Text>
      </View>
      <View style={[styles.email, styles.emailPosition]}>
        <TextInput
          forwardedRef={emailInput}
          label="Email"
          placeholder={emailPlaceholder}
          style={styles.childPosition}
          mode="outlined"
          value={email}
          onChangeText={handleEmail}
          onFocus={emailFocus}
          onBlur={emailBlur}
        />
        <View style={[styles.message, styles.messagePosition]}>
          <View style={styles.messageChild} />
          <Image
            style={[styles.messageItem, styles.lockIconLayout]}
            contentFit="cover"
            source={require("../../assets/vector-3.png")}
          />
        </View>
      </View>

      {/* <View style={styles.errorMessage}>
        {error && <Text style={styles.error}>Invalid: {errorMsg}</Text>}
      </View> */}

      <TouchableOpacity onPress={handleEmailPress}>
        <LinearGradient
          style={loginButtonStyle}
          locations={[0, 1]}
          colors={["#29085f", "#b941d7"]}
        >
          <View style={[styles.loginParent, styles.loginPosition]}>
            <Text style={[styles.login2, styles.loginPosition]}>Send</Text>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../../assets/vector.png")}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Reset;
