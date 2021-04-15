import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

//icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

//styling components
import { heightToDp, widthToDp } from '../../Utils';
import colours from '../../assets/colours/colours'

const Login = () => {
  return (
    <View style={{
      backgroundColor:colours.background,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
      }}>
      <View style={{
        height: heightToDp('65%'),
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>

      {/* Hedder text */}
      <Text style={{
        fontFamily: "PoppinsBold",
        fontSize: widthToDp('14%'),
        color: colours.text ,
      }}>LOGIN</Text>

      {/* inputs */}
      <View style={{
        height: heightToDp('18%'),
        justifyContent: 'space-between',
      }}>
        <TextInput 
          keyboardType='email-address'
          placeholder= "Email"
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


        {/* Buttons */}
        <View>
          <TouchableOpacity  style={{
            width: widthToDp('50%'),
            height:heightToDp('8%'),
            backgroundColor: colours.secondary ,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
          }}>
            <Text style={{
              fontFamily: 'PoppinsBold',
              fontSize: widthToDp('5%'),
              color: colours.white,
            }}>LOGIN</Text>
          </TouchableOpacity>

            <Text style={{
              fontFamily: "PoppinsSemiBold",
              fontSize: widthToDp('4%'),
              color: colours.text ,
              textAlign: 'center',
              marginTop: heightToDp('2%')
            }}>OR LOGIN WITH</Text>

        </View>

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
          }}>
            <AntDesign name="google" size={widthToDp('6%')} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{
            width: widthToDp('10%'),
            height: widthToDp('10%'),
            backgroundColor: colours.grey,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <FontAwesome5 name="facebook-f" size={widthToDp('5%')} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
export default Login;