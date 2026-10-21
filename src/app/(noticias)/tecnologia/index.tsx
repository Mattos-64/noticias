import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

// Componente reutilizável exigido no desafio
function CardNoticia({ categoria, titulo, resumo, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.categoria}>{categoria.toUpperCase()}</Text>
      <Text style={styles.tituloCard}>{titulo}</Text>
      <Text style={styles.resumo} numberOfLines={2}>{resumo}</Text>
    </TouchableOpacity>
  );
}

export default function ListaTecnologiaScreen() {
  const router = useRouter();

  const noticiasTech = [
    {
      id: '1',
      categoria: 'Tecnologia',
      titulo: 'Gemini',
      resumo: 'Excelente para integração nativa com ferramentas Google, busca em tempo real e análise multimodal...',
      conteudo: 'O Gemini destaca-se na usabilidade diária por sua integração direta com o ecossistema Google (Docs, Gmail, Drive). Ele é ideal para resumir vídeos longos do YouTube, analisar imagens e gráficos instantaneamente, processar arquivos direto da nuvem e realizar pesquisas com informações atualizadas em tempo real na web.'
    },
    {
      id: '2',
      categoria: 'Tecnologia',
      titulo: 'GPT',
      resumo: 'Focado em resolução de problemas lógicos, criação de automações e suporte a múltiplos plugins...',
      conteudo: 'A usabilidade do GPT brilha na resolução de problemas complexos que exigem raciocínio passo a passo, como matemática avançada, lógica de negócios e criação de fluxos de trabalho. Além disso, a capacidade de usar a loja de GPTs customizados e interpretar dados estruturados torna a ferramenta muito versátil para automação de tarefas cotidianas.'
    },
    {
      id: '3',
      categoria: 'Tecnologia',
      titulo: 'Claude',
      resumo: 'A melhor escolha para refatoração de código longo, revisão textual natural e leitura de documentos extensos...',
      conteudo: 'O Claude é referência em usabilidade para desenvolvedores e redatores. Sua enorme janela de contexto permite colar arquivos inteiros de código para refatoração, debug e arquitetura de software sem perder o fio da meada. Para escrita, destaca-se por gerar textos com tom extremamente natural, fluido e menos robótico.'
    }
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.headerTitle}>Tecnologia</Text>
      
      {noticiasTech.map((item) => (
        <CardNoticia
          key={item.id}
          categoria={item.categoria}
          titulo={item.titulo}
          resumo={item.resumo}
          onPress={() => router.push({
            pathname: '/(noticias)/tecnologia/detalhe',
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