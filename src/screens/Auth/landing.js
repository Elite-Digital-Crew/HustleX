import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import colours from '../../assets/colours/colours';
import { heightToDp, widthToDp } from '../../Utils';

const Landing = ({ navigation }) => {
  return (
    <View style={{
        flex: 1,
        backgroundColor:colours.background,
        alignItems: 'center',
        justifyContent: 'space-around',
    }}>
      <Image
        style={{height: heightToDp('7%'), width: widthToDp('70%')}}
        source={require('../../assets/images/logo.png')}
      />
      <View>
        <TouchableOpacity style={{
            width: widthToDp('65%'),
            height: heightToDp('9%'),
            backgroundColor:colours.primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100, 
        }} onPress={() => navigation.push("Login")} >
            <Text style={{
                fontFamily: 'PoppinsBold',
                fontSize: widthToDp('6%'),
                color: colours.white 
            }}> LOGIN </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            width: widthToDp('65%'),
            height:heightToDp('9%'),
            backgroundColor:colours.secondary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            marginTop: heightToDp('2%'),
        }} onPress={() => navigation.push("Register")}>
            <Text style={{
                fontFamily: 'PoppinsBold',
                fontSize: widthToDp('6%'),
                color: colours.white ,
            }}> REGISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Landing;