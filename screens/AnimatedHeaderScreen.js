import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { MotiView } from "@motify/components";
import { AnimatedHeader } from '../components'

const AnimatedHeaderScreen = () => {
    return (
        <View style={styles.container}>
            <AnimatedHeader/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default AnimatedHeaderScreen