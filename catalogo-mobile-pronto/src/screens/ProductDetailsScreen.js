import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import api from "../services/api.js";

export default function ProductDetailsScreen({ route }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  async function loadProductDetails() {
    try {
      setLoading(true);
      setErro("");
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      setErro("Não foi possível carregar os detalhes do produto.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { loadProductDetails(); }, []);

  if (loading) return <View style={styles.center}><ActivityIndicator size="large" color="#2563eb" /></View>;
  if (erro !== "") return <View style={styles.center}><Text style={styles.error}>{erro}</Text></View>;
  if (!product) return <View style={styles.center}><Text>Produto não encontrado.</Text></View>;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.category}>Categoria: {product.category}</Text>
        <Text style={styles.price}>R$ {product.price}</Text>
        <Text style={styles.discount}>Desconto: {product.discountPercentage}%</Text>
        <Text style={styles.sectionTitle}>Descrição</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.sectionTitle}>Informações adicionais</Text>
        <Text style={styles.text}>Marca: {product.brand || "Não informado"}</Text>
        <Text style={styles.text}>Avaliação: {product.rating}</Text>
        <Text style={styles.text}>Estoque: {product.stock}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f7fb" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: "100%", height: 280, backgroundColor: "#eee" },
  content: { padding: 20 },
  title: { fontSize: 26, fontWeight: "bold", color: "#222" },
  category: { marginTop: 6, color: "#666" },
  price: { fontSize: 24, fontWeight: "bold", color: "#16a34a", marginTop: 18 },
  discount: { marginTop: 8, color: "#dc2626", fontWeight: "bold" },
  sectionTitle: { marginTop: 24, fontSize: 18, fontWeight: "bold", color: "#222" },
  description: { marginTop: 8, lineHeight: 22, color: "#444" },
  text: { marginTop: 6, color: "#444" },
  error: { color: "red", textAlign: "center" },
});
