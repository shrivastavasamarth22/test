import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View, ToastAndroid} from "react-native";
import {KeyboardAccessoryView} from "react-native-keyboard-accessory";
import {FontAwesome} from '@expo/vector-icons';
import {ListItem} from "../components";

const icon = require('../assets/scales.png')

const randomId = () => {
    return Math.random().toString(36).substr(2, 4).toUpperCase();
}


const ListScreen = () => {
    const [text, onChangeText] = useState('');
    const [text2, onChangeText2] = useState('');
    const [type, setType] = useState('name');

    const [data, setData] = useState([
            {
                id: randomId(),
                name: "Amul Ghee",
                qty: "500 gm"
            }
        ]
    )

    const addUnit = (unit) => {
        onChangeText2(text => text + " " + unit)
    }

    const input1Ref = useRef();
    const input2Ref = useRef();

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

        // cleanup function
        return () => {
            Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
            Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
        };
    }, [])

    const [keyboardStatus, setKeyboardStatus] = useState(undefined);
    const _keyboardDidShow = () => setKeyboardStatus('Keyboard Shown');
    const _keyboardDidHide = () => setKeyboardStatus('Keyboard Hidden');

    const goToQty = () => {
        if (text === '') {
            ToastAndroid.showWithGravity(
                "Product cannot be left blank",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            )
        } else {
            setType('unit')
        }
    }

    const submitToList = (name, qty,) => {
            if (qty === '') {
                ToastAndroid.showWithGravity(
                    "Quantity cannot be left blank",
                    ToastAndroid.CENTER,
                    ToastAndroid.SHORT
                )
            } else {
                setData([...data, {
                    id: randomId(),
                    name,
                    qty
                }])
            }
        setType('name');
        onChangeText('');
        onChangeText2('');
    }

    const deleteFromList = (id) => {
        const newList = data.filter(item => item.id !== id);
        setData(newList);
    }

    return (
        <View style={styles.container}>
            <View style={styles.scrollStyle}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => (
                        <ListItem
                            position={index + 1}
                            name={item.name}
                            qty={item.qty}
                            onPress={() => deleteFromList(item.id)}
                        />
                    )}
                />
            </View>
            <View
                style={type === 'unit' && keyboardStatus === 'Keyboard Shown' ? [styles.floatingTextView, {bottom: 60}] : styles.floatingTextView}>
                {
                    type === 'name'
                        ? <>
                            <TextInput
                                ref={input1Ref}
                                value={text}
                                placeholder={"Product Name"}
                                onChangeText={(t) => onChangeText(t)}
                                style={styles.inputStyle}
                                keyboardType={'default'}
                            />
                            <TouchableOpacity
                                style={styles.moveButtonStyle}
                                onPress={goToQty}
                            >
                                <Image
                                    source={icon}
                                    tintColor={'white'}
                                    style={styles.iconStyle}
                                />
                            </TouchableOpacity>
                        </>
                        : <>
                            <TextInput
                                ref={input2Ref}
                                value={text2}
                                placeholder={"Quantity - Unit"}
                                onChangeText={t => onChangeText2(t)}
                                style={styles.inputStyle}
                                keyboardType={'decimal-pad'}
                            />
                            <TouchableOpacity
                                style={styles.moveButtonStyle}
                                onPress={() => submitToList(text, text2)}
                            >
                                <FontAwesome name="send" size={28} color="white" />
                            </TouchableOpacity>
                        </>
                }

            </View>
            <KeyboardAccessoryView androidAdjustResize>
                {
                    type === 'unit'
                        ? <View style={styles.keyboardViewStyle}>
                            <TouchableOpacity
                                style={styles.buttonStyle}
                                onPress={() => addUnit("₹")}
                            >
                                <Text style={styles.buttonText}>₹</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonStyle}
                                onPress={() => addUnit("khula")}
                            >
                                <Text style={styles.buttonText}>khula</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonStyle}
                                onPress={() => addUnit("ml")}
                            >
                                <Text style={styles.buttonText}>ml</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonStyle}
                                onPress={() => addUnit("Lt")}
                            >
                                <Text style={styles.buttonText}>Lt</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonStyle}
                                onPress={() => addUnit("Pkt")}
                            >
                                <Text style={styles.buttonText}>Pkt</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonStyle}
                                onPress={() => addUnit("gm")}
                            >
                                <Text style={styles.buttonText}>gm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonStyle}
                                onPress={() => addUnit("KG")}
                            >
                                <Text style={styles.buttonText}>Kg</Text>
                            </TouchableOpacity>
                        </View>
                        : null
                }
            </KeyboardAccessoryView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollStyle: {
        paddingTop: 10,
        flex: 1,
        paddingHorizontal: 20
    },

    keyboardViewStyle: {
        width: "100%",
        height: 60,
        backgroundColor: "#273138",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrowButtonStyle: {
        height: "100%",
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#546979'
    },
    arrowButtonStyle2: {
        height: "100%",
        flex: 0.7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#546979',
        marginRight: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    },
    iconStyle: {
        width: 28,
        height: 28,
        tintColor: 'white',
    },
    floatingTextView: {
        width: "100%",
        position: 'absolute',
        paddingBottom: 10,
        paddingHorizontal: 5,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    inputStyle: {
        width: "80%",
        borderRadius: 30,
        height: 55,
        paddingLeft: 20,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#ccc',
        fontSize: 16,
        color: '#505050',
        elevation: 1.2
    },
    moveButtonStyle: {
        width: 60,
        height: 60,
        backgroundColor: '#ff9d00',
        borderRadius: 30,
        elevation: 1.2,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ListScreen;