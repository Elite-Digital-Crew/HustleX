import * as React from 'react';
import {TouchableOpacity, ImageBackground, View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

import colours from '../../assets/colours/colours';
import { heightToDp, widthToDp } from '../../Utils';

const BlogDetails = props => {
    const {data} = props.route.params;
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{
                    alignItems: 'center'
                }}>
                    <ImageBackground
                    // resizeMode="cover"
                    source={{uri: data.image}}
                    imageStyle={{
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                    }}
                    style={{
                        width: widthToDp('100%'),
                        height: heightToDp('50%'),
                    }}>
                        
                        <TouchableOpacity 
                        onPress={() => props.navigation.goBack()}
                        style={{position: 'absolute', top: 40, left: 20}}
                        >
                            <AntDesign name="left" size={widthToDp('6%')} color="white" />
                        </TouchableOpacity>

                        <Text style={{
                            position: 'absolute',
                            bottom: heightToDp('6%'),
                            left: widthToDp('4%'),
                            width: widthToDp('76%'),
                            color: colours.text,
                            fontFamily: "PoppinsSemiBold",
                            color: colours.background,
                            fontSize: widthToDp('5%'),
                        }}>{data.title}</Text>
                        <Text style={{
                            position: 'absolute',
                            bottom: heightToDp('3.5%'),
                            left: widthToDp('4%'),
                            color: colours.text,
                            fontFamily: "PoppinsRegular",
                            color: colours.background,
                            fontSize: widthToDp('3%'),
                        }}>~ {data.readtime}</Text>
                        <Text style={{
                            position: 'absolute',
                            bottom: heightToDp('3.5%'),
                            right: widthToDp('4%'),
                            color: colours.text,
                            fontFamily: "PoppinsMedium",
                            color: colours.background,
                            fontSize: widthToDp('3%'),
                        }}>By {data.username}</Text>
                    </ImageBackground>
                    <View style={{
                        width: widthToDp('92%'),
                        marginTop: heightToDp('2%')
                    }}>
                    <Text style={{
                        color: colours.text ,
                        fontFamily: "PoppinsRegular",
                        fontSize: widthToDp('3.5%'),
                        lineHeight: heightToDp('3%'), 
                        textAlign: 'justify',
                    }}>{data.content}</Text>
                    </View>
                </View>
            </ScrollView>
            {/* BACK BUTTON */}

        </SafeAreaView>
    );
};

export default BlogDetails;