import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


import { heightToDp, widthToDp } from '../Utils';
import colours from '../assets/colours/colours';

export default function blogHeroCard({ navigation, data, title }) {
    return(
        <View style={{
            marginTop: heightToDp('3%')
        }}>
            <Text style={{
                color: colours.text,
                fontFamily: "PoppinsSemiBold",
                fontSize: widthToDp('6%'),
            }}>{title}</Text>
            <FlatList 
            showsHorizontalScrollIndicator={false}
            data={data}
            horizontal={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
                <ScrollView horizontal={false}>
                    <TouchableOpacity
                    onPress={() => navigation.push('BlogDetails', {data: item})}>
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
                        <View style={{
                            // marginLeft: widthToDp('2%')
                        }}>
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
                </ScrollView>
            )}/>
        </View>
    );
}