import { Redirect } from 'expo-router';

export default function Index() {
  // Redireciona automaticamente para a aba de tecnologia dentro do grupo de notícias
  return <Redirect href="/(noticias)/tecnologia" />;
}