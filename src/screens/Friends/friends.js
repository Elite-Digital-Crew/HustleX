import React from 'react';
import { Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView, ScrollViewComponent, StatusBar } from 'react-native';

import colours from '../../assets/colours/colours';
import { heightToDp, widthToDp } from '../../Utils';


import AddStory from '../../components/addStory';
import Hedder from '../../components/hedder';
import StoryScroll from '../../components/storyScroll';
import MeetUpScroll from '../../components/meetUpScroll';


const Friends = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            top: heightToDp('2%'),
            paddingHorizontal: widthToDp('3%')
        }}>
            <ScrollView showsVerticalScrollIndicator={false}> 
                <Hedder navigation={navigation}/>
                <AddStory />
                <StoryScroll />
                <MeetUpScroll />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Friends;
