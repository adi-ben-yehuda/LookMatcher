import * as React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-paper";
import styles from "./Register.style";
import { Color } from "../../styles/GlobalStyles";

import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* //<ScrollView style={styles.scrollView}> */}
      <LinearGradient
        style={styles.register}
        locations={[0, 0.37, 0.67, 1]}
        colors={["#2f085f", "#5b1c89", "#e069eb", "#ecc9f1"]}
      >
        <View style={styles.registerChild} />
        <View style={[styles.firstName, styles.passwordLayout]}>
          <View style={styles.emailChild} />
          <TextInput
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
            placeholder="First name"
            placeholderTextColor={Color.colorGray_100}
          />
          <Image
            style={[styles.userIcon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/user-alt.png")}
          />
        </View>
        <View style={[styles.lastName, styles.passwordLayout]}>
          <View style={styles.emailChild} />
          <TextInput
            style={styles.childPosition}
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
            placeholder="Last name"
            placeholderTextColor={Color.colorGray_100}
          />
          <Image
            style={[styles.userIcon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/user-alt.png")}
          />
        </View>
        <View style={[styles.email, styles.passwordLayout]}>
          <View style={styles.emailChild} />
          <TextInput
            style={styles.childPosition}
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
            placeholder="Email"
            placeholderTextColor={Color.colorGray_100}
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
          <View style={styles.emailChild} />
          <TextInput
            style={styles.childPosition}
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
            placeholder="Password"
            placeholderTextColor={Color.colorGray_100}
            secureTextEntry={true}
          />
          <Image
            style={[styles.lockIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/lock.png")}
          />
        </View>

        <View style={[styles.password2, styles.passwordLayout]}>
          <View style={styles.emailChild} />
          <TextInput
            style={styles.childPosition}
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
            placeholder="Confirm password"
            placeholderTextColor={Color.colorGray_100}
            secureTextEntry={true}
          />
          <Image
            style={[styles.chieldCheckIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/chield-check.png")}
          />
        </View>

        <Text style={[styles.alreadyAMemberContainer]}>
          <Text style={styles.alreadyAMember1}>{`Already a member? `}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.logIn}>Log In</Text>
          </TouchableOpacity>{" "}
        </Text>

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
        <Image
          style={[styles.logoIcon, styles.logoIconPosition]}
          contentFit="cover"
          source={require("../../assets/logoWhite.png")}
        />
      </LinearGradient>
    </ScrollView>
  );
};

export default Register;
