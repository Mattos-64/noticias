import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';

export default function DetalheNoticiaScreen() {
  const { titulo, conteudo, categoria } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    if (titulo) {
      navigation.setOptions({ title: String(titulo) });
    }
  }, [titulo]);

  return (
    <View style={styles.container}>
      <Text style={styles.categoria}>{String(categoria).toUpperCase()}</Text>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.conteudo}>{conteudo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  categoria: { fontSize: 12, fontWeight: 'bold', color: '#666', marginBottom: 8 },
  titulo: { fontSize: 22, fontWeight: 'bold', color: '#111', marginBottom: 16 },
  conteudo: { fontSize: 16, color: '#444', lineHeight: 24 }
});