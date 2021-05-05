import React, { useEffect }  from 'react';
import { Text, View, TouchableOpacity, TextInput, FlatList, SafeAreaView, StatusBar, ScrollView, Linking, Image } from 'react-native';
import { WebView } from 'react-native-webview';

import Hedder from '../../components/hedder';

import colours from '../../assets/colours/colours';
import { heightToDp, widthToDp } from '../../Utils';
import { playlistData, musicData} from '../../assets/data/musicData';

import { LogBox } from 'react-native';

const Music = ({ navigation }) => {
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])
    return (
        <SafeAreaView style={{
            flex: 1,
            top: heightToDp('2%'),
            paddingHorizontal: widthToDp('3%')
        }}>
            <ScrollView style={{
                flex: 1
            }}>
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                <Hedder navigation={navigation}/>
                <View>
                    <Text style={{
                        color: colours.text,
                        left: '2%',
                        fontFamily: "PoppinsBold",
                        fontSize: widthToDp('6%'),
                    }}>TOP SONGS</Text>
                    <FlatList 
                    data={musicData}
                    numColumns={3}
                    renderItem={({item}) => (
                        <View style={{
                            width: '33%',
                            height: widthToDp('26%'),
                            padding: 4,
                            paddingHorizontal: 6
                        }}>
                            {item.link}
                        </View>
                    )}/>
                </View>
                <View>
                    <Text style={{
                        color: colours.text,
                        left: '2%',
                        fontFamily: "PoppinsBold",
                        fontSize: widthToDp('6%'),
                    }}>PLAYLISTS</Text>
                    <FlatList 
                    data={playlistData}
                    numColumns={2}
                    renderItem={({item}) => (
                        <View style={{
                            width: '50%',
                            height: widthToDp('28%'),
                            padding: 4,
                            paddingHorizontal: 6
                        }}>
                            {item.link}
                        </View>
                    )}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

{/* <FlatList
    LisHeaderComponent={
    <>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
        <Hedder navigation={navigation}/>
    </>}

    ListFooterComponent={
        <> 
        <View>
            <Text style={{
                color: colours.text,
                left: '2%',
                fontFamily: "PoppinsBold",
                fontSize: widthToDp('6%'),
            }}>TOP SONGS</Text>
            <FlatList 
            keyExtractor={item => item.id.toString()}
            data={musicData}
            numColumns={3}
            renderItem={({item}) => (
                <View style={{
                    width: '33%',
                    height: widthToDp('30%'),
                    padding: 4,
                    paddingHorizontal: 6
                }}>
                    {item.link}
                </View>
            )}/>
        </View>
        <View>
            <Text style={{
                color: colours.text,
                left: '2%',
                fontFamily: "PoppinsBold",
                fontSize: widthToDp('6%'),
            }}>PLAYLISTS</Text>
            <FlatList 
            keyExtractor={item => item.id.toString()}
            data={playlistData}
            numColumns={2}
            renderItem={({item}) => (
                <View style={{
                    width: '50%',
                    height: widthToDp('28%'),
                    padding: 4,
                    paddingHorizontal: 6
                }}>
                    {item.link}
                </View>
            )}/>
        </View>
        </>
}/> */}


export default Music;