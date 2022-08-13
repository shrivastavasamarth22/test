import React from 'react';
import { View, Text, StyleSheet, Animated, FlatList } from "react-native";
import { AnimatedHeader, Card } from '../components'
import { StatusBar } from "expo-status-bar";
import customData from '../MOCK_DATA.json';

const AnimatedHeaderScreen = () => {
    const scrollY = new Animated.Value(0)
    const diffClamp = Animated.diffClamp(scrollY, 0, 65)
    const translateY = diffClamp.interpolate({
        inputRange: [0, 65],
        outputRange: [0, -65]
    })
    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor={"black"}/>
            <Animated.View
                style={{
                    transform: [
                        {translateY}
                    ],
                    elevation: 4,
                    zIndex: 100
                }}
            >
                <AnimatedHeader/>
            </Animated.View>
            <FlatList
                data={customData}
                contentContainerStyle={{
                    marginTop: 65
                }}
                renderItem={({item}) => {
                    return(
                        <Card
                            uri={item.img_uri}
                            title={item.title}
                            channel={item.channel}
                        />
                    )
                }}

                keyExtractor={item => item.id}
                onScroll={(e)=>{
                    scrollY.setValue(e.nativeEvent.contentOffset.y)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default AnimatedHeaderScreen