import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="flight" size={50} color="#2196F3" />
        <Text style={styles.title}>Bienvenue sur VoyageX</Text>
        <Text style={styles.subtitle}>
          Explorez le monde et sauvegardez vos destinations préférées
        </Text>
      </View>

      <View style={styles.featuresContainer}>
        <View style={styles.featureItem}>
          <MaterialIcons name="map" size={30} color="#FFB69F" />
          <Text style={styles.featureTitle}>Carte Interactive</Text>
          <Text style={styles.featureDescription}>
            Découvrez des destinations à travers le monde avec notre carte interactive
          </Text>
        </View>

        <View style={styles.featureItem}>
          <MaterialIcons name="favorite" size={30} color="#BCB9F9" />
          <Text style={styles.featureTitle}>Favoris</Text>
          <Text style={styles.featureDescription}>
            Sauvegardez vos destinations préférées pour y accéder rapidement
          </Text>
        </View>

        <View style={styles.featureItem}>
          <MaterialIcons name="place" size={30} color="#1694FA" />
          <Text style={styles.featureTitle}>Destinations</Text>
          <Text style={styles.featureDescription}>
            Explorez Montréal, Tokyo, New York, Barcelone et plus encore
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9A9F',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
    paddingHorizontal: 20,
  },
  featuresContainer: {
    padding: 20,
  },
  featureItem: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
});
