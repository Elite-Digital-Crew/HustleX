import React, { useState } from 'react';
import {Text, View, ScrollView, FlatList, Image, ImageBackground, TouchableOpacity} from 'react-native';

import colours from '.././assets/colours/colours';
import { heightToDp, widthToDp } from '.././Utils';
import DifficultyStar from '.././components/difficultyStar';

import data from '../assets/data/courcesData';
import { AntDesign } from '@expo/vector-icons';

const Card =({item, navigation}) => {
    const [like, setLike] = useState(false);
    const likeCourse = () => {
        if (like === true) {
            return setLike(false)
        }
        else {
            return setLike(true)
        }
    }

    return (
        <TouchableOpacity 
        onPress={() => navigation.push('CoursesDetails', { item, like } )}
        style={{
            height: widthToDp('98%'),
            width: widthToDp('56%'),
            backgroundColor: colours.grey,
            alignItems: 'center',
            borderRadius: widthToDp('4%'),
            marginRight: widthToDp('3%'),
        }}>
            <Image
            source={{uri: item.image}}
            style={{
                width: '92%',
                top: '2.5%',
                height: widthToDp('62%'),
                borderRadius: widthToDp('4%'),
                shadowOpacity: 1,
            }}/>
            <TouchableOpacity 
            onPress={() => likeCourse()}
            style={{
                position: 'absolute',
                width: widthToDp('8%'),
                height : widthToDp('8%'),
                backgroundColor: colours.grey,
                justifyContent: 'center',
                alignItems: 'center',
                top: 22,
                right: 20,
                borderRadius: 12,
            }}>
                <AntDesign name={ like ? "heart" : "hearto" } size={widthToDp('5%')} color={ like ? '#FF1493' : colours.primary} />
            </TouchableOpacity>
            <Text style={{
            fontFamily: "PoppinsBold",
            textAlign: 'left',
            fontSize: widthToDp('4.6%'),
            color: colours.text ,
            position: 'absolute',
            bottom: '25%',
            left: '8%'
            }}>{item.title}</Text>
            <Text 
            numberOfLines={3}
            style={{
                width: '82%',
                fontFamily: "PoppinsRegular",
                textAlign: 'left',
                fontSize: widthToDp('3%'),
                color: colours.text ,
                position: 'absolute',
                bottom: '13.5%',
                left: '8%'
            }}>{item.description}</Text>
            <Text 
            style={{
                width: '82%',
                fontFamily: "PoppinsBold",
                textAlign: 'left',
                fontSize: widthToDp('3%'),
                color: colours.text ,
                position: 'absolute',
                bottom: '4.5%',
                left: '8%'
            }}>{item.Units} Exercises</Text>
            <View style={{
                position: 'absolute',
                bottom: '2%',
                right: '8%'
            }}>
                <DifficultyStar hardness={item.difficulty} size={widthToDp('4%')}/>
            </View>
        </TouchableOpacity>
    )
}

const coursesScroll = ({navigation}) => {
    return (
    <View style={{marginVertical: heightToDp('2%')}}>
    <Text style={{
        color: colours.text,
        left: '2%',
        fontFamily: "PoppinsBold",
        fontSize: widthToDp('6%'),
    }}>COURSES</Text>
    <FlatList 
    showsHorizontalScrollIndicator={false}
    data={data}
    horizontal={true}
    keyExtractor={item => item.id.toString()}
    style={{ marginVertical:heightToDp('0%')}}
    renderItem= {({item}) => (
        <Card item={item} navigation={navigation} />
    )}/>
    </View>
    )
}

export default coursesScroll
