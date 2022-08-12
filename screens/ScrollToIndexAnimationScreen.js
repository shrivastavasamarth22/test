import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity} from "react-native";
import {MotiView} from "@motify/components";
import {Feather, Entypo} from '@expo/vector-icons';
import {faker} from "@faker-js/faker";

const {width, height} = Dimensions.get('screen');

faker.seed(10);

const data = [...Array(20).keys()].map(() => ({
    key: faker.datatype.uuid(),
    job: faker.animal.crocodilia()
}));

const _colors = {
    active: '#FCD259FF',
    inactive: '#FCD25900'
};

const _spacing = 12;


const UberEats = () => {
    const ref = useRef(null);
    const [index, setIndex] = useState(0)
    const [viewPosition, setViewPosition] = useState(0);

    useEffect(() => {
        ref.current?.scrollToIndex({
            index,
            animated: true,
            viewOffset: viewPosition === 1 || viewPosition === .5 ? 0 : _spacing,
            viewPosition // percentage from the viewport starting from the left-hand side
        })
    }, [index, viewPosition])

    return (
        <>
            <FlatList
                ref={ref}
                initialScrollIndex={index}
                style={{flexGrow: 0}}
                data={data}
                keyExtractor={(item) => item.key}
                contentContainerStyle={{paddingLeft: _spacing}}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({item, index: fIndex}) => {
                    return (
                        <TouchableOpacity onPress={() => setIndex(fIndex)}>
                            <MotiView
                                animate={{
                                    opacity: fIndex === index ? 1 : .6
                                }}
                                transition={{
                                    duration: 500
                                }}
                                style={{
                                    marginRight: _spacing,
                                    padding: _spacing,
                                    borderWidth: 2,
                                    borderColor: _colors.active,
                                    borderRadius: 12,
                                }}>
                                <Text style={{color: '#36303F', fontWeight: '700'}}>
                                    {item.job}
                                </Text>
                            </MotiView>
                        </TouchableOpacity>
                    );
                }}
            />
            <View
                style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: _spacing * 5,
                }}>
                <View style={{alignItems: 'center'}}>
                    <Text
                        style={{
                            color: '#36303F',
                            fontWeight: '700',
                            marginBottom: _spacing,
                        }}>
                        Scroll position
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            width: width / 2,
                            justifyContent: 'center',
                        }}>
                        <TouchableOpacity onPress={() => setViewPosition(0)}>
                            <View
                                style={{
                                    padding: _spacing,
                                    backgroundColor: '#FCD259',
                                    borderRadius: _spacing,
                                    marginRight: _spacing,
                                }}>
                                <Entypo name='align-left' size={24} color='#36303F'/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setViewPosition(0.5)}>
                            <View
                                style={{
                                    padding: _spacing,
                                    backgroundColor: '#FCD259',
                                    borderRadius: _spacing,
                                    marginRight: _spacing,
                                }}>
                                <Entypo
                                    name='align-horizontal-middle'
                                    size={24}
                                    color='#36303F'
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setViewPosition(1)}>
                            <View
                                style={{
                                    padding: _spacing,
                                    backgroundColor: '#FCD259',
                                    borderRadius: _spacing,
                                }}>
                                <Entypo name='align-right' size={24} color='#36303F'/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text
                        style={{color: '#36303F', fontWeight: '700', marginBottom: 10}}>
                        Navigation
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            width: width / 2,
                            justifyContent: 'center',
                        }}>
                        <TouchableOpacity onPress={() => {
                            if (index === 0) {
                                return;
                            }

                            setIndex(index - 1)
                        }}>
                            <View
                                style={{
                                    padding: _spacing,
                                    backgroundColor: '#FCD259',
                                    borderRadius: _spacing,
                                    marginRight: _spacing,
                                }}>
                                <Feather name='arrow-left' size={24} color='#36303F'/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            if (index === data.length - 1) {
                                return;
                            }
                            setIndex(index + 1)
                        }}>
                            <View
                                style={{
                                    padding: _spacing,
                                    backgroundColor: '#FCD259',
                                    borderRadius: _spacing,
                                }}>
                                <Feather name='arrow-right' size={24} color='#36303F'/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );

}

const ScrollToIndexAnimationScreen = () => {
    return (
        <View style={styles.container}>
            <UberEats/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default ScrollToIndexAnimationScreen