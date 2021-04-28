import React from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';

import colours from '../../assets/colours/colours';
import { heightToDp, widthToDp } from '../../Utils';
import { MaterialIcons } from '@expo/vector-icons';

// importing components 
import Button from '../../components/button'

const CreateProfile = ({navigation}) => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <View style={{
        height: heightToDp('75%'),
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
        <Text style={{
          fontFamily: "PoppinsBold",
          fontSize: widthToDp('8%'),
          color: colours.text ,
        }}>CREATE PROFILE</Text>

        <View style={{
          height: heightToDp('12%'),
          width: heightToDp('12%'),
          backgroundColor: colours.darkgrey,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <MaterialIcons name="person" size={widthToDp('12%')} color="darkgrey" />
        </View>

        <TouchableOpacity>
          <Text>CLICK HERE TO ADD PROFILE</Text>
        </TouchableOpacity>

        <View style={{
          height: heightToDp('40%'),
          justifyContent: 'space-around'
        }}>
          <TextInput 
          placeholder= "USERNAME"
          style={styles.input} />

          <TextInput 
          placeholder="FULL NAME"
          style={styles.input} />

          <TextInput 
          placeholder="GENDER"
          style={styles.input} />

          <TextInput 
          placeholder="DATE OF BIRTH"
          style={styles.input} />
        </View>

        <Button 
            colour = {colours.secondary}
            text = {"REGISTER"}
            height = {heightToDp('8%')}
            width = {widthToDp('55%')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: heightToDp('8%'),
    width: widthToDp('70%'),
    borderRadius: 100,
    backgroundColor: colours.grey,
    paddingHorizontal: widthToDp('6%'),
    fontFamily: "PoppinsRegular",
    fontSize: widthToDp('3.5%'),
  }
});

export default CreateProfile;