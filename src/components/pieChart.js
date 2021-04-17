import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView, FlatList } from 'react-native';



// assets
import colours from '../assets/colours/colours';
import { heightToDp, widthToDp } from '../Utils';

const chartConfig = {
    backgroundGradientFrom: colours.grey,
    backgroundGradientTo: colours.grey,
    color: () => colours.primary,
    // strokeWidth: 5, // optional, default 3
    // barPercentage: 0.5,
    // useShadowColorFromDataset: false // optional
};
const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.2, 0.4, 0.8]
};


const pieChart = () => {
    return (
        <View>

        </View>
    )
}

export default pieChart
