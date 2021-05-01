import * as React from 'react';
import {TouchableOpacity, ImageBackground, View, Text, StyleSheet, Dimensions, ScrollView, StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import colours from '../../assets/colours/colours';
import { heightToDp, widthToDp } from '../../Utils';

const BlogDetails = props => {
    const {data} = props.route.params;
    return (
        <View>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <ScrollView>
                <View style={{
                    alignItems: 'center'
                }}>
                    <ImageBackground
                    // resizeMode="cover"
                    source={{uri: data.image}}
                    style={{
                        width: widthToDp('100%'),
                        height: heightToDp('50%'),
                    }}>
                        
                        <TouchableOpacity 
                        onPress={() => props.navigation.goBack()}
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

                        <Text style={{
                            position: 'absolute',
                            bottom: heightToDp('6%'),
                            left: widthToDp('4%'),
                            width: widthToDp('90%'),
                            color: colours.text,
                            fontFamily: "PoppinsBold",
                            color: colours.background,
                            fontSize: widthToDp('7%'),
                        }}>{data.title}</Text>
                        <Text style={{
                            position: 'absolute',
                            bottom: heightToDp('3.5%'),
                            left: widthToDp('4%'),
                            color: colours.text,
                            fontFamily: "PoppinsSemiBold",
                            color: colours.background,
                            fontSize: widthToDp('3%'),
                        }}>~ {data.readtime}</Text>
                        <Text style={{
                            position: 'absolute',
                            bottom: heightToDp('3.5%'),
                            right: widthToDp('4%'),
                            color: colours.text,
                            fontFamily: "PoppinsSemiBold",
                            color: colours.background,
                            fontSize: widthToDp('3%'),
                        }}>By {data.by}</Text>
                    </ImageBackground>
                    <View style={{
                        width: widthToDp('92%'),
                        marginTop: heightToDp('2%'),
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                    }}>
                    <Text style={{
                        color: colours.text ,
                        fontFamily: "PoppinsMedium",
                        fontSize: widthToDp('3.5%'),
                        lineHeight: heightToDp('3%'), 
                        textAlign: 'justify',
                    }}>{data.content}</Text>
                    </View>
                </View>
            </ScrollView>
            {/* BACK BUTTON */}

        </View>
    );
};

export default BlogDetails;