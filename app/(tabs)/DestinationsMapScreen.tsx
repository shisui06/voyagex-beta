import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useFavorites } from '@/context/FavoritesContext';
import { MaterialIcons } from '@expo/vector-icons';

export default function DestinationsMapScreen({ navigation }: { navigation: any }) {
  const { favorites } = useFavorites();
  const destinations = [
    { id: '1', name: 'Montréal', latitude: 45.5017, longitude: -73.5673 },
    { id: '2', name: 'Tokyo', latitude: 35.6762, longitude: 139.6503 },
    { id: '3', name: 'New York', latitude: 40.7128, longitude: -74.0060 },
    { id: '4', name: 'Barcelone', latitude: 41.3851, longitude: 2.1734 }
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 45.5017,
          longitude: -73.5673,
          latitudeDelta: 80,
          longitudeDelta: 80,
        }}
      >
        {destinations.map((destination) => (
          <Marker
            key={destination.id}
            coordinate={{
              latitude: destination.latitude,
              longitude: destination.longitude,
            }}
          >
            <Callout onPress={() => {
              navigation.navigate('DestinationDetailScreen', { destination });
            }}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutTitle}>{destination.name}</Text>
                {favorites.some(fav => fav.id === destination.id) && (
                  <MaterialIcons name="favorite" size={16} color="#FF4081" />
                )}
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  calloutContainer: {
    padding: 8,
    minWidth: 120,
  },
  calloutTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});