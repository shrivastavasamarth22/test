import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import {Feather, AntDesign} from '@expo/vector-icons';

const KeyboardNumeric = () => {
    return (
        <View style={styles.container}>
            <View style={styles.column1}>
                <View style={styles.rowLeft}>
                    <TouchableOpacity style={[styles.mainButton, {marginLeft: 0}]}>
                        <Text style={styles.buttonText}>
                            1
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainButton}>
                        <Text style={styles.buttonText}>
                            2
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainButton}>
                        <Text style={styles.buttonText}>
                            3
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowLeft}>
                    <TouchableOpacity style={[styles.mainButton, {marginLeft: 0}]}>
                        <Text style={styles.buttonText}>
                            4
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainButton}>
                        <Text style={styles.buttonText}>
                            5
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainButton}>
                        <Text style={styles.buttonText}>
                            6
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowLeft}>
                    <TouchableOpacity style={[styles.mainButton, {marginLeft: 0}]}>
                        <Text style={styles.buttonText}>
                            7
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainButton}>
                        <Text style={styles.buttonText}>
                            8
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainButton}>
                        <Text style={styles.buttonText}>
                            9
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowLeft}>
                    <TouchableOpacity style={[styles.mainButton, {marginLeft: 0}]}>
                        <Text style={styles.buttonText}>
                            .
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainButton}>
                        <Text style={styles.buttonText}>
                            0
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mainButton}>
                        <Feather name="delete" size={32} color="#999"/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.column2}>
                <View style={styles.rowRight}>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>
                            Pkt
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>
                            pcs
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowRight}>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>
                            bottle
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>
                            can
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowRight}>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>
                            ml
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>
                            Lt
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowRight}>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>
                            gm
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>
                            KG
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowRight}>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>
                            ₹
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>
                            khula
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowRight}>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>
                            tin
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.secondaryButton, { backgroundColor: '#20b2aa' }]}>
                        <AntDesign name="check" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 2.5
    },
    column1: {
        flex: 1.6,
        paddingHorizontal: 5,
    },
    column2: {
        flex: 1.2,
        paddingRight: 5
    },
    rowLeft: {
        width: "100%",
        height: "25%",
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 2.5,
    },
    rowRight: {
        width: "100%",
        height: "16.66%",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 2.5
    },
    mainButton: {
        width: "31.8%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#fafafa',
        marginLeft: 5
    },
    secondaryButton: {
        width: "47%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2.5,
        backgroundColor: '#b0bec7'
    },
    buttonText: {
        color: '#262626',
        fontSize: 34
    },
    secondaryButtonText: {
        color: 'white',
        fontSize: 20
    }
})

export default KeyboardNumeric;