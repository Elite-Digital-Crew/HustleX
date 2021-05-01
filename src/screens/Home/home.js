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

const Home = ({ navigation }) => {
 
    return (
        <SafeAreaView style={{
            flex: 1,
            paddingHorizontal: widthToDp('3%')
        }}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <Hedder navigation={navigation}/>
            <BlogScroll navigation={navigation}/>
            <EventsScroll navigation={navigation}/>
        </SafeAreaView>
    );
}

export default Home;
