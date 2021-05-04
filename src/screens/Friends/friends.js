import React from 'react';
import { Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';

import colours from '../../assets/colours/colours';
import { heightToDp, widthToDp } from '../../Utils';


import AddStory from '../../components/addStory';
import Hedder from '../../components/hedder';
import StoryScroll from '../../components/storyScroll';


const Friends = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            top: heightToDp('2%'),
            alignItems: 'center',
            paddingHorizontal: widthToDp('3%')
        }}>
            <Hedder navigation={navigation}/>
            <AddStory />
            <StoryScroll />
        </SafeAreaView>
    );
}

export default Friends;
