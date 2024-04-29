import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('/')}>
        <Text style={styles.buttonText}>Go Home (Push)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('/', { replace: true })}>
        <Text style={styles.buttonText}>Go Home (Replace)</Text>
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
