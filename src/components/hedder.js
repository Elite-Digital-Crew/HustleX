import React from 'react'
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import colours from '../assets/colours/colours'
import { heightToDp, widthToDp } from '../Utils'
import { AntDesign } from '@expo/vector-icons';


const Hedder = ({navigation}) => {
    return (
        <View style={{
            height: heightToDp('7%'),
            width: widthToDp('100%'),
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: widthToDp('8%'),
            flexDirection: 'row',
            backgroundColor: colours.primary
        }}>
            <TouchableOpacity onPress={() => Alert.alert("Alert", "This feature is not avilable in beta")}>
                <AntDesign name="search1" size={widthToDp('5%')} color= {colours.text}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Profile")}} >
                <Image
                style={{
                    height: heightToDp('4%'),
                    width: heightToDp('4%'),
                }}
                source={require('../assets/images/profile.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Hedder
