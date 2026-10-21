import { Stack } from 'expo-router';

export default function EsportesStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="detalhe" options={{ title: 'Detalhes da Notícia' }} />
    </Stack>
  );
}