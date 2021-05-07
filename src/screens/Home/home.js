import React from 'react';
import { ScrollView, Text, View, SafeAreaView, StatusBar } from 'react-native';

// styling components
import colours from '../../assets/colours/colours';
import { heightToDp, widthToDp } from '../../Utils';


// importing components 
import Button from '../../components/button'
import Hedder from '../../components/hedder';
import BlogScroll from '../../components/blogScroll';
import TodayCard from '../../components/todayCard';
import CoursesScroll from '../../components/coursesScroll';

const Home = ({ navigation }) => {
 
    return (
        <SafeAreaView style={{
            flex: 1,
            top: heightToDp('2%'),
            paddingHorizontal: widthToDp('3%')
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                <Hedder navigation={navigation}/>
                <TodayCard />
                <CoursesScroll navigation={navigation}/>
                <BlogScroll navigation={navigation}/>
                <View style={{height: heightToDp('6%')}}></View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;
