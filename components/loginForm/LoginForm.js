import * as React from "react";
import { View, Text, Image } from "react-native";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./LoginForm.style";
import { useState, useRef, useContext } from "react";
import UsersContext from '../../context/userContext';

const LoginForm = () => {
  const navigation = useNavigation();
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [token, setToken] = useState("");
  const { setToken, setUser } = useContext(UsersContext);

  const [emailPlaceholder, setEmailPlaceholder] = useState("Email");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password");

  // States for checking the errors
  const [error, setError] = useState(false);
  const [errorList, setErrorList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const handleEmail = (text) => {
    setEmail(text);
    setError(false);
  };

  const handlePassword = (text) => {
    setPassword(text);
    setError(false);
  };

  const handleLoginPress = async () => {
    setErrorMsg("");

    const user = {
      email: email,
      password: password,
    };

    try {
      const res = await fetch("http://192.168.56.1:3000/api/Tokens", {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        const body = await res.json();
        console.log(body);
        const token = body.token;
        setToken(token);
        console.log("TOKEN LOGIN", token);
        setEmail("");
        setPassword("");
        navigation.navigate("Home", { name: body.name });
      } else if (res.status === 404) {
        const body = await res.json();
        const errorMsg = body.error;
        setErrorMsg(errorMsg);
        setError(true);
      } else {
        throw new Error("Failed to login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const emailBlur = () => {
    emailInput.current && emailInput.current.handleBlur();
    setEmailPlaceholder("Email");
  };

  const emailFocus = () => {
    emailInput.current && emailInput.current.handleFocus();
    setEmailPlaceholder("");
  };

  const passwordBlur = () => {
    passwordInput.current && passwordInput.current.handleBlur();
    setPasswordPlaceholder("Password");
  };

  const passwordFocus = () => {
    passwordInput.current && passwordInput.current.handleFocus();
    setPasswordPlaceholder("");
  };

  const loginButtonStyle = error
    ? [styles.login1, { marginTop: -20 }]
    : styles.login1;

  return (
    <LinearGradient
      style={styles.login}
      locations={[0, 0.37, 0.67, 1]}
      colors={["#2f085f", "#5b1c89", "#e069eb", "#ecc9f1"]}
    >
      <View style={styles.loginChild} />
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

      <View style={[styles.password, styles.emailPosition]}>
        <TextInput
          forwardedRef={passwordInput}
          label="Password"
          placeholder={passwordPlaceholder}
          style={styles.childPosition}
          mode="outlined"
          value={password}
          onChangeText={handlePassword}
          onFocus={passwordFocus}
          onBlur={passwordBlur}
          secureTextEntry={true}
        />
        <Image
          style={[styles.lockIcon, styles.lockIconLayout]}
          contentFit="cover"
          source={require("../../assets/lock.png")}
        />
      </View>

      {/* Show error message if error is true */}
      {error && (
        <View style={styles.errorMessage}>
          <Text style={styles.error}>Invalid{errorMsg}</Text>
        </View>
      )}

      <TouchableOpacity onPress={handleLoginPress}>
        <LinearGradient
          style={loginButtonStyle}
          locations={[0, 1]}
          colors={["#29085f", "#b941d7"]}
        >
          <View style={[styles.loginParent, styles.loginPosition]}>
            <Text style={[styles.login2, styles.loginPosition]}>Login</Text>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../../assets/vector.png")}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={styles.alreadyAMemberContainer}>
        <Text style={styles.newMember}>New Member? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.register}>Register now</Text>
        </TouchableOpacity>
      </Text>

      <Text style={[styles.forgetPassword, styles.registerNowTypo]}>
        Forget password ?
      </Text>
    </LinearGradient>
  );
};

export default LoginForm;
