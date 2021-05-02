import React from 'react';
import { View, TouchableHighlight, ImageBackground, Image, Text, FlatList, TouchableOpacity } from 'react-native';

//Data
import BlogData from '../assets/data/blogData';
import { heightToDp, widthToDp } from '../Utils';
import colours from '../assets/colours/colours';

const ITEM_SIZE = widthToDp('80%');
const ITEM_PADDING = widthToDp('2%');

const BlogScroll = ({navigation}) => {
    return (
        <View>
            <Text style={{
                color: colours.text,
                left: '2%',
                fontFamily: "PoppinsBold",
                fontSize: widthToDp('6%'),
            }}>BLOG</Text>
            <FlatList 
            data={BlogData}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            horizontal
            renderItem={({ item }) => (
                <View style={{
                    paddingRight: ITEM_PADDING,
                }}>
                    <TouchableOpacity style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => navigation.push("BlogDetails", { item })}>
                        <ImageBackground
                        resizeMode="cover"
                        source={{uri: item.image}} 
                        imageStyle={{borderRadius: 26}}
                        style={{
                        width: ITEM_SIZE,
                        height: widthToDp('70%'), 
                        alignItems: 'center',
                        borderRadius: 26,
                        }}>
                            <View style={{
                            width: '94%',
                            height: '30%',
                            borderRadius: widthToDp('4%') ,
                            paddingHorizontal: '3%',
                            backgroundColor: 'rgba(0,0,0,0.1)',
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
                    </TouchableOpacity>
                </View>
            )}/>
        </View>
    )
}

export default BlogScroll;
