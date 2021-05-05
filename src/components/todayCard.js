import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import colours from '../assets/colours/colours';
import { heightToDp, widthToDp } from '../Utils';

import PieChart from './pieChart'

const todayCard = () => {
    return (
        <View>
            <Text style={styles.todayText}>Today</Text>
            <View style={styles.todayWrapper}>
                <View style={styles.infowrapper}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    // backgroundColor: colours.darkgrey,
                    width: '50%'
                }}>
                    <View style={styles.leftWrappertop}>
                    <Text style={styles.subtextToday}>Steps</Text>
                    <Text style={styles.sub2textToday}>1024 of 2048</Text>
                    </View>
                    <View style={styles.leftWrapperBottom}>
                    <Text style={styles.subtextToday}>Kacl</Text>
                    <Text style={styles.sub2textToday}>240 of 360</Text>
                    </View>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    // backgroundColor: colours.darkgrey,
                    width: '50%'
                }}>
                    <PieChart   
                    inSize= {7}
                    inPercentage= {50}
                    inColour= {colours.secondary}
                    outSize= {10}
                    outPercentage= {66}
                    outColour= {colours.primary}/>
                </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    todayWrapper: {
      backgroundColor: colours.grey,
      width: '100%',
      height: widthToDp('50%'),
      borderRadius: widthToDp('5%')
    },
    todayText: {
        color: colours.text,
        left: '2%',
        fontFamily: "PoppinsBold",
        fontSize: widthToDp('6%'),
    },
    infowrapper: {
      width: widthToDp('90%'),
      height: widthToDp('50%'),
      alignItems: 'center',
      flexDirection: 'row',
    },
    subtextToday: {
      fontFamily: "PoppinsBold",
      color: colours.text,
      fontSize: widthToDp('5%'),
      marginHorizontal: widthToDp('2%')
    },
    sub2textToday: {
      fontFamily: "PoppinsBold",
      opacity: 0.5,
      color: colours.text,
      fontSize: widthToDp('2.5%'),
      marginHorizontal: widthToDp('2%')
    },
    leftWrappertop: {
      width: '50%',
      backgroundColor: colours.pink,
      borderLeftColor: colours.secondary,
      borderLeftWidth: 5,
    },
    leftWrapperBottom: {
      width: '50%',
      backgroundColor: colours.blue,
      marginTop: heightToDp('1%'),
      borderLeftColor: colours.primary,
      borderLeftWidth: 5,
    },
  
  });


export default todayCard
