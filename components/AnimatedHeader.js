import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import Constant from 'expo-constants'
import {AntDesign, Ionicons, MaterialIcons} from "@expo/vector-icons";

const AnimatedHeader = () => {

    return (
        <View style={{
            position: 'absolute',
            top: Constant.statusBarHeight,
            left: 0,
            right: 0,
            height: 65,
            backgroundColor: "black",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: 'center',
        }}>
            <View style={{
                flexDirection: "row",
                margin: 5
            }}>
                <AntDesign
                    style={{
                        marginLeft: 20
                    }}
                    name="youtube" size={32} color="red"
                />
                <Text style={{
                    fontSize: 20,
                    marginLeft: 5,
                    color: "white",
                    fontWeight: "bold",
                }}>
                    YouTube
                </Text>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-around",
                width: 150,
                margin: 5,
                zIndex: 1
            }}>
                <TouchableOpacity
                    onPress={() => console.log("Button Pressed")}
                >
                    <Ionicons name="md-videocam" size={32} color={"#ccc" }/>
                </TouchableOpacity>

                <Ionicons name="md-search" size={32} color={"#ccc"}/>
                <MaterialIcons
                    name="account-circle"
                    size={32}
                    color={"#ccc"}
                />
            </View>
        </View>
    );
}

export default AnimatedHeader