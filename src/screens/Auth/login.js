import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';

// styling components
import colours from '../../assets/colours/colours';
import { heightToDp, widthToDp } from '../../Utils';

// icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

// importing components 
import Button from '../../components/button'

const Landing = ({ navigation }) => {
    function buttonPress() {
        console.log("button pressed");
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}> 
        <View style={{
            height: heightToDp('65%'),
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>

            {/* hedder text */}
            <Text style={{
                fontFamily: "PoppinsBold",
                fontSize: widthToDp('14%'),
                color: colours.text,
            }}>LOGIN</Text>
            <View style={{
                height: heightToDp('18%'),
                justifyContent: 'space-between',
            }}>
                <TextInput 
                keyboardType='email-address'
                placeholder= "Email"
                onChangeText={(val) => textInputChange(val)}
                style={{
                    height: heightToDp('8%'),
                    width: widthToDp('70%'),
                    borderRadius: 100,
                    backgroundColor: colours.grey,
                    paddingHorizontal: widthToDp('6%'),
                    fontFamily: "PoppinsRegular",
                    fontSize: widthToDp('4%'),
                }}
                />
                <TextInput 
                autoCompleteType='off'
                placeholder= "Password"
                textContentType='password'
                secureTextEntry={true}
                style={{
                    height: heightToDp('8%'),
                    width: widthToDp('70%'),
                    borderRadius: 100,
                    backgroundColor: colours.grey,
                    paddingHorizontal: widthToDp('6%'),
                    fontFamily: "PoppinsRegular",
                    fontSize: widthToDp('4%'),
                }}
                />
            </View>
            <View style={{
                height: heightToDp('20%'),
                justifyContent: 'space-around'
            }}>
                <Button 
                colour = {colours.primary}
                text = {"LOGIN"}
                height = {heightToDp('8%')}
                width = {widthToDp('55%')}
                onPress = {buttonPress}
                />
            </View>
            <Text style={{
              fontFamily: "PoppinsSemiBold",
              fontSize: widthToDp('4%'),
              color: colours.text ,
              textAlign: 'center',
              marginTop: heightToDp('2%')
            }}>OR LOGIN WITH</Text>
            <View style={{
                flexDirection: 'row',
                width: widthToDp('25%'),
                justifyContent: 'space-between',
            }}>
                <TouchableOpacity style={{
                    width: widthToDp('10%'),
                    height: widthToDp('10%'),
                    backgroundColor: colours.grey,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={() => Alert.alert("Alert", "This feature is not avilable in beta")}>
                    <AntDesign name="google" size={widthToDp('6%')} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: widthToDp('10%'),
                    height: widthToDp('10%'),
                    backgroundColor: colours.grey,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={() => Alert.alert("Alert", "This feature is not avilable in beta")}>
                    <FontAwesome5 name="facebook-f" size={widthToDp('5%')} color="black" />
                </TouchableOpacity>
            </View>
        </View>
        </View>
    );
}

export default Landing;