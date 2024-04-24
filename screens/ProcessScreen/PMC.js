import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function PMC({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>PMC</Text>
            </View>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('DSV')}>
                <Text style={styles.itemText}>Daily Surprise Visit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('DCU')}>
                <Text style={styles.itemText}>Daily Consumable Usage</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('DMP')}>
                <Text style={styles.itemText}>Daily Machine Performance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('MLD')}>
                <Text style={styles.itemText}>Manpower Log Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('DPL')}>
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
