import React from 'react';
import { Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { widthToDp, heightToDp } from '../../Utils';
import colours from '../../assets/colours/colours';

const homeDetails = props => {
    const {data} = props.route.params;
    return (
        <SafeAreaView  style={{alignItems: 'center', top: heightToDp('4%'), backgroundColor: colours.background}}>
            <ScrollView>
                <Image 
                source={require('../../assets/images/test.png')}
                style={{
                    width: widthToDp('90%'),
                    height: heightToDp('30%'),
                    borderRadius: widthToDp('5%')
                }}/>
                <View style={{
                    width: widthToDp('90%'),
                    marginTop : heightToDp('2%'),
                    height: heightToDp('16%'),
                    borderRadius: widthToDp('4%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: colours.grey
                }}>
                    <Text style={{
                        fontFamily: "PoppinsBold",
                        color: colours.text,
                        fontSize: widthToDp('6%'),
                        textTransform: 'uppercase',
                    }}>{data.Title}</Text>
                    <View style={{
                        flexDirection: 'row',
                        width: '80%',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{
                            fontFamily: "PoppinsBold",
                            color: colours.secondary,
                            fontSize: widthToDp('4.5%'),
                            textAlign: 'center',
                        }}>WORKOUTS</Text>
                        <Text style={{
                            fontFamily: "PoppinsBold",
                            color: colours.secondary,
                            fontSize: widthToDp('4.5%'),
                            textAlign: 'center',
                        }}>DIFFICULTY</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        width: '80%',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{
                            fontFamily: "PoppinsBold",
                            color: colours.primary,
                            fontSize: widthToDp('4%'),
                            textAlign: 'center',
                            width: widthToDp('25%')
                        }}>{data.units}</Text>
                        <Text style={{
                            fontFamily: "PoppinsBold",
                            color: colours.primary,
                            fontSize: widthToDp('4%'),
                            textAlign: 'center',
                            width: widthToDp('25%')
                        }}>{data.difficulty}</Text>
                    </View>
                </View>
            </ScrollView>
            {/* BACK BUTTON */}

        </SafeAreaView>
    )
}

export default homeDetails
