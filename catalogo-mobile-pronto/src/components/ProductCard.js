import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description} numberOfLines={2}>{product.description}</Text>
        <Text style={styles.price}>R$ {product.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", borderRadius: 12, marginBottom: 12, padding: 12, flexDirection: "row", elevation: 2, shadowColor: "#000", shadowOpacity: 0.08, shadowRadius: 6 },
  image: { width: 90, height: 90, borderRadius: 10, backgroundColor: "#eee" },
  info: { flex: 1, marginLeft: 12, justifyContent: "center" },
  title: { fontSize: 16, fontWeight: "bold", color: "#222" },
  description: { color: "#666", marginTop: 4 },
  price: { marginTop: 8, fontSize: 16, fontWeight: "bold", color: "#16a34a" },
});
