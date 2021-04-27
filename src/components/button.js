import React from 'react'
import { Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import colours from '../assets/colours/colours';
import { heightToDp, widthToDp } from '../Utils';

const button = ({
    text = "text",
    colour = "tomato",
    height = 80,
    width = 250,
    onPress
}) => {
    return (
        <TouchableOpacity style={{
            height: height,
            width : width,
            backgroundColor : colour,
            justifyContent: 'center', 
            alignItems: 'center',
            borderRadius: 100
        }}
        onPress={onPress}>
            <Text style={{
                fontFamily: 'PoppinsBold',
                fontSize: widthToDp('5%'),
                color: colours.white,
            }}>{text}</Text>
        </TouchableOpacity>  
    )
}

export default button
