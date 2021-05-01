import * as React from 'react';
import {TouchableOpacity, ImageBackground, Image, View, Text, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SharedElement } from 'react-navigation-shared-element';

import colours from '../../assets/colours/colours';
import { heightToDp, widthToDp } from '../../Utils';

const BlogDetails = ({navigation, route}) => {
    const {item} = route.params;
    // const {item} = route.params;
    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <ScrollView>
                <View style={{
                    alignItems: 'center'
                }}>
                    <SharedElement id={`item.${item.id}.title`}>
                    <ImageBackground
                    resizeMode="cover"
                    source={{uri: item.image}}
                    style={{
                        width: widthToDp('100%'),
                        height: heightToDp('50%'),
                    }}>
                        

                        <View style={{
                            flex: 1,
                            backgroundColor: 'rgba(0,0,0,0.1)',
                            bottom: '2%'
                        }}>
                            <TouchableOpacity 
                            onPress={() => navigation.goBack()}
                            style={{
                                position: 'absolute',
                                width: widthToDp('10%'),
                                height : widthToDp('10%'),
                                justifyContent: 'center',
                                alignItems: 'center',
                                top: 40,
                                left: 20,
                                borderRadius: 40,
                            }}>
                                <Ionicons name="chevron-back-outline" size={widthToDp('8%')} color="white" />
                            </TouchableOpacity>
                            <Text 
                            numberOfLines={2}
                            style={{
                                position: 'absolute',
                                bottom: heightToDp('6%'),
                                left: widthToDp('4%'),
                                width: widthToDp('90%'),
                                color: colours.text,
                                fontFamily: "PoppinsBold",
                                color: colours.background,
                                fontSize: widthToDp('7%'),
                            }}>{item.title}</Text>
                            <Text style={{
                                position: 'absolute',
                                bottom: heightToDp('3.5%'),
                                left: widthToDp('4%'),
                                color: colours.text,
                                fontFamily: "PoppinsSemiBold",
                                color: colours.background,
                                fontSize: widthToDp('3%'),
                            }}>~ {item.readtime}</Text>
                            <Text style={{
                                position: 'absolute',
                                bottom: heightToDp('3.5%'),
                                right: widthToDp('4%'),
                                color: colours.text,
                                fontFamily: "PoppinsSemiBold",
                                color: colours.background,
                                fontSize: widthToDp('3%'),
                            }}>By {item.by}</Text>
                        </View>
                    </ImageBackground >
                    </SharedElement>
                    
                    <View style={{
                        width: widthToDp('100%'),
                        marginTop: heightToDp('2%'),
                        backgroundColor: colours.background,
                        top: -40,
                        paddingTop: widthToDp('4%'),
                        paddingHorizontal: widthToDp('4%'),
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                    }}>
                    <Text style={{
                        color: colours.text ,
                        fontFamily: "PoppinsMedium",
                        fontSize: widthToDp('3.5%'),
                        lineHeight: heightToDp('3%'), 
                        textAlign: 'justify',
                    }}>{item.content}</Text>
                    </View>
                </View>
            </ScrollView>
            {/* BACK BUTTON */}

        </SafeAreaView>
    );
};

BlogDetails.sharedElements =  route => {
    const {item} = route.params;
    return [`item.${item.id}.title`];
};


export default BlogDetails;