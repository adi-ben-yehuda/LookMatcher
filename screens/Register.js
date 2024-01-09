import * as React from "react";
import { View } from "react-native";
import RegisterForm from "../components/registerForm/RegisterForm";
import LogoWhite from "../components/logoWhite/LogoWhite";

const Register = () => {
  return (
    <View style={{ flex: 1 }}>
      <RegisterForm />
      <LogoWhite />
    </View>
  );
};

export default Register;
