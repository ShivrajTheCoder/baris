import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SubProcessForm({navigation}) {
    const route = useRoute();
    const { id, name } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.redSection}>
        <Text style={styles.sectionText}>{name}</Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.infoText}>Name: Lalit Kumar Singh</Text>
        <Text style={styles.infoText}>Id: lalitKs</Text>
        <Text style={styles.infoText}>Station Name: Agra Cantt</Text>
        <Text style={styles.infoText}>Division Name: Agra</Text>
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={()=>navigation.navigate("Actions",{id:1,name})}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
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
