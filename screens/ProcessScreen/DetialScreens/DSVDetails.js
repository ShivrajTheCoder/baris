import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FloorSurfaceForm from '../../../components/Forms/DSVForms/FloorSurfaceForm';
import InputForm from '../../../components/Forms/InputForm';


export default function DSVDetails() {
    const [heading, setHeading] = useState("Daily Surprise Visit");
    const [selectedLink, setSelectedLink] = useState(null);
    const shortenText = (text, maxLength=30) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength - 3) + '...';
    };
    const links = [
        { name: "Floor Surface Cleanliness Measurement Sheet", formComponent: <FloorSurfaceForm /> },
        { name: "Stairs Cleanliness Measurement Sheet", formComponent: <FloorSurfaceForm /> },
        { name: "Wall Cladding Measurement Sheet", formComponent: <FloorSurfaceForm /> },
        { name: "Steel Work Measurement Sheet", formComponent: <FloorSurfaceForm /> },
        { name: "Glass Work/ Finishes with Frames Measurement Sheet", formComponent: <FloorSurfaceForm /> },
        { name: "Escalators Cleanliness Measurement Sheet", formComponent: <FloorSurfaceForm /> },
        { name: "Toilets Cleanliness Measurement Sheet", formComponent: <FloorSurfaceForm /> },
        { name: "Station Tracks Measurement Sheet", formComponent: <InputForm/> }
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
