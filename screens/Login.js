import * as React from "react";
import { ScrollView, View } from "react-native";

import LoginForm from "../components/loginForm/LoginForm";
import LogoWhite from "../components/logoWhite/LogoWhite";

const Login = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <LoginForm />
        <LogoWhite />
      </ScrollView>
    </View>
  );
};

export default Login;
