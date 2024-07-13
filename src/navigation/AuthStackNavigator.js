import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS } from "../assets";
import routes from "../constants/routes";
import AppNavigation from "./AppStackNavigator";
import SignIn from "../screens/auth/SignIn"
import SignUp from "../screens/auth/SignUp"
import SignupDetails from "../screens/auth/SignupDetails";
import SignupPass from "../screens/auth/SignupPass";
import Verification from "../screens/auth/Verification";
import ResetPassword from "../screens/auth/ResetPassword";
import ForgotPassword from "../screens/auth/ForgotPassword";
import Onbarding from "../screens/auth/Onbarding";
import SignupVerification from "../screens/auth/SignupVerification";

const Loading = () => (
  <ActivityIndicator
    size="large"
    style={styles.activityIndicator}
    color={COLORS.primary}
  />
);

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {

  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");
      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (err) {
      console.log("Error @checkOnboarding: ", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthStack.Navigator
      // initialRouteName={viewedOnboarding ? routes.LOGIN : routes.ONBOARD}
      screenOptions={{ headerShown: false }}
    >
      {/* <AuthStack.Screen name={routes.ONBOARD} component={Onbarding} /> */}
      {/* <AuthStack.Screen name={routes.AUTH} component={AuthScreen} /> */}

      <AuthStack.Screen name={routes.LOGIN} component={SignIn} />
      <AuthStack.Screen name={routes.REGISTER} component={SignUp} />
      <AuthStack.Screen name={routes.OTP} component={Verification} />
      <AuthStack.Screen name={routes.SIGNUPVERIFY} component={SignupVerification} />
      <AuthStack.Screen name={routes.SIGNUPDETAILS} component={SignupDetails} />
      <AuthStack.Screen name={routes.SIGNUPPASS} component={SignupPass} />
      <AuthStack.Screen name={routes.RESETPASSWORD} component={ResetPassword} />
      <AuthStack.Screen name={routes.CHOOSEPASS} component={ForgotPassword} />
      <AuthStack.Screen name={routes.APP} component={AppNavigation} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

