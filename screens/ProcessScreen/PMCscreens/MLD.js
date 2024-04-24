import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function MLD() {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.redSection}>
        <Text style={styles.sectionText}>Manpower Log Detials</Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.infoText}>Name: Lalit Kumar Singh</Text>
        <Text style={styles.infoText}>Id: lalitKs</Text>
        <Text style={styles.infoText}>Station Name: Agra Cantt</Text>
        <Text style={styles.infoText}>Division Name: Agra</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Name"
          value={name}
          onChangeText={setName}
        />
      </View>
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  redSection: {
    backgroundColor: '#ff4d4d',
    padding: 20,
    alignItems: 'center',
  },
  sectionText: {
    color: '#fff',
    fontSize: 20,
  },
  infoSection: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  nextButton: {
    backgroundColor: '#808080',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: '25%',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
