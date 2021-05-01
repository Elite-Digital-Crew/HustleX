import React from 'react';
import { View, TouchableHighlight, ImageBackground, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

//Data
import BlogData from '../assets/data/blogData';
import { heightToDp, widthToDp } from '../Utils';
import colours from '../assets/colours/colours';

const BlogScroll = ({navigation}) => {
    return (
        <View>
            <Text style={{
                color: colours.text,
                fontFamily: "PoppinsBold",
                fontSize: widthToDp('8%'),
            }}>BLOG</Text>
            <FlatList 
            data={BlogData}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => `item.${item.id}.title`.toString()}
            horizontal
            renderItem={({ item }) => (
                <View style={{
                    paddingHorizontal: widthToDp('1%'),
                }}>
                    <TouchableOpacity style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => navigation.push("BlogDetails", { item })}>
                        <SharedElement id={`item.${item.id}.title`}>
                        <ImageBackground
                        resizeMode="cover"
                        source={{uri: item.image}} 
                        imageStyle={{borderRadius: 26}}
                        style={{
                        width: widthToDp('80%'),
                        height: widthToDp('70%'), 
                        alignItems: 'center',
                        borderRadius: 26,
                        }}>
                            <View style={{
                            width: '94%',
                            height: '30%',
                            borderRadius: widthToDp('4%') ,
                            paddingHorizontal: '3%',
                            backgroundColor: 'rgba(0,0,0,0.05)',
                            position: 'absolute',
                            alignItems :'center',
                            bottom: heightToDp('1%')
                        }}>
                            <Text 
                            numberOfLines={2}
                            style={{
                                fontSize: widthToDp('5%'),
                                fontFamily: "PoppinsSemiBold",
                                color: colours.white,
                            }}>{item.title}</Text>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '96%',
                            }}>
                                <Text 
                                numberOfLines={2}
                                style={{
                                    fontSize: widthToDp('2.5%'),
                                    fontFamily: "PoppinsSemiBold",
                                    color: colours.white,
                                    opacity: 0.7
                                }}>{item.readtime}</Text>
                                <Text 
                                numberOfLines={2}
                                style={{
                                    fontSize: widthToDp('2.5%'),
                                    fontFamily: "PoppinsSemiBold",
                                    color: colours.white,
                                    opacity: 0.7
                                }}>{item.by}</Text>
                            </View>
                        </View>
                        </ImageBackground>
                        </SharedElement>
                    </TouchableOpacity>
                </View>
            )}/>
        </View>
    )
}

export default BlogScroll;
