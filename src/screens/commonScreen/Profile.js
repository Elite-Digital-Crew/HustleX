import React from 'react'
import { View, Text, TouchableHighlight, Image, SafeAreaView } from 'react-native'
import colours from '../../assets/colours/colours'
import { heightToDp, widthToDp } from '../../Utils'

function Profile() {
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
                width: '90%',
                // aspectRatio: 0.5
            }}
            source={require('../../assets/images/activity.png')}
            />
        </SafeAreaView>
    )
}

export default Profile
