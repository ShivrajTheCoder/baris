import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function SubProcessForm({ navigation }) {
    const route = useRoute();
    const { id, name } = route.params;
    const [details,setDetials]=useState({
        name:"",
        id:"",
        station:"",
        division:""
    })
    useEffect(() => {
            //fetch detials and also the input parameets if needed which is in case of certain forms and render them conditionally and handle submission of the from before navigating to the next screen
    

        // Simulate fetching input fields from an API
        const fetchInputFields = async () => {
            // Dummy input fields fetched from API
            const dummyInputFields = [
                { label: 'Train Number' },
                { label: 'Coach Number' }
            ];
            setInputFields(dummyInputFields);
            setInputFields([]);

        };
        const fetchDetails=async()=>{
            setDetials({
                name:"Lalit Kumar Singh",
                id:"lalitKs",
                station:"Agra Cantt",
                division:"Agra"
            })
        }

        fetchDetails();
        fetchInputFields();
    }, []);

    // State to hold input fields
    const [inputFields, setInputFields] = useState([]);

    // Function to handle form submission
    const handleSubmit = () => {
        // Logic to handle form submission
        console.log('Form submitted');
        // Navigate to the next screen
        navigation.navigate("Actions", { id: 1, name });
    };

    return (
        <View style={styles.container}>
            <View style={styles.redSection}>
                <Text style={styles.sectionText}>{name}</Text>
            </View>
            <View style={styles.fixedDetailsSection}>
                <Text style={styles.fixedDetailsText}>Name: {details.name}</Text>
                <Text style={styles.fixedDetailsText}>Id: {details.id}</Text>
                <Text style={styles.fixedDetailsText}>Station Name: {details.station}</Text>
                <Text style={styles.fixedDetailsText}>Division Name: {details.division}</Text>
            </View>
            <View style={styles.inputFieldsSection}>
                {/* Render input fields fetched from the API */}
                {inputFields.map((field, index) => (
                    <TextInput
                        key={index}
                        style={styles.inputField}
                        placeholder={field.label}
                        // You can handle text input changes here
                    />
                ))}
            </View>
            <TouchableOpacity style={styles.nextButton} onPress={handleSubmit}>
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
    fixedDetailsSection: {
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    fixedDetailsText: {
        fontSize: 16,
        marginBottom: 10,
    },
    inputFieldsSection: {
        paddingHorizontal: 20,
    },
    inputField: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
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