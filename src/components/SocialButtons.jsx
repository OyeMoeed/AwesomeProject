import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const SocialButtons = ({ label, ...props }) => {
  return (
    <View style={style.socialButtonView}>
      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialButtons;

const style = StyleSheet.create({
  socialButtonView: {
    marginVertical: 5,
  },

  button: {
    width: "100%",
    borderRadius: 10,
    padding: 10,
    alignSelf: "center",
    backgroundColor: "#4285F4",
  },
  buttonText: {
    color: "white",
    display: "flex",
    alignSelf: "center",
  },
});
