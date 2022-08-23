import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

const Card = (props) => {
    return (
        <View style={{marginBottom: 10, backgroundColor: '#ccc', borderRadius: 10}}>
            <Image
                source={{uri: props.uri}}
                style={{
                    width: "100%",
                    height: 200
                }}
            />
            <View style={{
                flexDirection: "row",
                margin: 5,
            }}>
                <MaterialIcons name="account-circle" size={40} color="#212121"/>
                <View
                    style={{
                        marginLeft: 10
                    }}
                >
                    <Text style={{
                        fontSize: 20,
                        width: Dimensions.get("screen").width - 50,
                        color: "black"
                    }}
                          ellipsizeMode="tail"
                          numberOfLines={2}
                    >
                        {props.title}
                    </Text>
                    <Text style={{color: "black"}}>
                        {props.channel}
                    </Text>
                </View>

            </View>
        </View>
    )
}

export default Card;