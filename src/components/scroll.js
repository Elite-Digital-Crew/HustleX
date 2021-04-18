import React from 'react';
import { View, Text, FlatList, ImageBackground, TouchableWithoutFeedback } from 'react-native';


//styling elements
import colours from '../assets/colours/colours';
import { heightToDp, widthToDp } from '../Utils';
import Difficulty from './difficulty';

const Card = ({Title, Units, Difficulty, Navigation, data}) => {
    return(
        <TouchableWithoutFeedback onPress={() => Navigation.push('HomeDetails', {data: data})}>
            <View style={{
            // width: widthToDp('45%'),
            // height: heightToDp('30%'),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colours.grey,
            borderRadius: widthToDp('4%'),
            marginHorizontal: widthToDp('2%')
        }}>
            <ImageBackground
            source={require('../assets/images/test.png')}
            imageStyle={{borderRadius: widthToDp('2%')}}
            style={{
                width: widthToDp('45%'),
                height: widthToDp('65%')
            }}>
                <View style={{
                    position: 'absolute',
                    bottom: heightToDp('1%'),
                    left: widthToDp('2.5%'),
                }}>
                    <Text style={{
                    fontFamily: "PoppinsSemiBold",
                    fontSize: widthToDp('6%'),
                    textAlign: 'center',
                    bottom: heightToDp('-1%'),
                    textTransform: 'uppercase',
                    color: colours.white ,
                    }}>{Title}</Text>

                    <Text style={{
                    fontFamily: "PoppinsMedium",
                    fontSize: widthToDp('2.5%'),
                    textTransform: 'uppercase',
                    color: colours.white ,
                    }}>{Difficulty}</Text>
                    <Text style={{
                    fontFamily: "PoppinsMedium",
                    fontSize: widthToDp('2.5%'),
                    color: colours.white ,
                    }}>{Units} Excercises</Text>
                </View>
            </ImageBackground>
        </View>
        </TouchableWithoutFeedback>
    )
}

const scroll = ({title, data, navigation}) => {
    return (
        <View style={{
            marginVertical: heightToDp('2%')
        }}>
            <Text style={{
                fontFamily: "PoppinsSemiBold",
                fontSize: widthToDp('8%'),
                color: colours.text
            }}>{title}</Text>

            <FlatList 
            horizontal={true}
            data={data}
            showsHorizontalScrollIndicator={false}
            renderItem= {({item}) => (
                <Card Title={item.Title} Units={item.units} Difficulty={item.difficulty} Navigation={navigation} data={item} />
            )}
            />
        </View>
    )
}

export default scroll
