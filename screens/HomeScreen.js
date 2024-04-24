import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Text style={styles.title}>Welcome to ba-score cards</Text>
            </View>
            <ScrollView style={{ backgroundColor: "white" }}>
                <View style={styles.welcomeSection}>
                    <Text style={styles.welcomeText}>Welcome To Agra cant</Text>
                </View>
                <View style={styles.middleSection}>
                    <View style={styles.storyContainer}>
                        <View style={styles.storyTitleCont}>
                            <Text style={styles.storyTitle}>Our story</Text>
                        </View>
                        <Text style={styles.storyText}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ducimus sunt pariatur sed voluptatum sint. Magnam non quas voluptates, nisi voluptas ab beatae, velit molestiae minima exercitationem sint. Quasi, soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quis dignissimos dolore.
                        </Text>
                    </View>
                </View>
                <View style={{ backgroundColor: "white" , width:"100%", justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={{color:"gray", fontSize:18}}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navbar: {
        backgroundColor: '#68d8d6',
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    welcomeSection: {
        height: 200,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeText: {
        color: 'gray',
        fontSize: 20,
    },
    middleSection: {
        backgroundColor: 'white',
        padding: 10,
    },
    storyContainer: {
        backgroundColor: '#67b99a',
        marginHorizontal: 10,
        // paddingHorizontal: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        alignItems: "center"
    },
    storyTitleCont: {
        backgroundColor: "#68d8d6",
        width: "100%",
        display: "flex",
        alignItems: "center",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    storyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#ffffff',
    },
    storyText: {
        color: '#ffffff',
        padding: 15
    },
    button: {
        backgroundColor: '#68d8d6',
        alignItems: 'center',
        padding: 15,
        margin: 10,
        width: '50%',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight:"bold"
    },
});
