import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  // Loading custom fonts before rendering the app
  const [fontsLoaded] = useFonts({                       // This ensures fonts are available when components mount
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsSemi: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  // Don't render anything until fonts are loaded to avoid flash of unstyled text
  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
