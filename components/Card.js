import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FavoritesContext } from '../context/FavoritesContext';

export default function Card({ place, onPress }) {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);



  const isFavorite = favorites.some(fav => fav.id === place.id);

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{place.name}</Text>
        {isFavorite && (
          <TouchableOpacity onPress={() => removeFavorite(place.id)} style={styles.iconButton}>
            <MaterialIcons name="close" size={24} color="red" />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.coordinates}>
        Latitude: {place.latitude}, Longitude: {place.longitude}
      </Text>
      {place.name === 'Montréal' && (
        <Image source={require('../assets/images/montreal.jpg')} style={styles.image} />
      )}
      {place.name === 'Tokyo' && (
        <Image source={require('../assets/images/tokyo.jpg')} style={styles.image} />
      )}
      {place.name === 'New York' && (
        <Image source={require('../assets/images/newyork.jpeg')} style={styles.image} />
      )}
      {place.name === 'Barcelone' && (
        <Image source={require('../assets/images/bercelona.jpeg')} style={styles.image} />
      )}
      {!isFavorite && (
        <View style={styles.buttonContainer}>
          <Button title="Add to Favorites" onPress={() => addFavorite(place)} />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  coordinates: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
  iconButton: {
    padding: 5,
  },
});