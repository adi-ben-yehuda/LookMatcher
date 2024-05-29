import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-paper";
import styles from "./RegisterForm.style";
import { Color } from "../../styles/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { useState, useRef, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { UsersContext } from "../../context/userContext.js";

function RegisterForm() {
  // const { addUser } = useContext(UsersContext);

  const navigation = useNavigation();

  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const confirmPasswordInput = useRef(null);
  const firstNameInput = useRef(null);
  const lastNameInput = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // States for checking the errors
  const [error, setError] = useState(false);
  const [errorList, setErrorList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const [emailPlaceholder, setEmailPlaceholder] = useState("Email");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password");
  const [confirmPasswordPlaceholder, setConfirmPasswordPlaceholder] =
    useState("Confirm Password");
  const [firstNamePlaceholder, setFirstNamePlaceholder] =
    useState("First Name");
  const [lastNamePlaceholder, setLastNamePlaceholder] = useState("Last Name");

  const handleFirstName = (text) => {
    setFirstName(text);
    setError(false);
  };

  const handleLastName = (text) => {
    setLastName(text);
    setError(false);
  };

  const handleEmail = (text) => {
    setEmail(text);
    setError(false);
  };

  const handlePassword = (text) => {
    setPassword(text);
    setError(false);
  };

  const handleConfirmPassword = (text) => {
    setConfirmPassword(text);
    setError(false);
  };

  const handleRegisterPress = async () => {
    setErrorMsg("");

    const user = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      confirmPassword: confirmPassword,
    };

    try {

      // const res = await fetch("http://192.168.1.109:3000/api/Users", {
        const res = await fetch("http://localhost:3000/api/Users", {
      // const res = await fetch("http://172.20.10.4:3000/api/Users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        await AsyncStorage.setItem("userName", firstName); // Save user name locally
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setFirstName("");
        setLastName("");
        
        navigation.navigate("Home");
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
        throw new Error("Failed to add user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const registerButtonStyle = () => {
    if (error) {
      if (
        errorList[errorList.length - 1] === " confirm password" &&
        errorList.length >= 4
      ) {
        return [styles.register1, { marginTop: -40 }];
      }
      return [styles.register1, { marginTop: -20 }];
    }
    return styles.register1;
  };

  const firsrtNameBlur = () => {
    firstNameInput.current && firstNameInput.current.handleBlur();
    setFirstNamePlaceholder("First Name");
  };

  const firsrtNameFocus = () => {
    firstNameInput.current && firstNameInput.current.handleFocus();
    setFirstNamePlaceholder("");
  };

  const lastNameBlur = () => {
    lastNameInput.current && lastNameInput.current.handleBlur();
    setLastNamePlaceholder("Last Name");
  };

  const lastNameFocus = () => {
    lastNameInput.current && lastNameInput.current.handleFocus();
    setLastNamePlaceholder("");
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

  const confirmPasswordBlur = () => {
    confirmPasswordInput.current && confirmPasswordInput.current.handleBlur();
    setConfirmPasswordPlaceholder("Confirm Password");
  };

  const confirmPasswordFocus = () => {
    confirmPasswordInput.current && confirmPasswordInput.current.handleFocus();
    setConfirmPasswordPlaceholder("");
  };

  return (
    <LinearGradient
      style={styles.register}
      locations={[0, 0.37, 0.67, 1]}
      colors={["#2f085f", "#5b1c89", "#e069eb", "#ecc9f1"]}
    >
      <View style={styles.registerChild} />
      <View style={[styles.firstName, styles.passwordLayout]}>
        <TextInput
          forwardedRef={firstNameInput}
          label="First Name"
          placeholder={firstNamePlaceholder}
          style={styles.childPosition}
          mode="outlined"
          value={firstName} // Set the value prop
          theme={{ colors: { background: Color.white } }}
          placeholderTextColor={Color.gray}
          onChangeText={handleFirstName}
          onFocus={firsrtNameFocus}
          onBlur={firsrtNameBlur}
        />
        <Image
          style={[styles.userIcon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../../assets/user-alt.png")}
        />
      </View>

      <View style={[styles.lastName, styles.passwordLayout]}>
        <TextInput
          forwardedRef={lastNameInput}
          label="Last Name"
          placeholder={lastNamePlaceholder}
          style={styles.childPosition}
          mode="outlined"
          value={lastName} // Set the value prop
          theme={{ colors: { background: Color.white } }}
          placeholderTextColor={Color.gray}
          onChangeText={handleLastName}
          onFocus={lastNameFocus}
          onBlur={lastNameBlur}
        />
        <Image
          style={[styles.userIcon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../../assets/user-alt.png")}
        />
      </View>

      <View style={[styles.email, styles.passwordLayout]}>
        <TextInput
          forwardedRef={emailInput}
          label="Email"
          placeholder={emailPlaceholder}
          style={styles.childPosition}
          mode="outlined"
          value={email} // Set the value prop
          theme={{ colors: { background: Color.white } }}
          placeholderTextColor={Color.gray}
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

      <View style={[styles.password, styles.passwordLayout]}>
        <TextInput
          forwardedRef={passwordInput}
          label="Password"
          placeholder={passwordPlaceholder}
          style={styles.childPosition}
          mode="outlined"
          value={password} // Set the value prop
          theme={{ colors: { background: Color.white } }}
          placeholderTextColor={Color.gray}
          onChangeText={handlePassword}
          onFocus={passwordFocus}
          onBlur={passwordBlur}
          secureTextEntry={true}
        />
        <Image
          style={[styles.lockIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../../assets/lock.png")}
        />
      </View>

      <View style={[styles.password2, styles.passwordLayout]}>
        <TextInput
          forwardedRef={confirmPasswordInput}
          label="Confirm Password"
          placeholder={confirmPasswordPlaceholder}
          style={styles.childPosition}
          mode="outlined"
          value={confirmPassword} // Set the value prop
          theme={{ colors: { background: Color.white } }}
          placeholderTextColor={Color.gray}
          onChangeText={handleConfirmPassword}
          onFocus={confirmPasswordFocus}
          onBlur={confirmPasswordBlur}
          secureTextEntry={true}
        />
        <Image
          style={[styles.chieldCheckIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../../assets/chield-check.png")}
        />
      </View>

      <Text style={[styles.alreadyAMemberContainer]}>
        <Text style={styles.alreadyAMember1}>{"Already a member? "}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.logIn}>Log In</Text>
        </TouchableOpacity>
      </Text>

      {error && (
        <View style={styles.errorMessage}>
          <Text style={styles.error}>Invalid: {errorMsg}</Text>
        </View>
      )}
      {/* {console.log('error', error)} */}
      {/* {!error && (
        <View style={styles.errorMessage}>
          <Text style={styles.error}>Details updated successfuly</Text>
        </View>
      )} */}

      <TouchableOpacity onPress={handleRegisterPress}>
        <LinearGradient
          style={registerButtonStyle()}
          locations={[0, 1]}
          colors={["#29085f", "#b941d7"]}
        >
          <View style={[styles.registerParent, styles.registerPosition]}>
            <Text style={[styles.register2, styles.registerPosition]}>
              {"Register"}
            </Text>
            <Image
              style={styles.vectorIcon2}
              contentFit="cover"
              source={require("../../assets/vector.png")}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
}

export default RegisterForm;
