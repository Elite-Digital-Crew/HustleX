import React from 'react';
import { Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import colours from '../../assets/colours/colours';

//importing components
import Hedder from '../../components/Hedder';
import Scroll from '../../components/scroll'

//importing data
import TrendingData from '../../assets/data/HomeTrendingData'
import DailyData from '../../assets/data/dailydata'
import { heightToDp, widthToDp } from '../../Utils';
import DailyCard from '../../components/dailyCard';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView style={{paddingHorizontal: widthToDp('3%'), top: heightToDp('2%')}}>
                <Hedder/>
                <Text style={{
                    fontFamily: "PoppinsBold",
                    fontSize: widthToDp('10%'),
                    marginVertical: heightToDp('1%'),
                    color: colours.text,
                    bottom: heightToDp('-4%'),
                    marginTop: heightToDp('2%')
                }}>HEY ALEX!!</Text>
                <Scroll title={"TRENDING"} data={TrendingData} navigation={navigation}/>
                <DailyCard data={DailyData} title={"TODAY"}/>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;
