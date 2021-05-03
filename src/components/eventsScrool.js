import React from 'react';
import { View, TouchableHighlight, ImageBackground, Image, Text, FlatList, TouchableOpacity, Button, TouchableHighlightBase } from 'react-native';
import { SharedElement } from 'react-native-shared-element';

//Data
import EventsData from '../assets/data/eventsData';
import { heightToDp, widthToDp } from '../Utils';
import colours from '../assets/colours/colours';

const ITEM_SIZE = widthToDp('80%');
const ITEM_PADDING = widthToDp('2%');

const EventsScroll = ({navigation}) => {
    return (
        <View>
            <Text style={{
                color: colours.text,
                left: '2%',
                fontFamily: "PoppinsBold",
                fontSize: widthToDp('6%'),
            }}>EVENTS</Text>
            <FlatList 
            data={EventsData}
            horizontal
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
                <View style={{paddingRight: ITEM_PADDING}}>
                    <TouchableOpacity onPress={() => navigation.navigate('EventsDetails', { item })}>
                    <ImageBackground
                        resizeMode="cover"
                        source={{uri: item.image}} 
                        imageStyle={{borderRadius: 26}}
                        style={{
                        width: widthToDp('80%'),
                        height: widthToDp('60%'),
                        alignItems: 'center',
                        borderRadius: 26
                    }}>
                        <View style={{
                            width: '94%',
                            height: '26%',
                            borderRadius: widthToDp('2%') ,
                            padding: widthToDp('1%'),
                            backgroundColor: colours.grey,
                            position: 'absolute',
                            bottom: heightToDp('1%')
                        }}>
                            <Text style={{
                                fontSize: widthToDp('4%'),
                                fontFamily: "PoppinsSemiBold",
                                color: colours.text
                            }}>{item.title}</Text>
                            <Text 
                            numberOfLines={2}
                            style={{
                                fontSize: widthToDp('2%'),
                                fontFamily: "PoppinsRegular",
                                width: '75%',
                                paddingHorizontal: '2%',
                                color: colours.text,
                                opacity: 0.6
                            }}>{item.discription}</Text>
                            <View style={{
                                position: 'absolute',
                                bottom: '12%',
                                right: '3%'
                            }}>
                                <TouchableOpacity style={{
                                    backgroundColor: colours.primary,
                                    borderRadius: 50,
                                    width: widthToDp('14%'),
                                    height: heightToDp('2%'),
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                       fontSize: widthToDp('2%'),
                                       fontFamily: "PoppinsSemiBold",
                                       color: colours.white, 
                                    }}>Know More</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                    </TouchableOpacity>
                </View>   
            )}
            />
        </View>
    )
}

export default EventsScroll;
