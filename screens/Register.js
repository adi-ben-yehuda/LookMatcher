import * as React from "react";
import { ScrollView, View } from "react-native";
import RegisterForm from "../components/registerForm/RegisterForm";
import LogoWhite from "../components/logoWhite/LogoWhite";

const Register = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <RegisterForm />
        <LogoWhite />
      </ScrollView>

    </View>
  );
};

export default Register;
