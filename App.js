import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-gesture-handler";
import { useState, useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as Font from "expo-font";
import {
  ActivityIndicator,
  StyleSheet,
  Platform,
  PermissionsAndroid,
} from "react-native";
import { COLORS } from "./src/assets";

import store from "./src/redux/store";
import { getUserData } from "./src/utils/utils";
import { saveUserData } from "./src/redux/actions/auth";
import actions from "./src/redux/actions";
import routes from "./src/constants/routes";
import RootNavigation from "./src/navigation/RootNavigation";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import FlashMessage from "react-native-flash-message";
// import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";
import * as Updates from "expo-updates";
import * as Device from "expo-device";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import * as AppRoot from "./src/navigation/AppRoot";
// import { MixpanelProvider } from "./src/utils/MixpanelProvider";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// async function registerForPushNotificationsAsync() {
//   let token;

//   if (Platform.OS === "android") {
//     await Notifications.setNotificationChannelAsync("default", {
//       name: "default",
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: "#FF231F7C",
//     });
//   }

//   if (Device.isDevice) {
//     const { status: existingStatus } =
//       await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== "granted") {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== "granted") {
//       alert("Failed to get push token for push notification!");
//       return;
//     }
//     const projectId =
//       Constants?.expoConfig?.extra?.eas?.projectId ??
//       Constants?.easConfig?.projectId;
//     if (!projectId) {
//       handleRegistrationError("Project ID not found");
//     }

//     token = (
//       await Notifications.getExpoPushTokenAsync({
//         projectId,
//       })
//     ).data;
//     await AsyncStorage.setItem("deviceToken", token);
//     const ttoken = await AsyncStorage.getItem("deviceToken");
//     console.log("device token", ttoken);
//     const response = await actions.installed({
//       devicetoken: token,
//       deviceOS: Platform.OS,
//       application_id: "client_app",
//     });
//     console.log("app installed ==>>>>>", response);
//   } else {
//     // alert('Must use physical device for Push Notifications');
//   }
//   return token;
// }

const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     cacheTime: Infinity,
  //   },
  // },
});

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  // const [expoPushToken, setExpoPushToken] = useState("");
  // const [notification, setNotification] = useState(false);
  // const notificationListener = useRef();
  // const responseListener = useRef();

  // useEffect(() => {
  //   setTimeout(async () => {
  //     const { granted, status } = await requestTrackingPermissionsAsync();
  //     if (status === "granted") {
  //       console.log("Yay! I have user permission to track data");
  //     }
  //   }, 5000);
  // }, []);

  // useEffect(() => {
  //   registerForPushNotificationsAsync().then((token) =>
  //     setExpoPushToken(token)
  //   );
  //   notificationListener.current =
  //     Notifications.addNotificationReceivedListener((notification) => {
  //       setNotification(notification);
  //     });
  //   responseListener.current =
  //     Notifications.addNotificationResponseReceivedListener((response) => {
  //       console.log("notification response", JSON.stringify(response));

  //       AppRoot.navigate(routes.NOTIFICATIONS, { userName: "Lucy" });
  //     });
  //   return () => {
  //     Notifications.removeNotificationSubscription(
  //       notificationListener.current
  //     );
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);

  const loadFont = async () => {
    try {
      await Font.loadAsync({
        Poppins: require("./src/assets/fonts/Poppins/Poppins-Light.ttf"),
        "Poppins-bold": require("./src/assets/fonts/Poppins/Poppins-Bold.ttf"),
        "Poppins-semibold": require("./src/assets/fonts/Poppins/Poppins-SemiBold.ttf"),
        "Poppins-regular": require("./src/assets/fonts/Poppins/Poppins-Regular.ttf"),
        "Poppins-light": require("./src/assets/fonts/Poppins/Poppins-Light.ttf"),
        "Poppins-thin": require("./src/assets/fonts/Poppins/Poppins-Thin.ttf"),
      });
      setFontLoaded(true);
    } catch (error) {
      console.error("Error loading fonts:", error);
    }
  };

  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        Alert.alert(
          "Update App",
          "Download updates for better experience",
          [{ text: "Yes", onPress: downloadUpdates }, { text: "No" }],
          { cancelable: true }
        );
      }
    } catch (error) {}
  }
  async function downloadUpdates() {
    await Updates.fetchUpdateAsync();
    await Updates.reloadAsync();
  }

  useEffect(() => {
    (async () => {
      const userData = await getUserData();
      // console.log("user data App.js", userData);
      if (!!userData) {
        saveUserData(userData);
      }
    })();
    loadFont();
    onFetchUpdateAsync();
  }, []);

  if (!fontLoaded) {
    return (
      <ActivityIndicator
        style={styles.activityIndicator}
        size="large"
        color={COLORS.primary}
      />
    );
  }

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/* <MixpanelProvider> */}
          <GestureHandlerRootView style={{ flex: 1 }}>
            <RootNavigation />
            <FlashMessage floating={true} position="top" />
          </GestureHandlerRootView>
        {/* </MixpanelProvider> */}
      </QueryClientProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
