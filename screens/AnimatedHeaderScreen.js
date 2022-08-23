import React from 'react';
import { View, Text, StyleSheet, Animated, FlatList } from "react-native";
import { AnimatedHeader, Card } from '../components'
import { StatusBar } from "expo-status-bar";
import customData from '../MOCK_DATA.json';
import Constant from "expo-constants";

const AnimatedHeaderScreen = () => {
    const HEIGHT = Constant.statusBarHeight + 65
    const scrollY = new Animated.Value(0)
    const diffClamp = Animated.diffClamp(scrollY, 0, 70)
    const translateY = diffClamp.interpolate({
        inputRange: [0, 70],
        outputRange: [0, -70]
    })
    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor={"black"}/>
            <Animated.View
                style={{
                    transform: [
                        {translateY}
                    ],
                    zIndex: 100,
                }}
            >
                <AnimatedHeader/>
                <View style={{
                    position: 'absolute',
                    top: HEIGHT,
                    backgroundColor: 'white',
                    left: 0,
                    right: 0,
                    justifyContent: 'center',
                    height: 40
                }}>
                    <Text style={{
                        marginLeft: 10,
                        fontSize: 16
                    }}>
                        These are some video suggestions :
                    </Text>
                </View>
            </Animated.View>

            <FlatList
                data={customData}
                contentContainerStyle={{
                    paddingHorizontal: 10,
                    paddingTop: HEIGHT + 40
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
        backgroundColor: 'white'
    }
})

export default AnimatedHeaderScreen