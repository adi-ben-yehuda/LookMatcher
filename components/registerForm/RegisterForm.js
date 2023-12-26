import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-paper";
import styles from "./RegisterForm.style";
import { Color } from "../../styles/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { useState, useRef } from "react";

function RegisterForm() {
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

  const checkEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || emailRegex.test(email) === false) {
      return false;
    }
    return true;
  };

  const checkPassword = () => {
    const passwordRegex = /^[A-Za-z0-9]*$/;
    if (
      password === "" ||
      password.length < 8 ||
      passwordRegex.test(password) === false
    ) {
      return false;
    }
    return true;
  };

  const CheckConfirmPassword = () => {
    if (password === confirmPassword) {
      return true;
    }
    return false;
  };

  const handleRegisterPress = () => {
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
      errorList.push(" email");
    }
    if (!checkPassword()) {
      setError(true);
      errorList.push(" password");
    }
    if (!CheckConfirmPassword()) {
      setError(true);
      errorList.push(" confirm password");
    }

    if (errorList.length > 0) {
      setError(true);
      setErrorList(errorList);
    } else {
      // All the fields are correct
      navigation.navigate("Login");
    }
  };

  // Show all errors separated by a comma
  const renderList = errorList.map((item, index) => (
    <Text key={index} style={styles.error}>
      {item}
      {index !== errorList.length - 1 && ","}
    </Text>
  ));

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

      {/* Show error message if error is true */}
      {error && (
        <View style={styles.errorMessage}>
          <Text style={styles.error}>Invalid{renderList}</Text>
        </View>
      )}

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
