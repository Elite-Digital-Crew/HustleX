import React from 'react';
import { View, Text, FlatList, ImageBackground } from 'react-native';


//styling elements
import colours from '../assets/colours/colours';
import { heightToDp, widthToDp } from '../Utils';
import Difficulty from './difficulty';

const Card = ({Title, Units}) => {
    return(
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
                height: heightToDp('30%')
            }}>
                <View style={{
                    position: 'absolute',
                    bottom: heightToDp('1%'),
                    left: widthToDp('2%')
                }}>
                    <Text style={{
                    fontFamily: "PoppinsSemiBold",
                    fontSize: widthToDp('6%'),
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    color: colours.white ,
                    }}>{Title}</Text>
                    <Text style={{
                    fontFamily: "PoppinsMedium",
                    fontSize: widthToDp('3%'),
                    color: colours.white ,
                    }}>{Units} Excercises</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const scroll = ({title, data}) => {
    return (
        <View style={{
            marginVertical: heightToDp('2%')
        }}>
            <Text style={{
                fontFamily: "PoppinsSemiBold",
                fontSize: widthToDp('6%'),
                color: colours.text
            }}>{title}</Text>

            <FlatList 
            horizontal={true}
            data={data}
            showsHorizontalScrollIndicator={false}
            renderItem= {({item}) => (
                <Card Title={item.Title} Units={item.units} />
            )}
            />
        </View>
    )
}

export default scroll
