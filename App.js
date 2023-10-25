import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import InputField from "./src/components/InputField";
import Container from "./src/container/Container";
import Login from "./src/screens/Auth/Login";

export default function App() {
  return (
    <View style={style.container}>
      <Login />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
