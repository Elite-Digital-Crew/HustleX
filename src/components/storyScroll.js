import React, { useState } from 'react';
import { View, Image, TextInput, Alert, FlatList, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import DoubleClick from 'rn-double-click';

//styling components
import { AntDesign } from '@expo/vector-icons'; 
import { widthToDp } from '../Utils'
import colours from '../assets/colours/colours'
import Storydata from '../assets/data/storyData'


const Card = ({data}) => {
    const [like, setLike] = useState(false);
    const likeBlog = () => {
        if (like === true) {
            return setLike(false)
        }
        else {
            return setLike(true)
        }
    }
    return(
        <DoubleClick onClick={() => likeBlog()}>
            <View style={{
                alignItems: 'center',
                marginBottom: 20,
                width: '100%',
                height: widthToDp('64%'),
                borderRadius: 30,
                backgroundColor: colours.grey
            }}>
                <TouchableOpacity 
                onPress={() => likeBlog()}
                style={{
                    position: 'absolute',
                    right: '6%',
                    bottom: '7%',
                    width: widthToDp('10%'),
                    height : widthToDp('10%'),
                    backgroundColor: colours.grey,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 18,
                }}>
                    <AntDesign name={ like ? "heart" : "hearto" } size={widthToDp('5%')} color={ like ? '#FF1493' : colours.primary} />
                </TouchableOpacity>
                <Image 
                style={{
                    top: '5%',
                    width: '94%',
                    height: widthToDp('45%'),
                    borderRadius: 20
                }}
                source={{uri: data.Image}}
                />
                <Image 
                style={{
                    width: widthToDp('8%'),
                    height: widthToDp('8%'),
                    position: 'absolute',
                    left: '6%',
                    bottom: '7%'
                }}
                source={require('../assets/images/dummyUser.png')}
                />
                <View style={{
                    position: 'absolute',
                    left: '18%',
                    bottom: '3%'
                }}>
                    <Text style={{
                        fontFamily: "PoppinsSemiBold",
                        fontSize: widthToDp('2.5%'),
                        opacity: 0.5,
                        color: colours.text
                    }}>{data.name}</Text>
                    <Text style={{
                        fontFamily: "PoppinsBold",
                        fontSize: widthToDp('4%'),
                        color: colours.text
                    }}>{data.title}</Text>
                </View>
            </View>
        </DoubleClick>
        // <TouchableWithoutFeedback ></TouchableWithoutFeedback>
    )
}

const StoryScroll = () => {
    return (
        <View style={{
            top: 40
        }}>
            <Text style={{
                color: colours.text,
                left: '2%',
                fontFamily: "PoppinsBold",
                bottom: 10,
                fontSize: widthToDp('6%'),
            }}>Friends</Text>
            <FlatList
            data={Storydata}
            renderItem={({item}) => (
                <Card data={item}/>
            )}
            />
        </View>
    )
}

export default StoryScroll;
