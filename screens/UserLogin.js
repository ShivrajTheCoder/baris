import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function UserLogin({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        navigation.navigate("Process")
    };

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.welcomeText}>Welcome to Beatle Analytics-Score Card</Text>
            </View>
            <View style={styles.bottomSection}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#808080"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#808080"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={handleLogin} style={styles.continueButton}>
                    <Text style={styles.continueText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export function AnotherLogin({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
    };

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.welcomeText}>Welcome to Beatle Analytics - Score Cards</Text>
            </View>
            <View style={styles.bottomSection}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#808080"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#808080"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={handleLogin} style={styles.continueButton}>
                    <Text style={styles.continueText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cbc0d3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topSection: {
        height: '40%',
        width: '100%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomSection: {
        height: '60%',
        width: '100%',
        backgroundColor: '#68d8d6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeText: {
        color: '#808080',
        fontSize: 20,
    },
    input: {
        backgroundColor: '#ffffff',
        width: '80%',
        height: 50,
        borderRadius: 25,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    continueButton: {
        backgroundColor: '#248277',
        width: '50%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    continueText: {
        color: '#ffffff',
        fontSize: 18,
    },
    poweredBy: {
        position: 'absolute',
        bottom: 20,
        color: '#ffffff',
    },
});
