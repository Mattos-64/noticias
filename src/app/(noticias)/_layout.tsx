import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function NoticiasTabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#007AFF' }}>
      <Tabs.Screen
        name="tecnologia"
        options={{
          title: 'Notícias',
          headerTitle: 'Notícias',
          tabBarLabel: 'Tecnologia',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hardware-chip-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="esportes"
        options={{
          title: 'Notícias',
          headerTitle: 'Notícias',
          tabBarLabel: 'Esportes',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}