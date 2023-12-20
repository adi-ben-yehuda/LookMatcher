import * as React from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./Register.style";

const Register = () => {
  return (
    <LinearGradient
      style={styles.register}
      locations={[0, 0.37, 0.67, 1]}
      colors={["#2f085f", "#5b1c89", "#e069eb", "#ecc9f1"]}
    >
      <View style={styles.registerChild} />
      <View style={[styles.email, styles.passwordLayout]}>
        <View style={styles.emailChild} />
        <Text style={[styles.email1, styles.passwordTypo]}>Email</Text>
        <View style={[styles.message, styles.iconPosition]}>
          <View style={styles.messageChild} />
          <Image
            style={[styles.messageItem, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/vector-3.png")}
          />
        </View>
      </View>
      <View style={[styles.password, styles.passwordLayout]}>
        <View style={styles.emailChild} />
        <Text style={[styles.password1, styles.passwordTypo]}>Password</Text>
        <Image
          style={[styles.lockIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../../assets/lock.png")}
        />
      </View>
      <View style={[styles.password2, styles.passwordLayout]}>
        <View style={styles.emailChild} />
        <Text style={[styles.confirmPassword, styles.passwordTypo]}>
          Confirm password
        </Text>
        <Image
          style={[styles.chieldCheckIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../../assets/chield-check.png")}
        />
      </View>
      <Text style={[styles.alreadyAMemberContainer, styles.logoIconPosition]}>
        <Text style={styles.alreadyAMember1}>{`Already a member? `}</Text>
        <Text style={styles.logIn}>Log In</Text>
      </Text>
      <View style={[styles.lastName, styles.passwordLayout]}>
        <View style={styles.emailChild} />
        <Text style={[styles.fullName, styles.passwordTypo]}>First name</Text>
        <Image
          style={[styles.userIcon2, styles.iconLayout]}
          contentFit="cover"
        />
      </View>
      <View style={[styles.firstName, styles.passwordLayout]}>
        <View style={styles.emailChild} />
        <Text style={[styles.fullName, styles.passwordTypo]}>Last name</Text>
        <Image
          style={[styles.userIcon2, styles.iconLayout]}
          contentFit="cover"
        />
      </View>
      <Image
        style={[styles.userAltIcon2, styles.userIconLayout]}
        contentFit="cover"
        source={require("../../assets/user-alt.png")}
      />
      <Image
        style={[styles.userAltIcon3, styles.userIconLayout]}
        contentFit="cover"
        source={require("../../assets/user-alt.png")}
      />
      <LinearGradient
        style={styles.register1}
        locations={[0, 1]}
        colors={["#29085f", "#b941d7"]}
      >
        <View style={[styles.registerParent, styles.registerPosition]}>
          <Text
            style={[styles.register2, styles.registerPosition]}
          >{`Register`}</Text>
          <Image
            style={styles.vectorIcon2}
            contentFit="cover"
            source={require("../../assets/vector.png")}
          />
        </View>
      </LinearGradient>
      <Image
        style={[styles.logoIcon, styles.logoIconPosition]}
        contentFit="cover"
        source={require("../../assets/logo.png")}
      />
    </LinearGradient>
  );
};

export default Register;
