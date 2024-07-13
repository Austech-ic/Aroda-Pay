import React, { useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStackNavigator from "./AuthStackNavigator";
import * as Linking from "expo-linking";
import AppStackNavigator from "./AppStackNavigator";
import { useSelector } from "react-redux";

const RootStack = createStackNavigator();
const prefix = Linking.createURL("/");
export const navigationRef = React.createRef();

const RootNavigation = () => {
  const userData = useSelector((state) => state.auth.userData);
  // console.log("user data", userData);
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Home: "home",
        Register: "signup",
        Login: "login",
        Notifications: "notifications",
      },
    },
  };

  const url = Linking.useURL();

  // console.log("url", url);

  // useEffect(() => {
  //   console.log("navigationRef.current", navigationRef.current);
  // }, []);

  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {!!userData && userData?.token ? (
            <RootStack.Screen
              name="App"
              component={AppStackNavigator}
              ref={navigationRef}
            />
          ) : (
            <RootStack.Screen name="Auth" component={AuthStackNavigator} />
          )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;