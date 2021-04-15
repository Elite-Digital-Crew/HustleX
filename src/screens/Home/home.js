import React from 'react';
import { Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import colours from '../../assets/colours/colours';

//importing components
import Hedder from '../../components/Hedder';
import Scroll from '../../components/scroll'

//importing data
import TrendingData from '../../assets/data/HomeTrendingData'
import { heightToDp, widthToDp } from '../../Utils';
import PieChart from '../../components/pieChart';

const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView style={{paddingHorizontal: widthToDp('2%'), top: heightToDp('2%')}}>
                <Hedder/>
                <Scroll title={"TRENDING"} data={TrendingData} />
                <PieChart percentage={1024} max={2030} color={colours.primary} radius={widthToDp('12%')} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;
