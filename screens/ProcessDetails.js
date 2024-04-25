import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProcessDetails({ navigation }) {
    const route = useRoute();
    useEffect(() => {
        console.log("fetch all details from server and render each of them")
    }, []);
    const { id, name } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{name}</Text>
            </View>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Sub Process', { id: 1, name: "Daily Surprise Visit" })}>
                <Text style={styles.itemText}>Daily Surprise Visit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Sub Process', { id: 2, name: "Daily Consumable Usage" })}>
                <Text style={styles.itemText}>Daily Consumable Usage</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Sub Process', { id: 3, name: "Daily Machine Performance" })}>
                <Text style={styles.itemText}>Daily Machine Performance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Sub Process', { id: 4, name: "Manpower Log Details" })}>
                <Text style={styles.itemText}>Manpower Log Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Sub Process', { id: 5, name: "Daily Performance Log" })}>
                <Text style={styles.itemText}>Daily Performance Log</Text>
            </TouchableOpacity>
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
