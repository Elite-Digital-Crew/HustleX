import React from 'react';
import { View, TouchableHighlight, ImageBackground, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import colours from '../assets/colours/colours';

//Data
import BlogData from '../assets/data/blogData';
import { heightToDp, widthToDp } from '../Utils';

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
            keyExtractor={item => item.id.toString()}
            horizontal
            renderItem={({ item }) => (
                <View style={{
                    paddingHorizontal: widthToDp('1%')
                }}>
                    <TouchableOpacity style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => navigation.navigate("BlogDetails", {data: item})}>
                        <ImageBackground
                        resizeMode="cover"
                        source={{uri: item.image}} 
                        imageStyle={{borderRadius: 26}}
                        style={{
                        width: widthToDp('85%'),
                        height: widthToDp('80%'),
                        alignItems: 'center',
                        borderRadius: 26
                        }}>
                            <View style={{
                                backgroundColor: colours.grey,
                                width: widthToDp('81%'),
                                height: widthToDp('20%'),
                                borderRadius: 18,
                                paddingHorizontal: widthToDp('3%'),
                                position: 'absolute',                                
                                bottom: widthToDp('2%') ,
                                justifyContent: 'space-evenly',
                            }}>
                                <Text 
                                numberOfLines={2}
                                style={{
                                    fontFamily: "PoppinsBold",
                                    color: colours.text,
                                    textAlign: 'left',
                                    fontSize: widthToDp('4%'),
                                }}> {item.title} </Text>
                                <View style={{
                                    flexDirection: 'row',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        fontFamily: "PoppinsRegular",
                                        color: colours.text,
                                        fontSize: widthToDp('3%'),
                                    }}>~ {item.readtime}</Text>
                                    <Text style={{
                                        position: 'absolute',
                                        fontFamily: "PoppinsMedium",
                                        color: colours.text,
                                        bottom: 0,
                                        right: 0,
                                        fontSize: widthToDp('3%'),
                                    }}>By {item.by}</Text>
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
