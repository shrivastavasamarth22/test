import React from 'react';
import {View, Text} from "react-native";
import Constant from 'expo-constants'
import {AntDesign, Ionicons, MaterialIcons} from "@expo/vector-icons";

const AnimatedHeader = () => {

    return (
        <View style={{
            position: 'absolute',
            top: Constant.statusBarHeight,
            left: 0,
            right: 0,
            // marginTop: Constant.statusBarHeight,
            // width: "100%",
            height: 65,
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: 'center',
            elevation: 4,
        }}>
            <View style={{
                flexDirection: "row",
                margin: 5
            }}>
                <AntDesign
                    style={{
                        marginLeft: 20
                    }}
                    name="youtube" size={32} color="red"/>
                <Text style={{
                    fontSize: 20,
                    marginLeft: 5,
                    color: "black",
                    fontWeight: "bold",
                }}>
                    YouTube
                </Text>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-around",
                width: 150,
                margin: 5
            }}>
                <Ionicons name="md-videocam" size={32} color={"#1d1d1d"}/>
                <Ionicons name="md-search" size={32} color={"#1d1d1d"}/>
                <MaterialIcons
                    name="account-circle"
                    size={32}
                    color={"#1d1d1d"}
                />
            </View>
        </View>
    );
}

export default AnimatedHeader