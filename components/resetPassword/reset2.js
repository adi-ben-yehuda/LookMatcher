import * as React from "react";
import { View, Text, Image, Alert } from "react-native";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./reset2.style";
import { useState, useRef } from "react";
import { useRoute } from "@react-navigation/native";

const Reset2 = () => {
  const route = useRoute();
  const { email } = route.params;

  const navigation = useNavigation();
  const passInput = useRef(null);
  const newPasswordInput = useRef(null);

  const [pass, setPass] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [passPlaceholder, setpassPlaceholder] = useState("token");
  const [newPasswordPlaceholder, setnewPasswordPlaceholder] =
    useState("New Password");

  // States for checking the errors
  const [error, setError] = useState(false);
  const [errorList, setErrorList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handlePass = (text) => {
    setPass(text);
    setError(false);
  };

  const handleNewPassword = (text) => {
    setNewPassword(text);
    setError(false);
  };

  const handleResetPress = async () => {
    setErrorMsg("");
    setSuccessMessage("");

    const reset = {
      email: email,
      token: pass,
      newPassword: newPassword,
    };

    try {
      const res = await fetch("http://192.168.1.245:3000/api/resetPass", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reset),
      });

      if (res.ok) {
        setSuccessMessage("Password reset successfully!");
        Alert.alert("Success!", "Password reset");
      } else if (res.status === 409) {
        const body = await res.json();
        const errorMsg = body.error;
        setErrorMsg(errorMsg);
        setError(true);
        Alert.alert("Error", errorMsg);
      } else {
        throw new Error("Failed to reset password");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const passBlur = () => {
    passInput.current && passInput.current.handleBlur();
    setpassPlaceholder("Token");
  };

  const passFocus = () => {
    passInput.current && passInput.current.handleFocus();
    setpassPlaceholder("");
  };

  const newPasswordBlur = () => {
    newPasswordInput.current && newPasswordInput.current.handleBlur();
    setnewPasswordPlaceholder("Password");
  };

  const newPasswordFocus = () => {
    newPasswordFocus.current && newPasswordInput.current.handleFocus();
    setnewPasswordPlaceholder("");
  };
  return (
    <LinearGradient
      style={styles.login}
      locations={[0, 0.37, 0.67, 1]}
      colors={["#2f085f", "#5b1c89", "#e069eb", "#ecc9f1"]}
    >
      <View style={styles.title}>
        <Text style={styles.titelText}> New{"\n"}Password</Text>
      </View>

      <View style={styles.loginChild} />
      <View style={[styles.email, styles.emailPosition]}>
        <TextInput
          forwardedRef={passInput}
          label="Token"
          placeholder={passPlaceholder}
          style={styles.childPosition}
          mode="outlined"
          value={pass}
          onChangeText={handlePass}
          onFocus={passFocus}
          onBlur={passBlur}
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

      <View style={[styles.password, styles.emailPosition]}>
        <TextInput
          forwardedRef={newPasswordInput}
          label="New Password"
          placeholder={newPasswordPlaceholder}
          style={styles.childPosition}
          mode="outlined"
          value={newPassword}
          onChangeText={handleNewPassword}
          onFocus={newPasswordFocus}
          onBlur={newPasswordBlur}
          secureTextEntry={true}
        />
        <Image
          style={[styles.lockIcon, styles.lockIconLayout]}
          contentFit="cover"
          source={require("../../assets/lock.png")}
        />
      </View>

      {/* <View style={styles.errorMessage}>
        {error && <Text style={styles.error}>{errorMsg}</Text>}
        {successMessage && <Text style={styles.success}>{successMessage}</Text>}
      </View> */}

      <TouchableOpacity onPress={handleResetPress}>
        <LinearGradient
          style={styles.login1}
          locations={[0, 1]}
          colors={["#29085f", "#b941d7"]}
        >
          <View style={[styles.loginParent, styles.loginPosition]}>
            <Text style={[styles.login2, styles.loginPosition]}>Reset</Text>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../../assets/vector.png")}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View style={styles.backlogin}>
          <Text style={styles.backlogin2}>Back to login {">"}</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Reset2;
