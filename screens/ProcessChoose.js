import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ProcessChoose() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.chooseProcessSection}>
          <Text style={styles.chooseProcessText}>Choose Process</Text>
        </View>
        <View style={styles.processList}>
          {/* Dummy processes */}
          <View style={styles.process}>
            <Text style={styles.processText}>PWC</Text>
          </View>
          <View style={styles.process}>
            <Text style={styles.processText}>Process 2</Text>
          </View>
          <View style={styles.process}>
            <Text style={styles.processText}>Process 3</Text>
          </View>
          <View style={styles.process}>
            <Text style={styles.processText}>Process 4</Text>
          </View>
          <View style={styles.process}>
            <Text style={styles.processText}>Process 5</Text>
          </View>
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
    backgroundColor: '#67b99a',
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
