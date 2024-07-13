import { useCallback, useEffect, useRef, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./BottomTabNavigation";
import { navigationRef } from "./RootNavigation";
import routes from "../constants/routes";
import Channesl4U from "../screens/general/Channesl4U";
import UpcomingMatches from "../screens/general/UpcomingMatches";
import PersonalInfo from "../screens/general/PersonalInfo";
import ProfilePhoto from "../screens/general/ProfilePhoto";
import SubscriptionPlan from "../screens/general/SubscriptionPlan";
import Security from "../screens/general/Security";
import Refferals from "../screens/general/Refferals";
import PaymentHistory from "../screens/general/PaymentHistory";
import CustomerSupport from "../screens/general/CustomerSupport";
import ConnectedDevices from "../screens/general/ConnectedDevices";


const AppStack = createNativeStackNavigator();


const AppStackNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name={routes.MAIN} component={BottomTabNavigation} />
      <AppStack.Screen name={routes.CHANNELS4U} component={Channesl4U} />
      <AppStack.Screen name={routes.UPCOMINGMATCHES} component={UpcomingMatches} />
      <AppStack.Screen name={routes.PERSONALINFO} component={PersonalInfo} />
      <AppStack.Screen name={routes.PROFILEPHOTO} component={ProfilePhoto} />
      <AppStack.Screen name={routes.SUBPLAN} component={SubscriptionPlan} />
      <AppStack.Screen name={routes.SECURITY} component={Security} />
      <AppStack.Screen name={routes.REFFERALS} component={Refferals} />
      <AppStack.Screen name={routes.PAYHISTORY} component={PaymentHistory} />
      <AppStack.Screen name={routes.CUSTOMERSUPPORT} component={CustomerSupport} />
      <AppStack.Screen name={routes.CONECTEDDEVICES} component={ConnectedDevices} />
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;