import * as React from "react";
import { View} from "react-native";

import LoginForm from "../components/loginForm/LoginForm";
import LogoWhite from "../components/logoWhite/LogoWhite";

const Login = () => {
  return (
    <View style={{ flex: 1 }}>
      <LoginForm />
      <LogoWhite />
    </View>
  );
};

export default Login;
