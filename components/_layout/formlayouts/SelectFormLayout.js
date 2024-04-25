import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const CustomRadioButton = ({ label, selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.radioButton}>
      <View style={[styles.radioButtonCircle, selected && styles.radioButtonSelected]} />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const SelectFormLayout = ({ questions, options }) => {
  const [isModalVisible, setIsModalVisible] = useState(Array(questions.length).fill(false));
  const [selectedAnswer, setSelectedAnswer] = useState(Array(questions.length).fill(null));

  const handleQuestionClick = (index) => {
    const newIsModalVisible = [...isModalVisible];
    newIsModalVisible[index] = true;
    setIsModalVisible(newIsModalVisible);
  };

  const handleOptionSelect = (questionIndex, value) => {
    const newSelectedAnswer = [...selectedAnswer];
    newSelectedAnswer[questionIndex] = value;
    setSelectedAnswer(newSelectedAnswer);
    setIsModalVisible(Array(questions.length).fill(false)); // Close all modals
  };

  return (
    <View>
      {questions.map((question, index) => (
        <View key={index}>
          <TouchableOpacity onPress={() => handleQuestionClick(index)} key={'touchable_' + index}>
            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>{question.text}</Text>
              <Text style={styles.selectedAnswerText}>
                {selectedAnswer[index] ? (
                  options.find(option => option.value === selectedAnswer[index]).label
                ) : (
                  options[0].label
                )}
              </Text>
            </View>
          </TouchableOpacity>

          <Modal key={'modal_' + index} visible={isModalVisible[index]} transparent={true} animationType="fade">
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>{question.text}</Text>
                {options.map(option => (
                  <CustomRadioButton
                    key={option.value}
                    label={option.label}
                    selected={selectedAnswer[index] === option.value}
                    onPress={() => handleOptionSelect(index, option.value)}
                  />
                ))}
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
    alignItems: 'flex-start',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioButtonCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  radioButtonSelected: {
    backgroundColor: '#000',
  },
  questionText: {
    marginBottom: 10,
    fontWeight: 'bold',
    width: '60%',
    color:"white"
  },
  selectedAnswerText: {
    fontWeight: 'bold',
    width: '40%',
    textAlign: 'right',
    color:"white"
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
    borderRadius:5,
  },
});

export default SelectFormLayout;
