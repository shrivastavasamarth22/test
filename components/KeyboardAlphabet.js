import React from 'react';
import {
    View,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import {Feather, MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons';

const KeyboardAlphabet = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.row, {marginBottom: 10}]}>
                <View style={styles.buttonContainer}>
                    <Text style={[styles.text, {fontSize: 20}]}>
                        1
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={[styles.text, {fontSize: 20}]}>
                        2
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={[styles.text, {fontSize: 20}]}>
                        3
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={[styles.text, {fontSize: 20}]}>
                        4
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={[styles.text, {fontSize: 20}]}>
                        5
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={[styles.text, {fontSize: 20}]}>
                        6
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={[styles.text, {fontSize: 20}]}>
                        7
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={[styles.text, {fontSize: 20}]}>
                        8
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={[styles.text, {fontSize: 20}]}>
                        9
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={[styles.text, {fontSize: 20}]}>
                        0
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => console.log('q')}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.text}>
                            q
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>
                        w
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>
                        e
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>
                        r
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>
                        t
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>
                        y
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>
                        u
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>
                        i
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>
                        o
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>
                        p
                    </Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>
                        a
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>
                        s
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>
                        d
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>
                        f
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>
                        g
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>
                        h
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>
                        j
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>
                        k
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>
                        l
                    </Text>
                </View>
            </View>
            <View style={[styles.row, {paddingHorizontal: 10}]}>
                <View style={{
                    flex: 1,
                    ...styles.buttonContainer
                }}>
                    <MaterialCommunityIcons name="apple-keyboard-shift" size={30} color="white"/>
                </View>
                <View style={styles.rowContainer}>
                    <TouchableOpacity onPress={() => console.log('q')}>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.text}>
                                z
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('q')}>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.text}>
                                x
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('q')}>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.text}>
                                c
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('q')}>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.text}>
                                v
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('q')}>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.text}>
                                b
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('q')}>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.text}>
                                n
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('q')}>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.text}>
                                m
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 1,
                    ...styles.buttonContainer
                }}>
                    <Feather name="delete" size={24} color="white"/>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.spacer}/>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>
                        .
                    </Text>
                </View>
                <TouchableOpacity style={styles.actionContainer}>
                    <FontAwesome name="search" size={24} color="white"/>
                    <View style={styles.textContainer}>
                        <Text style={styles.buttonText}>
                            View
                        </Text>
                        <Text style={styles.buttonText}>
                            Products
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5
    },
    row: {
        width: "100%",
        height: "19%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rowContainer: {
        flex: 5.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        height: "85%",
        width: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5f0fa2',
        borderRadius: 3,
        elevation: 3,
        marginHorizontal: 2
    },
    text: {
        fontSize: 26,
        color: 'white'
    },
    spacer: {
        width: "50%",
        height: "85%",
        backgroundColor: '#5f0fa2',
        borderRadius: 3,
        elevation: 3,
        marginHorizontal: 2,
    },
    actionContainer: {
        height: "85%",
        width: "20%",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 15,
    },
    textContainer: {
        height: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 10
    }
})

export default KeyboardAlphabet;