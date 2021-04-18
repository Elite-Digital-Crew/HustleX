import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native';
import colours from '../assets/colours/colours';
import { heightToDp, widthToDp } from '../Utils';
import PieChart from '../components/pieChart'

const dailyCard = ({data, title}) => {
    return (
        <View>
            <Text style={{
            color: colours.text,
            fontFamily: "PoppinsSemiBold",
            fontSize: widthToDp('8%'),
            }}>{title}</Text> 
            <View style={{
            height: heightToDp('25%'),
            borderRadius: widthToDp('4%'),
            backgroundColor: colours.grey,
            flexDirection: 'row',
            alignItems: 'center'
            }}>
                <View style={{
                    width: '50%',
                    height: '60%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <View style={{
                        width: '50%',
                        borderLeftColor: colours.primary,
                        borderLeftWidth: widthToDp('1%')
                    }}>
                        <Text style={styles.h2}>STEPS</Text>
                        <Text style={styles.h2}>{data.steps}</Text>
                    </View>
                    <View style={{
                        width: '50%',
                        borderLeftColor: colours.secondary,
                        borderLeftWidth: widthToDp('1%')
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
                    <PieChart percentage={data.steps} max={data.stepsTarget} color={colours.primary} radius={widthToDp('12%')} />
                </View>
            </View>
        </View>
    )
}

export default dailyCard;

const styles = StyleSheet.create({
    h2:{
       fontFamily: "PoppinsSemiBold",
       color: colours.text,
       fontSize: widthToDp('4%'),
       marginHorizontal: widthToDp('2%')
    }
});