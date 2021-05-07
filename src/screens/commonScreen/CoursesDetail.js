import React, { useState } from 'react';
import {TouchableOpacity, ImageBackground, Image, View, Text, SafeAreaView, ScrollView, StatusBar, InteractionManager} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import * as Animatable from 'react-native-animatable';

import colours from '../../assets/colours/colours';
import { heightToDp, widthToDp } from '../../Utils';
import DifficultyStar from '../../components/difficultyStar';
import { FlatList } from 'react-native-gesture-handler';

const BlogDetails = ({navigation, route}) => {

    const {item} = route.params;
    // const {like} = route.params;
    const [like, setLike] = useState(false);
    const likeBlog = () => {
        if (like === true) {
            return setLike(false)
        }
        else {
            return setLike(true)
        }
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: StatusBar.currentHeight,
                    paddingHorizontal: widthToDp('3%')
                }}>
                    <Animatable.Image 
                    animation={"fadeIn"}
                    source={{uri: item.image}}
                    style={{
                        width: '100%',
                        height: widthToDp('82%'),
                        borderRadius: 24
                    }}/>
                    <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    style={{
                        position: 'absolute',
                        width: widthToDp('10%'),
                        height : widthToDp('10%'),
                        backgroundColor: colours.grey,
                        justifyContent: 'center',
                        alignItems: 'center',
                        top: 20,
                        left: 36,
                        borderRadius: 18,
                    }}>
                        
                        <Ionicons name="chevron-back-outline" size={widthToDp('8%')} color={colours.primary} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => likeBlog()}
                    style={{
                        position: 'absolute',
                        width: widthToDp('10%'),
                        height : widthToDp('10%'),
                        backgroundColor: colours.grey,
                        justifyContent: 'center',
                        alignItems: 'center',
                        top: 20,
                        right: 36,
                        borderRadius: 18,
                    }}>
                        <AntDesign name={ like ? "heart" : "hearto" } size={widthToDp('5%')} color={ like ? '#FF1493' : colours.primary} />
                    </TouchableOpacity>
                    <Animatable.View 
                    animation={"fadeInUp"}
                    style={{
                        top: 12,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: widthToDp('45%'),
                        borderRadius: 24,
                        backgroundColor: colours.grey
                    }}>
                        <Text style={{
                            top: -16,
                            fontFamily: "PoppinsBold",
                            textAlign: 'center',
                            fontSize: widthToDp('8%'),
                            color: colours.text,
                        }}>{item.title}</Text>
                        <Text style={{
                            top: -22,
                            width: '92%',
                            fontFamily: "PoppinsMedium",
                            textAlign: 'center',
                            fontSize: widthToDp('3%'),
                            color: colours.text ,
                        }}>{item.description}</Text>
                        <Text  style={{
                            width: '82%',
                            fontFamily: "PoppinsBold",
                            fontSize: widthToDp('4%'),
                            color: colours.text ,
                        }}>{item.Units} Exercises</Text>
                        <View style={{
                            position: 'absolute',
                            bottom: 12,
                            right: 32
                        }}>
                            <DifficultyStar hardness={item.difficulty} size={widthToDp('4.5%')}/>
                        </View>
                    </Animatable.View>
                    <FlatList 
                    style={{top: '2%'}}
                    data={item.data}
                    renderItem={({item}) =>(
                        <Animatable.View 
                        animation={"fadeInUp"} 
                        style={{
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            width: widthToDp('96%'),
                            height: widthToDp('28%'),
                            backgroundColor: colours.grey,
                            borderRadius: 24,
                            marginBottom: 22
                        }}>
                            <Text style={{
                            fontFamily: "PoppinsBold",
                            fontSize: widthToDp('5%'),
                            color: colours.secondary ,
                        }}>{item.exercise}</Text>
                            <Text style={{
                            fontFamily: "PoppinsBold",
                            fontSize: widthToDp('4%'),
                            color: colours.text ,
                        }}>{item.TorC}</Text>
                        </Animatable.View>
                    )}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default BlogDetails;