import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function LoginScreen({ setUser }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    if (!email || !senha) {
      Alert.alert("Atenção", "Preencha o e-mail e a senha.");
      return;
    }
    if (!email.includes("@")) {
      Alert.alert("Atenção", "Digite um e-mail válido.");
      return;
    }
    setUser({ nome: "Guilherme", email });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo Mobile</Text>
      <Text style={styles.subtitle}>Produtos masculinos e femininos via API</Text>
      <TextInput style={styles.input} placeholder="Digite seu e-mail" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Digite sua senha" value={senha} onChangeText={setSenha} secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.info}>Login simulado para fins acadêmicos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 24, backgroundColor: "#f5f7fb" },
  title: { fontSize: 32, fontWeight: "bold", color: "#2563eb", textAlign: "center" },
  subtitle: { fontSize: 15, color: "#666", textAlign: "center", marginBottom: 30, marginTop: 8 },
  input: { backgroundColor: "#fff", padding: 15, borderRadius: 10, marginBottom: 14, borderWidth: 1, borderColor: "#ddd" },
  button: { backgroundColor: "#2563eb", padding: 16, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  info: { textAlign: "center", marginTop: 18, color: "#777" },
});
