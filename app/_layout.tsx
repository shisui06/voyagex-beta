import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { FavoritesProvider } from '../context/FavoritesContext';

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case '(tabs)/index':
                iconName = 'home';
                break;
              case '(tabs)/DestinationsMapScreen':
                iconName = 'map';
                break;
              case '(tabs)/FavoritesScreen':
                iconName = 'favorite';
                break;
              default:
                iconName = 'help';
            }
            return <MaterialIcons name={iconName as keyof typeof MaterialIcons.glyphMap} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2196F3',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tabs.Screen
          name="(tabs)/index"
          options={{ title: 'Accueil' }}
        />
        <Tabs.Screen
          name="(tabs)/DestinationsMapScreen"
          options={{ title: 'Carte' }}
        />
        <Tabs.Screen
          name="(tabs)/FavoritesScreen"
          options={{ title: 'Favoris' }}
        />
      </Tabs>
    </FavoritesProvider>
  );
}
