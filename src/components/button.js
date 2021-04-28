import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import colours from '../assets/colours/colours';
import { widthToDp } from '../Utils';

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
