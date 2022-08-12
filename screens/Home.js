import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{marginBottom: 10}}
                onPress={() => navigation.navigate("Map Test")}
            >
                <Text style={styles.text}>
                    Map Test
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{marginBottom: 10}}
                onPress={() => navigation.navigate("List Test")}
            >
                <Text style={styles.text}>
                    List Test
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{marginBottom: 10}}
                onPress={() => navigation.navigate("Animation Test")}
            >
                <Text style={styles.text}>
                    Animation Test
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{marginBottom: 10}}
                onPress={() => navigation.navigate("Scroll To Index Animation Test")}
            >
                <Text style={styles.text}>
                    Scroll To Index Animation Test
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{marginBottom: 10}}
                onPress={() => navigation.navigate("Animated Header Screen")}
            >
                <Text style={styles.text}>
                    Animated Header Screen
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 20
    },
    text: {
        fontSize: 20,
        color: '#0a84ff'
    }
})

export default Home