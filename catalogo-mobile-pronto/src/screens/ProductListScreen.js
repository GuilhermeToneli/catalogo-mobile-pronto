import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import api from "../services/api.js";
import ProductCard from "../components/ProductCard.js";

const labels = {
  "mens-shirts": "Camisas",
  "mens-shoes": "Calçados",
  "mens-watches": "Relógios",
  "womens-bags": "Bolsas",
  "womens-dresses": "Vestidos",
  "womens-jewellery": "Joias",
  "womens-shoes": "Calçados",
  "womens-watches": "Relógios",
};

export default function ProductListScreen({ categories, navigation }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  async function loadProducts() {
    try {
      setLoading(true);
      setErro("");
      const response = await api.get(`/products/category/${selectedCategory}`);
      setProducts(response.data.products || []);
    } catch (error) {
      setErro("Não foi possível carregar os produtos. Verifique sua conexão.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity key={category} style={[styles.categoryButton, selectedCategory === category && styles.categoryButtonActive]} onPress={() => setSelectedCategory(category)}>
            <Text style={[styles.categoryText, selectedCategory === category && styles.categoryTextActive]}>{labels[category] || category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {loading && <ActivityIndicator size="large" color="#2563eb" />}
      {erro !== "" && <Text style={styles.error}>{erro}</Text>}
      {!loading && erro === "" && (
        <FlatList data={products} keyExtractor={(item) => String(item.id)} renderItem={({ item }) => <ProductCard product={item} onPress={() => navigation.navigate("Detalhes", { id: item.id })} />} contentContainerStyle={{ paddingBottom: 20 }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 14, backgroundColor: "#f5f7fb" },
  categoryContainer: { flexDirection: "row", flexWrap: "wrap", marginBottom: 14, gap: 8 },
  categoryButton: { backgroundColor: "#e5e7eb", paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20 },
  categoryButtonActive: { backgroundColor: "#2563eb" },
  categoryText: { color: "#333", fontSize: 12 },
  categoryTextActive: { color: "#fff", fontWeight: "bold" },
  error: { textAlign: "center", color: "red", marginTop: 20 },
});
