import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from "react-native";
import {Feather, FontAwesome} from '@expo/vector-icons';
import {shift, shift_active, caps} from "../constants/icons";

const row0 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

const KeyboardAlphabet = () => {

    const [keyState, setKeyState] = useState('shift');
    const [modalVisible, setModalVisible] = useState(false)

    const renderIcon = () => {
        if (keyState === 'shift') {
            return shift
        } else if (keyState === 'shift_active') {
            return shift_active
        } else {
            return caps
        }
    }

    const handleShiftPress = () => {
        if (keyState === 'shift') {
            setKeyState('shift_active')
        } else {
            setKeyState('shift')
        }
    }

    const handleShiftHold = () => {
        setKeyState('caps')
    }

    const handleKeyPress = (c) => {
        if (keyState === 'shift') {
            return c
        } else if (keyState === 'shift_active') {
            setKeyState('shift')
            return c.toUpperCase();
        } else {
            return c.toUpperCase();
        }
    }

    const ModalView = (c) => {
        return (
            <View style={styles.modalStyle}>
                <Text style={styles.modalText}>
                    {c}
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={[styles.row, {marginBottom: 10}]}>
                {
                    row0.map(c => (
                        <>
                            {
                                modalVisible
                                    ? ModalView(c)
                                    : null
                            }
                            <TouchableOpacity
                                key={c}
                                onPress={() => console.log(c)}
                            >
                                <View style={styles.buttonContainer}>
                                    <Text style={[styles.text, {fontSize: 20}]}>
                                        {c}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </>
                    ))
                }
            </View>
            <View style={styles.row}>
                {
                    row1.map(c => (
                        <TouchableOpacity
                            key={c}
                            onPress={() => console.log(handleKeyPress(c))}
                        >
                            <View style={styles.buttonContainer}>
                                <Text style={styles.text}>
                                    {keyState === 'shift_active' || keyState === 'caps' ? c.toUpperCase() : c}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <View style={styles.row}>
                {
                    row2.map(c => (
                        <TouchableOpacity
                            key={c}
                            onPress={() => console.log(handleKeyPress(c))}
                        >
                            <View style={styles.buttonContainer}>
                                <Text style={styles.text}>
                                    {keyState === 'shift_active' || keyState === 'caps' ? c.toUpperCase() : c}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <View style={[styles.row, {paddingHorizontal: 10}]}>
                <TouchableOpacity
                    onPress={handleShiftPress}
                    onLongPress={handleShiftHold}
                    style={{
                        flex: 1,
                        ...styles.buttonContainer
                    }}
                >
                    <Image
                        source={renderIcon()}
                        style={styles.shiftIcon}
                    />
                </TouchableOpacity>
                <View style={styles.rowContainer}>
                    {
                        row3.map(c => (
                            <TouchableOpacity
                                key={c}
                                onPress={() => console.log(handleKeyPress(c))}
                            >
                                <View style={styles.buttonContainer}>
                                    <Text style={styles.text}>
                                        {keyState === 'shift_active' || keyState === 'caps' ? c.toUpperCase() : c}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
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
    },
    shiftIcon: {
        width: 22,
        height: 22,
        resizeMode: 'cover'
    },
    modalStyle: {
        height: "90%",
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    modalText: {
        fontSize: 30,
        color: '#5f0fa2'
    }
})

export default KeyboardAlphabet;