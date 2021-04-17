import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView, FlatList } from 'react-native';

import colours from '../assets/colours/colours';
import { heightToDp, widthToDp } from '../Utils';



const verticalScroll = ({navigation, data, title}) => {
    return (
        <View>
            <Text style={{
                fontFamily: "PoppinsSemiBold",
                fontSize: widthToDp('8%'),
                left: widthToDp('2%'),
                color: colours.text
            }}>{title}</Text>
            <FlatList
            showsVerticalScrollIndicator= {false}
            data={data}
            horizontal={false}
            renderItem={({item}) => (
                <TouchableOpacity
                    // onPress={() => navigation.push('BlogDetails', {data: item})}
                    >
                    <View style={{
                        marginBottom: heightToDp('1%'),
                        backgroundColor: colours.grey,
                        borderRadius: widthToDp('2%'),
                        height: widthToDp('34%'),
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 15,
                            height: 5,
                        },
                        shadowOpacity: 0.4,
                        shadowRadius: 10,
                    }}>
                        <Image 
                        source={{uri: item.image}}
                        style={{
                            width: widthToDp('30%'),
                            height: widthToDp('30%'),
                            borderRadius: 10,
                            marginHorizontal: widthToDp('4%')
                        }}
                        />
                        <View>
                            <Text style={{
                                color: colours.secondary,
                                fontFamily: "PoppinsBold",
                                fontSize: widthToDp('3.5%'),
                            }}>{item.topic}</Text>
                            <Text style={{
                                color: colours.text,
                                fontFamily: "PoppinsMedium",
                                fontSize: widthToDp('4%'),
                                width: widthToDp('55%')
                            }}>{item.title}</Text>
                            <Text style={{
                                color: colours.text,
                                fontFamily: "PoppinsRegular",
                                fontSize: widthToDp('3%'),
                            }}>~{item.readtime}</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
            )}
            />
        </View>
    );
}

export default verticalScroll;
