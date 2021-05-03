import React from 'react';
import { ScrollView, Text, View, SafeAreaView, StatusBar } from 'react-native';

// styling components
import colours from '../../assets/colours/colours';
import { heightToDp, widthToDp } from '../../Utils';


// importing components 
import Button from '../../components/button'
import Hedder from '../../components/hedder';
import BlogScroll from '../../components/blogScroll';
import EventsScroll from '../../components/eventsScrool';
import PieChart from '../../components/pieChart'
import Homeicon from '../../assets/icons/home';
import Discover from '../../assets/icons/discover';
import Music from '../../assets/icons/music';
import Profile from '../../assets/icons/profile';
import TodayCard from '../../components/todayCard';

const Home = ({ navigation }) => {
 
    return (
        <SafeAreaView style={{
            flex: 1,
            top: heightToDp('2%'),
            paddingHorizontal: widthToDp('3%')
        }}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <Hedder navigation={navigation}/>
            <TodayCard />
            <BlogScroll navigation={navigation}/>
            {/* <EventsScroll navigation={navigation}/> */}
            {/* <PieChart /> */}
        </SafeAreaView>
    );
}

export default Home;
