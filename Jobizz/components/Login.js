import { View, Text, StyleSheet } from "react-native";
import { Header } from './Header';
import { LoginForm } from "./LoginForm";

export const Login = ({navigation}) => {
    return (
      <View>
        <Header/>
        <LoginForm onPress={() => navigation.navigate("Home")}/>
      </View>
    );
  }