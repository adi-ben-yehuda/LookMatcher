import * as React from "react";
import { ScrollView } from "react-native";
import RegisterForm from "../../components/registerForm/RegisterForm";
import LogoWhite from "../../components/logoWhite/LogoWhite";

const Register = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <RegisterForm></RegisterForm>
      <LogoWhite></LogoWhite>
    </ScrollView>
  );
};

export default Register;
