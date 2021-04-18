import React from 'react'
import { View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { heightToDp, widthToDp } from '../Utils';
import colours from '../assets/colours/colours'

const Hedder = () => {
    return (
        <View style={{
            height: heightToDp('7%'),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: widthToDp('3%'),
            // backgroundColor: colours.primary
        }}>
            <AntDesign name="search1" size={widthToDp('5%')} color= {colours.text}/>
            <Image
            style={{
                height: heightToDp('4%'),
                width: heightToDp('4%'),
            }}
            source={require('../assets/images/profile.png')}
            />
        </View>
    )
}

export default Hedder
