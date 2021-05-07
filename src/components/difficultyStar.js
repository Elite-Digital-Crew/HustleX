import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colours from '../assets/colours/colours';
import { widthToDp } from '../Utils';

export default function Hardness({ hardness, size }) {
  const filledStars = Math.floor(hardness);
  const maxStars = Array(3 - filledStars).fill('staro');
  const r = [...Array(filledStars).fill('star'), ...maxStars];
  const Size = size

  return (
    <View style={{
      alignItems: 'center'
    }}>
    <View style={styles.hardness}>
      {r.map((type, index) => {
        return <AntDesign key={index} name={type} size={Size} color={colours.text} />;
      })}
    </View>
    <Text style={{
        marginRight: 4,
        fontFamily: "PoppinsMedium",
        fontSize: (Size) / 2
    }}>DIFFICULTY</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hardness: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4
  },
});