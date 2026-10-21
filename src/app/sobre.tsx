import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SobreScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.tituloHeader}>Sobre</Text>
      
      <View style={styles.card}>
        <Ionicons name="newspaper" size={80} color="#333" style={styles.imagem} />
        
        <Text style={styles.descricao}>
          Esse é o Mini App de Notícias.{'\n'}
          Você vai praticar diferentes tipos de navegação com React-Native:
        </Text>
        <Text style={styles.topico}>• Drawer (raiz)</Text>
        <Text style={styles.topico}>• Tabs (Tecnologia/Esportes)</Text>
        <Text style={styles.topico}>• Stacks (Lista → Detalhes)</Text>
      </View>

      <TouchableOpacity 
        style={styles.botaoVoltar} 
        onPress={() => router.replace('/(noticias)/tecnologia')}
      >
        <Text style={styles.textoBotao}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 20, justifyContent: 'center' },
  tituloHeader: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 20, alignItems: 'center', elevation: 3, marginBottom: 20 },
  imagem: { marginBottom: 15 },
  descricao: { fontSize: 15, color: '#333', textAlign: 'center', marginBottom: 15, lineHeight: 22 },
  topico: { fontSize: 14, color: '#555', alignSelf: 'flex-start', marginLeft: 40, marginBottom: 5 },
  botaoVoltar: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8, alignItems: 'center' },
  textoBotao: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});