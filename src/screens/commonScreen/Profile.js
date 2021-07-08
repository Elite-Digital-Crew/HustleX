import React from 'react'
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import colours from '../../assets/colours/colours'
import { heightToDp, widthToDp } from '../../Utils'
import { Ionicons } from '@expo/vector-icons';

function Profile({navigation}) {
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                backgroundColor: colours.grey,
                height: '25%',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Image
                style={{
                    height: heightToDp('12%'),
                    width: heightToDp('12%'),
                }}
                source={require('../../assets/images/profile.png')}
                />
                <Text style={{
                    fontFamily: "PoppinsBold",
                    fontSize: widthToDp('7%')
                }}>Alex Deen</Text>
                <Text style={{
                    fontFamily: "PoppinsSemiBold",
                    opacity: 0.5,
                    fontSize: widthToDp('4%')
                }}>Fitness Freek</Text>
            </View>
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
                <Ionicons name="chevron-back-outline" size={widthToDp('8%')} color="black" />
            </TouchableOpacity>
            <View style={{
                backgroundColor: colours.darkgrey,
                flexDirection: 'row',
                width: '70%',
                justifyContent: 'space-between'
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text style={{
                fontSize: widthToDp('5%'),
                fontFamily: "PoppinsBold"
                }}>104</Text>
                <Text style={{
                fontSize: widthToDp('3%'),
                opacity: 0.5,
                fontFamily: "PoppinsBold"
                }}>Followers</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                    fontSize: widthToDp('5%'),
                    fontFamily: "PoppinsBold"
                    }}>1.4K</Text>
                    <Text style={{
                    fontSize: widthToDp('3%'),
                    opacity: 0.5,
                    fontFamily: "PoppinsBold"
                    }}>Following</Text>
                </View>
            </View>
            <Image 
            resizeMode="cover"
            style={{
                width: 480,
                height: 250,
            }}
            source={require('../../assets/images/activity.png')}
            />
        </SafeAreaView>
    )
}

export default Profile
