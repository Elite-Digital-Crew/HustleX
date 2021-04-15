import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colours from '../assets/colours/colours';
import { widthToDp } from '../Utils';

const difficulty = ({difficultynumber}) => {
    const filledStars = Math.floor(difficultynumber);
    const maxStars = Array(3 - filledStars).fill('staro');
    const r = [...Array(filledStars).fill('star'), ...maxStars];
  
    return (
      <View style={{
        alignItems: 'center'
      }}>
      <View style={styles.hardness}>
        {r.map((type, index) => {
          return <AntDesign key={index} name={type} size={widthToDp('5%')} color={colours.text} />;
        })}
      </View>
      <Text style={styles.hardnessNumber}>DIFFICULTY</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    hardnessNumber: { marginRight: 4, fontFamily: "PoppinsMedium", fontSize: widthToDp('2%') },
    hardness: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 4
    },
});

export default difficulty
