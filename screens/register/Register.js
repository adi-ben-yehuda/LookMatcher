import * as React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-paper";
import styles from "./Register.style";
import { Color } from "../../styles/GlobalStyles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useRef } from "react";
// import { Tooltip } from "react-native-elements";

const Register = () => {
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
  const [error, setError] = useState("");

  const [emailPlaceholder, setEmailPlaceholder] = useState("Email");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password");
  const [confirmPasswordPlaceholder, setConfirmPasswordPlaceholder] =
    useState("Confirm Password");
  const [firstNamePlaceholder, setFirstNamePlaceholder] =
    useState("First Name");
  const [lastNamePlaceholder, setLastNamePlaceholder] = useState("Last Name");

  const [isValidEmail, setIsValidEmail] = useState(true);

  const checkEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email) && email.trim() !== "";
    setIsValidEmail(isValid);
  };

  const handleRegisterPress = () => {
    checkEmail();

    if (!isValidEmail) {
      setError("Invalid Email");
    } else {
      setError("");
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
            theme={{ colors: { background: "#fff" } }}
            placeholderTextColor={Color.colorGray_100}
            onChangeText={(text) => setFirstName(text)}
            onFocus={() => {
              firstNameInput.current && firstNameInput.current.handleFocus();
              setFirstNamePlaceholder("");
            }}
            onBlur={() => {
              firstNameInput.current && firstNameInput.current.handleBlur();
              setFirstNamePlaceholder("First Name");
            }}
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
            theme={{ colors: { background: "#fff" } }}
            placeholderTextColor={Color.colorGray_100}
            onChangeText={(text) => setLastName(text)}
            onFocus={() => {
              lastNameInput.current && lastNameInput.current.handleFocus();
              setLastNamePlaceholder("");
            }}
            onBlur={() => {
              lastNameInput.current && lastNameInput.current.handleBlur();
              setLastNamePlaceholder("Last Name");
            }}
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
            theme={{ colors: { background: "#fff" } }}
            placeholderTextColor={Color.colorGray_100}
            onChangeText={(text) => setEmail(text)}
            onFocus={() => {
              emailInput.current && emailInput.current.handleFocus();
              setEmailPlaceholder("");
            }}
            onBlur={() => {
              emailInput.current && emailInput.current.handleBlur();
              setEmailPlaceholder("Email");
            }}
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
          {/* <Tooltip
            popover={<Text>Your tooltip message here</Text>}
            height={50} // Adjust the height as needed
            width={200} // Adjust the width as needed
          > */}
          {/* <View> */}
          <TextInput
            forwardedRef={passwordInput}
            label="Password"
            placeholder={passwordPlaceholder}
            style={styles.childPosition}
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
            placeholderTextColor={Color.colorGray_100}
            onChangeText={(text) => setPassword(text)}
            onFocus={() => {
              passwordInput.current && passwordInput.current.handleFocus();
              setPasswordPlaceholder("");
            }}
            onBlur={() => {
              passwordInput.current && passwordInput.current.handleBlur();
              setPasswordPlaceholder("Password");
            }}
            secureTextEntry={true}
          />
          <Image
            style={[styles.lockIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/lock.png")}
          />
        </View>
        {/* </Tooltip>
        </View> */}

        <View style={[styles.password2, styles.passwordLayout]}>
          <TextInput
            forwardedRef={confirmPasswordInput}
            label="Confirm Password"
            placeholder={confirmPasswordPlaceholder}
            style={styles.childPosition}
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
            placeholderTextColor={Color.colorGray_100}
            onChangeText={(text) => setConfirmPassword(text)}
            onFocus={() => {
              confirmPasswordInput.current &&
                confirmPasswordInput.current.handleFocus();
              setConfirmPasswordPlaceholder("");
            }}
            onBlur={() => {
              confirmPasswordInput.current &&
                confirmPasswordInput.current.handleBlur();
              setConfirmPasswordPlaceholder("Confirm Password");
            }}
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
          </TouchableOpacity>{" "}
        </Text>

        <Text style={styles.errorMessage}>{" " + error}</Text>

        <TouchableOpacity onPress={handleRegisterPress}>
          <LinearGradient
            style={styles.register1}
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
    </ScrollView>
  );
};

export default Register;
