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
import VerticalScroll from '../../components/verticalScroll';
import blogpopular from '../../assets/data/BlogPopular';

const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView 
            style={{paddingHorizontal: widthToDp('3%'), top: heightToDp('2%')}}
            horizontal={false}>
                <Hedder/>
                <Scroll title={"TRENDING"} data={TrendingData} />
                {/* <VerticalScroll title={"BLOG"} data={blogpopular}/> */}
                <DailyCard data={DailyData}/>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;
