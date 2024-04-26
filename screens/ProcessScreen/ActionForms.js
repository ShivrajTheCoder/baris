import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import InputForm from '../../components/Forms/InputForm';
import SelectOptionsForm from '../../components/Forms/SelectOptionsForm';
import { useRoute } from '@react-navigation/native';

export default function ActionForms() {
    const route = useRoute();
    const { id, name } = route.params;

    useEffect(()=>{
        // implement logic to fetch all the associated forms and conditionally render those forms 
        // if the form needs selection then use Select From if it needs numbers use Input Form
    },[]);

    const [heading, setHeading] = useState(name);
    const [selectedLink, setSelectedLink] = useState(null);

    const shortenText = (text, maxLength=30) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength - 3) + '...';
    };

    const links = [
        { name: "Floor Surface Cleanliness Measurement Sheet", formComponent: <SelectOptionsForm name="Floor Surface Cleanliness Measurement Sheet" id={1} /> },
        { name: "Stairs Cleanliness Measurement Sheet", formComponent: <SelectOptionsForm name="Stairs Cleanliness Measurement Sheet" id={2} /> },
        { name: "Wall Cladding Measurement Sheet", formComponent: <SelectOptionsForm name="Wall Cladding Measurement Sheet" id={3} /> },
        { name: "Steel Work Measurement Sheet", formComponent: <SelectOptionsForm name="Steel Work Measurement Sheet" id={4} /> },
        { name: "Glass Work/ Finishes with Frames Measurement Sheet", formComponent: <SelectOptionsForm name="Glass Work/ Finishes with Frames Measurement Sheet" id={5} /> },
        { name: "Escalators Cleanliness Measurement Sheet", formComponent: <SelectOptionsForm name="Escalators Cleanliness Measurement Sheet" id={6} /> },
        { name: "Toilets Cleanliness Measurement Sheet", formComponent: <SelectOptionsForm name="Toilets Cleanliness Measurement Sheet" id={7} /> },
        { name: "Station Tracks Measurement Sheet", formComponent: <InputForm name="Station Tracks Measurement Sheet" id={8} /> }
    ];

    const handleLinkClick = (name) => {
        setHeading(name);
        setSelectedLink(name);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{heading}</Text>
            </View>
            {selectedLink ? (
                <View style={styles.formContainer}>
                    {links.find(link => link.name === selectedLink).formComponent}
                </View>
            ) : (
                <View style={styles.linksContainer}>
                    {links.map((link, index) => (
                        <TouchableOpacity key={index} style={styles.item} onPress={() => handleLinkClick(link.name)}>
                            <Text style={styles.itemText}>{shortenText(link.name)}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#ff4d4d',
        padding: 15,
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
    },
    linksContainer: {
        flex: 1,
    },
    formContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    item: {
        backgroundColor: '#68d8d6',
        padding: 15,
        marginVertical: 1,
    },
    itemText: {
        color: '#fff',
        fontSize: 18,
    },
});
