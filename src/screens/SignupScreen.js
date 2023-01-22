import React, { useContext } from "react";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <NavigationEvents
            onWillBlur={clearErrorMessage}
            onWillFocus={clearErrorMessage}
          />
          <AuthForm
            headerText="Sign Up for Tracker"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={signup}
          />
          <NavLink
            routeName="Signin"
            text="Already have an account? Sign in instead!"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
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

export default SignupScreen;
