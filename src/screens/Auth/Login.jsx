import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import Container from "../../container/Container";
import InputField from "../../components/InputField";
import StyledButton from "../../components/StyledButton";
import SocialButtons from "../../components/SocialButtons";

const Login = () => {
  const [email, setEmail] = useState("");
  return (
    <Container>
      <InputField placeholder="Enter Your Email" label="Email" value={email} />
      <InputField placeholder="********" label="Password" />
      <StyledButton label="Sign In" />
      <View style={style.text}>
        <TouchableOpacity>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={style.socialView}>
        <SocialButtons label="Continue With Facebook"></SocialButtons>
        <SocialButtons label="Continue With Google"></SocialButtons>
      </View>
      <View style={style.text}>
        <Text>Need An Account?</Text>
        <TouchableOpacity>
          <Text> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Login;

const style = StyleSheet.create({
  text: {
    flexDirection: "row",
    justifyContent: "center",
  },
  socialView: {
    marginVertical: 30,
  },
});
