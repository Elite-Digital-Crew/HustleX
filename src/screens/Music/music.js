import React from 'react';
import { Text, View, TouchableOpacity, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView, Linking, Image } from 'react-native';
import { WebView } from 'react-native-webview';

import Hedder from '../../components/hedder';

import colours from '../../assets/colours/colours';
import { heightToDp, widthToDp } from '../../Utils';
import { playlistData, musicData} from '../../assets/data/musicData';


const Music = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            top: heightToDp('2%'),
            paddingHorizontal: widthToDp('3%')
        }}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <Hedder navigation={navigation}/>
            <ScrollView style={{
                flex: 1
            }}>
                <View>
                    <Text style={{
                        color: colours.text,
                        left: '2%',
                        fontFamily: "PoppinsBold",
                        fontSize: widthToDp('6%'),
                    }}>PLAYLISTS</Text>
                    <FlatList 
                    data={musicData}
                    numColumns={2}
                    renderItem={({item}) => (
                        <View style={{
                            width: '50%',
                            height: widthToDp('35%'),
                            padding: 4,
                            paddingHorizontal: 6
                        }}>
                            {item.link}
                        </View>
                    )}/>
                </View>
            </ScrollView>

            
            {/* <WebView source={{html: '<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWUSyphfcc6aL" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'}}/>
            <WebView source={{html: '<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX70RN3TfWWJh" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'}}/>
            <WebView source={{html: '<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWSJHnPb1f0X3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'}}/>
            <WebView source={{html: '<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9uKNf5jGX6m" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'}}/>
            <WebView source={{html: '<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9BXb6GsGCLl" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'}}/>

            <WebView source={{html: '<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWUI1rlvkdQnb" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'}}/>
           
            <WebView source={{html: '<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWXx3Txis2L4x" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'}}/>

            <WebView source={{html: '<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0wiundViT27" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'}}/> */}
            

        </SafeAreaView>
    );
}

export default Music;