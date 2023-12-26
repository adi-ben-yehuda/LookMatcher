import * as React from "react";
import { ScrollView } from "react-native";
import LoginForm from "../components/loginForm/LoginForm";
import LogoWhite from "../components/logoWhite/LogoWhite";

const Login = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LoginForm></LoginForm>
      <LogoWhite></LogoWhite>
    </ScrollView>
  );
};

export default Login;
