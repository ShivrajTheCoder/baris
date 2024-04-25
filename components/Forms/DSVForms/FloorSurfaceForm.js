import React, { useState, useEffect } from 'react';
import { View, ScrollView, Button } from 'react-native';
import SelectFormLayout from '../../_layout/formlayouts/SelectFormLayout';

const FloorSurfaceForm = () => {
  // Define sample questions and options
  const [questions, setQuestions] = useState([
    { id: 1, text: 'How satisfied are you with the cleanliness of the floor?' },
    { id: 2, text: 'How comfortable do you find the floor surface?' },
    { id: 3, text: 'How safe do you feel walking on the floor?' },
    // Add more questions
    { id: 4, text: 'Is the floor well-maintained?' },
    { id: 5, text: 'Does the floor look aesthetically pleasing?' },
    { id: 6, text: 'Do you notice any stains or marks on the floor?' },
    { id: 7, text: 'How do you rate the slip resistance of the floor?' },
    { id: 8, text: 'Are there any uneven surfaces on the floor?' },
    { id: 9, text: 'Does the floor have any damages or cracks?' },
    { id: 10, text: 'How does the floor affect your walking experience?' },
    { id: 11, text: 'Do you feel any discomfort while walking on the floor?' },
    { id: 12, text: 'How does the floor impact the overall ambiance of the room?' },
    { id: 13, text: 'Are there any odors coming from the floor?' },
    { id: 14, text: 'Do you find it easy to clean the floor?' },
    { id: 15, text: 'Do you feel confident about the floor\'s durability?' },
    { id: 16, text: 'How does the floor affect noise levels in the room?' },
    { id: 17, text: 'Do you notice any color fading on the floor?' },
    { id: 18, text: 'Do you find the floor to be environmentally friendly?' },
    { id: 19, text: 'How do you rate the floors overall quality?' },
    { id: 20, text: 'Would you recommend this floor to others?' },
  ]);
  const options = [
    { label: 'Very Satisfied', value: 'very_satisfied' },
    { label: 'Satisfied', value: 'satisfied' },
    { label: 'Neutral', value: 'neutral' },
    { label: 'Dissatisfied', value: 'dissatisfied' },
    { label: 'Very Dissatisfied', value: 'very_dissatisfied' }
  ];

  // State to hold answers
  const [answers, setAnswers] = useState([]);

  // Set default answers on component mount
  useEffect(() => {
    const defaultAnswers = questions.map(question => ({
      questionId: question.id,
      answer: options[0].value // Default to the first option
    }));
    setAnswers(defaultAnswers);
  }, []); // Empty dependency array to run the effect only once on mount

  // Handle change in answers
  const handleAnswerChange = (updatedAnswers) => {
    setAnswers(updatedAnswers);
  };

  // Function to handle submit button press
  const handleSubmit = () => {
    // Implement your submit logic here
    console.log('Form submitted:', answers);
  };

  return (
    <ScrollView style={{ flex: 1,marginBottom:50 }}>
      <View style={{ flex: 1 }}>
        <SelectFormLayout
          questions={questions}
          options={options}
          answers={answers}
          onAnswerChange={handleAnswerChange}
        />
        <View style={{ paddingBottom: 20 }}>
          <Button title="Submit" onPress={handleSubmit} color="#808080" />
        </View>
      </View>
    </ScrollView>
  );
};

export default FloorSurfaceForm;
