import React from 'react'
import { View, Image, TextInput, Alert, FlatList, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

//styling components
import { Ionicons } from '@expo/vector-icons'
import { widthToDp } from '../Utils'
import colours from '../assets/colours/colours'
import MeetUpdata from '../assets/data/meetupdata'


const MeetUpScroll = () => {
    return (
        <View style={{
            top: 40
        }}>
            <Text style={{
                color: colours.text,
                left: '2%',
                bottom: 10,
                fontFamily: "PoppinsBold",
                fontSize: widthToDp('6%'),
            }}>Friends</Text>
            <FlatList
            data={MeetUpdata}
            renderItem={({item}) => (
                <View style={{
                    alignItems: 'center',
                    marginBottom: 20,
                    width: '100%',
                    height: widthToDp('24%'),
                    borderRadius: 30,
                    backgroundColor: colours.grey
                }}>
                    <Image 
                    style={{
                        width: widthToDp('12%'),
                        height: widthToDp('12%'),
                        position: 'absolute',
                        left: '4%',
                        bottom: '32%'
                    }}
                    source={require('../assets/images/dummyUser3.png')}
                    />
                    <Image 
                    style={{
                        width: widthToDp('12%'),
                        height: widthToDp('12%'),
                        position: 'absolute',
                        left: '6%',
                        bottom: '25%'
                    }}
                    source={require('../assets/images/dummyUser2.png')}
                    />
                    <View style={{
                        left: '8%',
                        top: '16%'
                    }}>
                        <Text style={{
                            fontFamily: "PoppinsBold",
                            fontSize: widthToDp('4%')
                        }}>{item.name}</Text>
                        <Text style={{
                            fontFamily: "PoppinsMedium",
                            width: widthToDp('60%'),
                            fontSize: widthToDp('2.5%')
                        }}>{item.discription}</Text>
                    </View>
                    <Text style={{
                        position: 'absolute',
                        right: '6%',
                        bottom: '12%',
                        fontFamily: "PoppinsSemiBold",
                        fontSize: widthToDp('2.5%')
                    }}>{item.time}</Text>
                </View>
            )}
            />
        </View>
    )
}

export default MeetUpScroll;
