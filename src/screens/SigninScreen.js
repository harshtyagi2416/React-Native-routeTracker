import React, { useContext } from "react";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <NavigationEvents
            onWillBlur={clearErrorMessage}
            onWillFocus={clearErrorMessage}
          />
          <AuthForm
            headerText="Sign In to your Account"
            errorMessage={state.errorMessage}
            submitButtonText="Sign In"
            onSubmit={signin}
          />
          <NavLink routeName="Signup" text="Don't have an account? Sign up!" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },

  scrollView: {
    paddingVertical: 150,
  },
});

export default SigninScreen;
