import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>Powered by: beatleanalytics.com</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#68d8d6',
        paddingVertical: 10,
        alignItems: 'center',
    },
    text: {
        color: '#ffffff',
        fontSize: 16,
    },
});
