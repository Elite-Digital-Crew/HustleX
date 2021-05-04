import React from 'react'
import { View, Image, TextInput, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

//styling components
import { Ionicons } from '@expo/vector-icons'
import { widthToDp } from '../Utils'
import colours from '../assets/colours/colours'

const addStory = () => {
    return (
    <View style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '94%',
        flexDirection: 'row'
    }}>
        <Image 
        source={require('../assets/images/profile.png')}
        style={{
            width: widthToDp('9%'),
            height: widthToDp('9%'),
        }}
        /> 
        <TextInput 
        placeholder={"Tell Everyone What You Are Up To..."}
        style={{
            width: '70%',
            height: widthToDp('11%'),
            paddingHorizontal: 15,
            borderRadius: 15,
            backgroundColor: colours.grey,
            fontSize: widthToDp('3%'),
            fontFamily: "PoppinsRegular"
        }}
        />
        <TouchableOpacity style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            width: widthToDp('8%'),
            height: widthToDp('8%'),
            backgroundColor: colours.grey,
        }}
        onPress={() => Alert.alert("Alert", "This feature is not avilable in beta")}>
            <Ionicons name="add-outline" size={30} />
        </TouchableOpacity>
    </View>
    )
}

export default addStory
