import React from 'react';
import { Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import colours from '../../assets/colours/colours';
import BlogScroll from '../../components/blogScroll';
import CoursesScroll from '../../components/coursesScroll';
import EventsScroll from '../../components/eventsScrool';
import Hedder from '../../components/hedder';
import { heightToDp, widthToDp } from '../../Utils';


const Discover = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            top: heightToDp('2%'),
            paddingHorizontal: widthToDp('3%'),
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Hedder navigation={navigation}/>
                <BlogScroll navigation={navigation}/>
                <CoursesScroll navigation={navigation}/>
                <EventsScroll navigation={navigation}/>
                <View style={{height: heightToDp('6%')}}></View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Discover;
