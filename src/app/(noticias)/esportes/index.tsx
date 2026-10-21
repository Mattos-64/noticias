import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

function CardNoticia({ categoria, titulo, resumo, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.categoria}>{categoria.toUpperCase()}</Text>
      <Text style={styles.tituloCard}>{titulo}</Text>
      <Text style={styles.resumo} numberOfLines={2}>{resumo}</Text>
    </TouchableOpacity>
  );
}

export default function ListaEsportesScreen() {
  const router = useRouter();

  const noticiasEsportes = [
    {
      id: '1',
      categoria: 'Esportes',
      titulo: 'Briga pelo Título: Palmeiras e Flamengo na Reta Final',
      resumo: 'A disputa ponto a ponto entre Palmeiras e Flamengo promete fortes emoções até a última jornada...',
      conteudo: 'A reta final do campeonato brasileiro traz um cenário eletrizante na parte superior da tabela. Palmeiras e Flamengo seguem isolados na liderança, travando uma batalha intensa rodada após rodada pelo título nacional. Cada deslize pode custar a taça, aumentando a pressão sobre os dois elencos.'
    },
    {
      id: '2',
      categoria: 'Esportes',
      titulo: 'G-4 e Libertadores: Três clubes por uma única vaga',
      resumo: 'Fluminense, Atlético e Bahia entram em campo focados em garantir a última vaga no torneio continental...',
      conteudo: 'A briga por uma classificação para a Copa Libertadores está ao rubro. Fluminense, Atlético e Bahia encontram-se em condições muito equilibradas na tabela e disputam centimetricamente a última vaga disponível para o G-4. O rendimento nos confrontos diretos será o fator chave de desempate.'},
    {
      id: '3',
      categoria: 'Esportes',
      titulo: 'Desespero no Z-4: A luta contra o rebaixamento',
      resumo: 'Corinthians, Internacional e Grêmio lutam rodada a rodada para fugir do descenso na tabela...',
      conteudo: 'A parte inferior da tabela traz uma das maiores cargas dramáticas dos últimos anos. Gigantes do futebol brasileiro como Corinthians, Internacional e Grêmio estão envolvidos diretamente na briga contra o rebaixamento. A tensão toma conta dos balneários enquanto as equipas procuram pontos cruciais para garantir a permanência na elite.'}
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.headerTitle}>Esportes</Text>
      
      {noticiasEsportes.map((item) => (
        <CardNoticia
          key={item.id}
          categoria={item.categoria}
          titulo={item.titulo}
          resumo={item.resumo}
          onPress={() => router.push({
            pathname: '/(noticias)/esportes/detalhe',
            params: { titulo: item.titulo, conteudo: item.conteudo, categoria: item.categoria }
          })}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  contentContainer: { padding: 16 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 15, color: '#333' },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 12, elevation: 2, borderWidth: 1, borderColor: '#eee' },
  categoria: { fontSize: 11, fontWeight: 'bold', color: '#666', marginBottom: 4 },
  tituloCard: { fontSize: 16, fontWeight: 'bold', color: '#111', marginBottom: 6 },
  resumo: { fontSize: 13, color: '#666' }
});