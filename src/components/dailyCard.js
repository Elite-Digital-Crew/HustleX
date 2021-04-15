import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native';
import colours from '../assets/colours/colours';
import { heightToDp, widthToDp } from '../Utils';
import PieChart from '../components/pieChart'

const dailyCard = ({data}) => {
    return (
        <View style={{
            height: heightToDp('25%'),
            borderRadius: widthToDp('4%'),
            backgroundColor: colours.grey,
            flexDirection: 'row'
        }}>
            <View style={{
                width: '50%',
                height: '100%',
                justifyContent:'center',
                alignItems: 'center',
            }}>
                <View>
                    <Text style={styles.h2}>STEPS</Text>
                    <Text style={styles.h2}>{data.steps}</Text>
                </View>
                <View>
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