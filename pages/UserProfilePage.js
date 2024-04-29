import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigate, useParams } from 'react-router-native';

export default function UserProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Text>User ID: {id}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('/about')}>
        <Text style={styles.buttonText}>Go to About Page</Text>
      </TouchableOpacity>
      <View style={styles.spacer} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('/')}>
        <Text style={styles.buttonText}>Go to Home Page</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#678487',
    },
    title: {
      fontSize: 26,
      marginBottom: 10,
      color: '#fff',
    },
    button: {
      backgroundColor: 'black',
      padding: 10,
      marginVertical: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
    },
    spacer: {
      height: 20,
    },
  });