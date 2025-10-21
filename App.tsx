import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./screens/routes/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}