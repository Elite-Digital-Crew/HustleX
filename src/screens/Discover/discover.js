import React from 'react';
import { Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import colours from '../../assets/colours/colours';
import BlogScroll from '../../components/blogScroll';
import EventsScroll from '../../components/eventsScrool';
import Hedder from '../../components/hedder';
import { heightToDp, widthToDp } from '../../Utils';


const Discover = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            top: heightToDp('2%'),
            paddingHorizontal: widthToDp('3%')
        }}>
            <ScrollView>
                <Hedder navigation={navigation}/>
                <EventsScroll navigation={navigation}/>
                <BlogScroll navigation={navigation}/>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Discover;
