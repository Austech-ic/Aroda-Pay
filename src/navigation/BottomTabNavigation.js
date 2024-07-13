import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, StyleSheet, View } from "react-native";
import routes from "../constants/routes";

import Home from "../screens/tab/Home";
import Notifications from "../screens/tab/Notification";
import Profile from "../screens/tab/Profile";
import Tv from "../screens/tab/Tv";
import { VideoPlay, Home2, User, Notification } from "iconsax-react-native";
import { COLORS } from "../assets";


const Tab = createBottomTabNavigator();

const tabIconMapping = {
  [routes.HOME]: {
    filledIcon: <Home2 color={COLORS.primary} variant="Bold" size={25} />,
    outlineIcon: <Home2 color="#838383" variant="Linear" size={25} />,
  },
  [routes.TV]: {
    colorCode: "#3B6896",
    outlineColorCode: "#9CA4AB",
    filledIcon: <VideoPlay color={COLORS.primary} variant="Bulk" size={25} />,
    outlineIcon: <VideoPlay color="#838383" variant="Linear" size={25} />,
  },
  [routes.NOTIFICATIONS]: {
    filledIcon: (
      <Notification color={COLORS.primary} variant="Bold" size={25} />
    ),
    outlineIcon: <Notification color="#838383" variant="Linear" size={25} />,
  },
  [routes.PROFILE]: {
    filledIcon: <User color={COLORS.primary} variant="Bold" size={25} />,
    outlineIcon: <User color="#838383" variant="Linear" size={25} />,
  },
};

function BottomTabNavigaton() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarInactiveTintColor: "#838383",
        tabBarStyle: styles.tab,
        tabBarLabelStyle: styles.label,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({ focused }) => {
          const { filledIcon, outlineIcon } = tabIconMapping[route.name] || {};

          return <View>{focused ? filledIcon : outlineIcon}</View>;
        },
      })}
    >
      <Tab.Screen name={routes.HOME} component={Home} />
      <Tab.Screen name={routes.TV} component={Tv} />
      <Tab.Screen name={routes.NOTIFICATIONS} component={Notifications} />
      <Tab.Screen name={routes.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigaton;

const styles = StyleSheet.create({
  tab: {
    borderTopWidth: 0,
    backgroundColor: "#ffffff",
    marginBottom: 2,
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },
  label: {
    fontFamily: "Poppins-regular",
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0.2,
  },
});
