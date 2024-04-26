import React, { useState } from 'react';
import { View, ScrollView, Button, Text } from 'react-native';
import InputFormLayout from '../_layout/formlayouts/InputFormLayout';
import { useRoute } from '@react-navigation/native';

const InputForm = () => {
  const route = useRoute();
    const { id, name } = route.params;
    useEffect(()=>{
        // fetch questions and options from server based on name and id of the form and then handle submit from this component to save the report
    },[])
  // Define sample questions
  const [questions] = useState([
    { id: 1, text: 'How satisfied are you with the cleanliness of the floor?' },
    { id: 2, text: 'How comfortable do you find the floor surface?' },
    { id: 3, text: 'How safe do you feel walking on the floor?' },
    { id: 4, text: 'Is the floor well-maintained?' },
    { id: 5, text: 'Does the floor look aesthetically pleasing?' },
  ]);

  // Set default answer for all questions
  const defaultAnswer = '0';

  // Initialize answers state with default values
  const [answers, setAnswers] = useState(Array(questions.length).fill(defaultAnswer));

  // Function to handle form submission
  const handleSubmit = () => {
    console.log('Form submitted:', answers);
    // Add logic to save or submit answers
  };

  return (
    <ScrollView style={{ flex: 1, marginBottom: 50 }}>
      <View style={{ flex: 1 }}>
        <InputFormLayout questions={questions} answers={answers} setAnswers={setAnswers} />
        <View style={{ paddingBottom: 20 }}>
          <Button title="Submit" onPress={handleSubmit} color="#808080" />
        </View>
      </View>
    </ScrollView>
  );
};

export default InputForm;
