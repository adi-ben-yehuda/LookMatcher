import * as React from "react";
import { View } from "react-native";
import ResetForm from "../components/resetPassword/reset1";
import BackButton from "../components/backButtonWhite/BackButton";

const Reset = () => {
  return (
    <View style={{ flex: 1 }}>
      <BackButton></BackButton>
      <ResetForm></ResetForm>
    </View>
  );
};

export default Reset;
