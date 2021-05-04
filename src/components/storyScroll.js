import React from 'react'
import { View, Image, TextInput, Alert, FlatList, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

//styling components
import { Ionicons } from '@expo/vector-icons'
import { widthToDp } from '../Utils'
import colours from '../assets/colours/colours'

import Storydata from '../assets/data/storyData'

const StoryScroll = () => {
    return (
        <View style={{
            top: 20
        }}>
            <Text style={{
                color: colours.text,
                left: '2%',
                fontFamily: "PoppinsBold",
                fontSize: widthToDp('6%'),
            }}>Friends</Text>
            <FlatList
            data={Storydata}
            renderItem={({item}) => (
                <View style={{
                    alignItems: 'center',
                    marginBottom: 20,
                    width: widthToDp('90%'),
                    height: widthToDp('64%'),
                    borderRadius: 30,
                    backgroundColor: colours.grey
                }}>
                    <Image 
                    style={{
                        top: '5%',
                        width: '94%',
                        height: widthToDp('45%'),
                        borderRadius: 20
                    }}
                    source={{uri: item.Image}}
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
                        }}>{item.name}</Text>
                        <Text style={{
                            fontFamily: "PoppinsBold",
                            fontSize: widthToDp('4%'),
                            color: colours.text
                        }}>{item.title}</Text>
                    </View>
                </View>
            )}
            />
        </View>
    )
}

export default StoryScroll;
