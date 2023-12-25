import * as React from "react";
import { View, Text, Image } from "react-native";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./LoginForm.style";

const LoginForm = () => {
  const navigation = useNavigation();

  const emailInput = React.useRef(null);
  const passwordInput = React.useRef(null);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailPlaceholder, setEmailPlaceholder] = React.useState("Email");
  const [passwordPlaceholder, setPasswordPlaceholder] =
    React.useState("Password");

  const handleLoginPress = () => {
    navigation.navigate("Home");
  };

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

      <View style={[styles.password, styles.emailPosition]}>
        <TextInput
          forwardedRef={passwordInput}
          label="Password"
          placeholder={passwordPlaceholder}
          style={styles.childPosition}
          mode="outlined"
          value={password}
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
          style={[styles.lockIcon, styles.lockIconLayout]}
          contentFit="cover"
          source={require("../../assets/lock.png")}
        />
      </View>

      <TouchableOpacity onPress={handleLoginPress}>
        <LinearGradient
          style={styles.login1}
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
