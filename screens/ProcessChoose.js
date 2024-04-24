import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ProcessChoose({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.chooseProcessSection}>
          <Text style={styles.chooseProcessText}>Choose Process</Text>
        </View>
        <View style={styles.processList}>
          {/* Dummy processes */}
          <TouchableOpacity style={styles.process} onPress={()=>{
            navigation.navigate("PMC")
          }}>
            <Text style={styles.processText}>PMC</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Take Picture</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  chooseProcessSection: {
    backgroundColor: '#ff4d4d',
    padding: 10,
    alignItems: 'center',
  },
  chooseProcessText: {
    color: '#fff',
    fontSize: 20,
  },
  processList: {
    marginTop: 3,
  },
  process: {
    backgroundColor: '#68d8d6',
    padding: 15,
    marginVertical: 1,
  },
  processText: {
    color: '#fff',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#68d8d6',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    marginBottom:55,
    width:"50%",
    marginHorizontal:"25%",
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
