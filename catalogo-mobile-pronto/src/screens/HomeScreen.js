import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ProductListScreen from "./ProductListScreen.js";

const Tab = createBottomTabNavigator();

export default function HomeScreen({ user, onLogout }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>Olá, {user.nome}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Masculino">
          {(props) => <ProductListScreen {...props} categories={["mens-shirts", "mens-shoes", "mens-watches"]} />}
        </Tab.Screen>
        <Tab.Screen name="Feminino">
          {(props) => <ProductListScreen {...props} categories={["womens-bags", "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches"]} />}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingTop: 45, paddingHorizontal: 18, paddingBottom: 14, backgroundColor: "#2563eb", flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  welcome: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  email: { color: "#dbeafe", fontSize: 13 },
  logoutButton: { backgroundColor: "#fff", paddingHorizontal: 14, paddingVertical: 8, borderRadius: 8 },
  logoutText: { color: "#2563eb", fontWeight: "bold" },
});
