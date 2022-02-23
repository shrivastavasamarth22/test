import React, {useRef, useState} from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
    ToastAndroid,
} from "react-native";
import BottomSheet from 'reanimated-bottom-sheet';
import {FontAwesome, AntDesign} from '@expo/vector-icons';
import {ListItem, KeyboardAlphabet, KeyboardNumeric} from "../components";

const icon = require('../assets/scales.png')

const randomId = () => {
    return Math.random().toString(36).substr(2, 4).toUpperCase();
}


const ListScreen = () => {
    const [text, onChangeText] = useState('Ghee');
    const [text2, onChangeText2] = useState('');
    const [type, setType] = useState('name');
    const [visible, setVisible] = useState(false);

    const [data, setData] = useState([
            {
                id: randomId(),
                name: "Amul Ghee",
                qty: "500 gm"
            }
        ]
    )

    const input1Ref = useRef();
    const input2Ref = useRef();

    const sheetRef = useRef(null);

    const onOpenSheet = () => {
        if (sheetRef.current) {
            setVisible(true);
            sheetRef.current.snapTo(1);
        }
    }

    const onCloseSheet = () => {
        if (sheetRef.current) {
            setVisible(false);
            sheetRef.current.snapTo(0);
        }
    }

    const goToQty = () => {
        if (text === '') {
            ToastAndroid.showWithGravity(
                "Product cannot be left blank",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            )
        } else {
            setType('unit');
            onOpenSheet();
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

    const sheetContent = () => {
        return (
            <View style={styles.mediumContainer}>
                {
                    type === 'name' ? <KeyboardAlphabet /> : <KeyboardNumeric />
                }
            </View>
        )
    }

    return (
        <>
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
                    style={visible ? [styles.floatingTextView, {marginBottom: 300}] : styles.floatingTextView}>
                    {
                        type === 'name'
                            ? <>
                                <TextInput
                                    ref={input1Ref}
                                    value={text}
                                    onFocus={onOpenSheet}
                                    onBlur={onCloseSheet}
                                    showSoftInputOnFocus={false}
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
                                    onFocus={onOpenSheet}
                                    onBlur={onCloseSheet}
                                    showSoftInputOnFocus={false}
                                    placeholder={"Quantity - Unit"}
                                    onChangeText={t => onChangeText2(t)}
                                    style={styles.inputStyle}
                                    keyboardType={'decimal-pad'}
                                />
                                <TouchableOpacity
                                    style={styles.moveButtonStyle}
                                    onPress={() => setType('name')}
                                >
                                    <AntDesign name="back" size={24} color="white" />
                                </TouchableOpacity>
                            </>
                    }
                </View>
            </View>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[0, 300]}
                initialSnap={0}
                enabledContentGestureInteraction={false}
                enabledContentTapInteraction={false}
                renderContent={sheetContent}
            />
        </>
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
        paddingBottom: 10,
        paddingHorizontal: 5,
        marginBottom: 10,
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
    },
    mediumContainer: {
        height: 300,
        backgroundColor: '#e4e5ea',
    },
})

export default ListScreen;