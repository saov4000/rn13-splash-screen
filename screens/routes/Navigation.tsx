import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../SplashScreen";
import HomeScreen from "../Home";

const Stack = createStackNavigator();

export default function StackRoutes() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula verificação (token, login, API, etc.)
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoading ? (
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : (
        <Stack.Screen name="Home" component={HomeScreen} />
      )}
    </Stack.Navigator>
  );
}
