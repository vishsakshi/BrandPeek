import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsSemi: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
