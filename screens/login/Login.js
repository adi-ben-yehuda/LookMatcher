import * as React from "react";
import { View, Text, Image } from "react-native";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./Login.style";
import { Color } from "../../styles/GlobalStyles";

const Login = () => {
  return (
    <LinearGradient
      style={styles.login}
      locations={[0, 0.37, 0.67, 1]}
      colors={["#2f085f", "#5b1c89", "#e069eb", "#ecc9f1"]}
    >
      <View style={styles.loginChild} />
      <View style={[styles.email, styles.emailPosition]}>
        <TextInput
          style={styles.childPosition}
          mode="outlined"
          placeholder="Email"
          placeholderTextColor={Color.colorGray_100}
          theme={{ colors: { background: "#fff" } }}
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
        <View style={[styles.passwordChild, styles.childPosition]} />
        <TextInput
          style={styles.childPosition}
          mode="outlined"
          placeholder="Password"
          placeholderTextColor={Color.colorGray_100}
          theme={{ colors: { background: "#fff" } }}
        />{" "}
        <Image
          style={[styles.lockIcon, styles.lockIconLayout]}
          contentFit="cover"
          source={require("../../assets/lock.png")}
        />
      </View>
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
      <Text style={styles.newMemberRegisterContainer}>
        <Text style={styles.newMember}>New Member?</Text>
        <Text style={styles.registerNowTypo}>Register now</Text>
      </Text>
      <Text style={[styles.forgetPassword, styles.registerNowTypo]}>
        Forget password ?
      </Text>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../../assets/logo.png")}
      />
    </LinearGradient>
  );
};

export default Login;
