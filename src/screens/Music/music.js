import React from 'react';
import { Text, View, TouchableOpacity, TextInput, SafeAreaView, StatusBar, ScrollView, Linking, Image } from 'react-native';
import { WebView } from 'react-native-webview';

import Hedder from '../../components/hedder';

import colours from '../../assets/colours/colours';
import { heightToDp, widthToDp } from '../../Utils';

const Music = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            top: heightToDp('2%'),
            paddingHorizontal: widthToDp('3%')
        }}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <Hedder navigation={navigation}/>

            <WebView 
            source={{html: '<iframe src="https://open.spotify.com/embed/track/7fBv7CLKzipRk6EC6TWHOB" width="500" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'}}
            />
            
            <WebView 
            source={{html: '<iframe src="https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'}}
            />

            <WebView 
            source={{html: '<iframe src="https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'}}
            />

            <WebView 
            source={{html: '<iframe src="https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'}}
            />

            <WebView 
            source={{html: '<iframe src="https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'}}
            />
            
            <WebView 
            source={{html: '<iframe src="https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'}}
            />

        </SafeAreaView>
    );
}

export default Music;