import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
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
    const [lang, setLang] = useState('en');

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
            <View
                style={styles.modalStyle}
            >
                <Text style={styles.modalText}>
                    {c}
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.langContainer}>
                {
                    lang === 'en' ?
                        <>
                            <View style={styles.selectedBox}>
                                <Text style={[styles.text, {fontSize: 18}]}>
                                    abc
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={styles.selectableBox}
                                onPress={() => setLang('hi')}
                            >
                                <Text style={[styles.text, {fontSize: 26, color: '#fafafa'}]}>
                                    अ
                                </Text>
                            </TouchableOpacity>
                        </>
                        :
                        <>
                            <TouchableOpacity
                                style={styles.selectableBox}
                                onPress={() => setLang('en')}
                            >
                                <Text style={[styles.text, {fontSize: 18, color: '#fafafa'}]}>
                                    abc
                                </Text>
                            </TouchableOpacity>
                            <View
                                style={styles.selectedBox}
                            >
                                <Text style={[styles.text, {fontSize: 26}]}>
                                    अ
                                </Text>
                            </View>
                        </>
                }

            </View>
            <View style={{
                flex: 1
            }}>
                <View style={styles.row}>
                    {
                        row0.map(c => (
                            <TouchableOpacity
                                key={c}
                                onPress={() => console.log(c)}
                            >
                                <View style={styles.buttonContainer}>
                                    <Text style={styles.text}>
                                        {c}
                                    </Text>
                                </View>
                            </TouchableOpacity>
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
                    <TouchableOpacity style={{
                        flex: 1,
                        ...styles.buttonContainer
                    }}>
                        <Feather name="delete" size={24} color="#262626"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.micButton}>
                        <FontAwesome name="microphone" size={24} color="#262626" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.spacer}/>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.text}>
                            .
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.actionContainer}>
                        <FontAwesome name="search" size={24} color="#262626"/>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    langContainer: {
        width: "100%",
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectedBox: {
        height: "100%",
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fafafa',
    },
    selectableBox: {
        height: "100%",
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        width: "100%",
        height: "20%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
        backgroundColor: '#fafafa',
        borderRadius: 3,
        marginHorizontal: 2,
    },
    text: {
        fontSize: 26,
        color: '#262626'
    },
    spacer: {
        width: "50%",
        height: "85%",
        backgroundColor: '#fafafa',
        borderRadius: 3,
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
        color: '#262626',
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
        backgroundColor: 'white',
    },
    modalText: {
        fontSize: 30,
        color: '#5f0fa2',
        borderRadius: 5
    },
    micButton: {
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fafafa',
        marginRight: 5
    }
})

export default KeyboardAlphabet;