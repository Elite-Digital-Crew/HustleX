import * as React from 'react';
import {TouchableOpacity, ImageBackground, Image, View, Text, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import colours from '../../assets/colours/colours';
import { heightToDp, widthToDp } from '../../Utils';

const BlogDetails = ({navigation, route}) => {
    const {item} = route.params;
    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor="transparent" barStyle='light-content' />
            <ScrollView>
                <View style={{
                    alignItems: 'center'
                }}>
                    <Animatable.View animation={"fadeIn"} duration={1000}>
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
                                style={{
                                    position: 'absolute',
                                    bottom: heightToDp('6%'),
                                    left: widthToDp('4%'),
                                    width: widthToDp('90%'),
                                    color: colours.white,
                                    fontFamily: "PoppinsBold",
                                    fontSize: widthToDp('5%'),
                                }}>{item.title}</Text>
                                <Text style={{
                                    position: 'absolute',
                                    bottom: heightToDp('3.5%'),
                                    left: widthToDp('4%'),
                                    color: colours.white,
                                    fontFamily: "PoppinsSemiBold",
                                    fontSize: widthToDp('3%'),
                                }}>~ {item.readtime}</Text>
                                <Text style={{
                                    position: 'absolute',
                                    bottom: heightToDp('3.5%'),
                                    right: widthToDp('4%'),
                                    color: colours.white,
                                    fontFamily: "PoppinsSemiBold",
                                    fontSize: widthToDp('3%'),
                                }}>By {item.by}</Text>
                            </View>
                        </ImageBackground >
                    </Animatable.View>
                    
                    <Animatable.View 
                    animation={"fadeInUp"}
                    duration={1500}
                    style={{
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
                    </Animatable.View>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
};


export default BlogDetails;