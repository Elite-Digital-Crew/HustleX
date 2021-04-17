import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native';
import colours from '../assets/colours/colours';
import { heightToDp, widthToDp } from '../Utils';
import PieChart from './piechart';

const dailyCard = ({data}) => {
    return (
        <View style={{
            height: heightToDp('25%'),
            borderRadius: widthToDp('4%'),
            // width: widthToDp('94%'),
            alignItems: 'center',
            backgroundColor: colours.grey,
            flexDirection: 'row'
        }}>
            <View style={{
                width: '50%',
                height: '70%',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <View style={{
                    width: '50%',
                    borderLeftColor: colours.secondary,
                    borderLeftWidth: widthToDp('1%'),
                }}>
                    <Text style={styles.h2}>STEPS</Text>
                    <Text style={styles.h2}>{data.steps}</Text>
                </View>
                <View style={{
                    width: '50%',
                    borderLeftColor: colours.primary,
                    borderLeftWidth: widthToDp('1%'),
                }}>
                    <Text style={styles.h2}>KACL</Text>
                    <Text style={styles.h2}>{data.kcal}</Text>
                </View>
            </View>
            <View style={{
                width: '50%',
                height: '100%',
                justifyContent:'center',
                alignItems: 'center',
            }}>
                <PieChart />
            </View>
        </View>
    )
}

export default dailyCard;

const styles = StyleSheet.create({
    h2:{
       fontFamily: "PoppinsMedium",
       color: colours.text,
       fontSize: widthToDp('4%'),
       marginHorizontal: widthToDp('2%')
    }
});