import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useFavorites } from '@/context/FavoritesContext';

export default function DestinationDetailScreen({ route }) {
  const { destination } = route.params;
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(destination.id);

  const handleFavoritePress = () => {
    if (favorite) {
      removeFavorite(destination.id);
    } else {
      addFavorite(destination);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{destination.name}</Text>
        
        <View style={styles.infoContainer}>
          <MaterialIcons name="location-on" size={24} color="#2196F3" />
          <View style={styles.coordinates}>
            <Text style={styles.coordinateText}>
              Latitude: {destination.latitude.toFixed(4)}
            </Text>
            <Text style={styles.coordinateText}>
              Longitude: {destination.longitude.toFixed(4)}
            </Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.favoriteButton}
          onPress={handleFavoritePress}
        >
          <MaterialIcons 
            name={favorite ? "favorite" : "favorite-border"} 
            size={24} 
            color="#FF4081" 
          />
          <Text style={styles.buttonText}>
            {favorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  coordinates: {
    marginLeft: 10,
  },
  coordinateText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  favoriteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#FF4081',
  },
});