import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import {MotiView} from "@motify/components";
import {Feather} from '@expo/vector-icons';
import {Easing} from "react-native-reanimated";

const _color = '#6E01EF';
const _size = 50;

const WaveThingy = () => {
    return (
        <View style={[styles.dot, styles.center]}>
            {[...Array(3).keys()].map(index => {
                return <MotiView
                    from={{opacity: .7, scale: 1}}
                    animate={{opacity: 0, scale: 4}}
                    transition={{
                        type: 'timing',
                        duration: 1500,
                        easing: Easing.out(Easing.ease),
                        delay: index * 400,
                        loop: true,
                        repeatReverse: false
                    }}
                    key={index}
                    style={[
                        StyleSheet.absoluteFillObject,
                        styles.dot
                    ]}
                />
            })}
            <Feather name='phone-outgoing' size={18} color="#fff"/>
        </View>
    )
}

const AnimationScreen = () => {
    return (
        <View
            style={styles.container}
        >
            <WaveThingy/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dot: {
        width: _size,
        height: _size,
        borderRadius: _size / 2,
        backgroundColor: _color
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default AnimationScreen