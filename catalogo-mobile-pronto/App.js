import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./src/screens/LoginScreen.js";
import HomeScreen from "./src/screens/HomeScreen.js";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen.js";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  function handleLogout() {
    setUser(null);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {(props) => <LoginScreen {...props} setUser={setUser} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Home" options={{ headerShown: false }}>
              {(props) => <HomeScreen {...props} user={user} onLogout={handleLogout} />}
            </Stack.Screen>
            <Stack.Screen name="Detalhes" component={ProductDetailsScreen} options={{ title: "Detalhes do Produto" }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
