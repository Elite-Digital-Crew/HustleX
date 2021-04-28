import React from 'react';
import { Text, View, Image } from 'react-native';

// styling components
import colours from '../../assets/colours/colours';
import { heightToDp, widthToDp } from '../../Utils';

// importing components 
import Button from '../../components/button'

const Landing = ({ navigation }) => {

    function navigateLogin() {
        navigation.navigate("Login")
    }
    function navigateRegister() {
        navigation.navigate("Login")
    }
    
    return (
        <View style={{
            height: heightToDp('80%'),
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <Image style={{
                height: heightToDp('7%'),
                width: widthToDp('70%')
            }}
            source={require('../../assets/images/logo.png')}/>
            <View style={{
                height: heightToDp('20%'),
                justifyContent: 'space-around'
            }}>
                <Button 
                colour = {colours.primary}
                text = {"LOGIN"}
                height = {heightToDp('8%')}
                width = {widthToDp('55%')}
                onPress = {navigateLogin}
                />
                <Button 
                colour = {colours.secondary}
                text = {"REGISTER"}
                height = {heightToDp('8%')}
                width = {widthToDp('55%')}
                onPress = {navigateRegister}
                />
            </View>
        </View>
    );
}

export default Landing;