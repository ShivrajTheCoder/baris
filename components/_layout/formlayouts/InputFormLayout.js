import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Modal, StyleSheet, TextInput, Button } from 'react-native';

const InputFormLayout = ({ questions }) => {
  const [isModalVisible, setIsModalVisible] = useState(Array(questions.length).fill(false));
  const [quantity, setQuantity] = useState(Array(questions.length).fill('0')); // Initialize with '0' as default

  const handleQuestionClick = (index) => {
    const newIsModalVisible = [...isModalVisible];
    newIsModalVisible[index] = true;
    setIsModalVisible(newIsModalVisible);
  };

  const handleConfirm = (questionIndex) => {
    // Implement logic to handle confirmation
    console.log('Quantity for question', questionIndex + 1, ':', quantity[questionIndex]);
    setIsModalVisible(Array(questions.length).fill(false)); // Close all modals
  };

  return (
    <View>
      {questions.map((question, index) => (
        <View key={index}>
          <TouchableOpacity onPress={() => handleQuestionClick(index)} key={'touchable_' + index}>
            <View style={styles.questionContainer}>
              <Text style={[styles.questionText, { width: '90%', color: 'white' }]}>{question.text}</Text>
              <Text style={[styles.selectedAnswerText, { width: '10%', color: 'white' }]}>{quantity[index]}</Text>
            </View>
          </TouchableOpacity>

          <Modal key={'modal_' + index} visible={isModalVisible[index]} transparent={true} animationType="fade">
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={[styles.modalTitle]}>{question.text}</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Quantity"
                  keyboardType="numeric"
                  value={quantity[index]}
                  onChangeText={(text) => setQuantity((prevQuantity) => {
                    const newQuantity = [...prevQuantity];
                    newQuantity[index] = text;
                    return newQuantity;
                  })}
                />
                <Button title="Confirm" onPress={() => handleConfirm(index)} />
              </View>
            </View>
          </Modal>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  questionText: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  selectedAnswerText: {
    fontWeight: 'bold',
  },
  questionContainer: {
    backgroundColor: '#68d8d6',
    marginVertical: 2,
    paddingVertical: 4,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default InputFormLayout;
