import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput, ScrollView, FlatList, SafeAreaView, SafeAreaViewComponent, ListView } from 'react-native';
import { StatusBar } from 'expo-status-bar';


import colours from '../../assets/colours/colours';
import { heightToDp, widthToDp } from '../../Utils';


import Hedder from '../../components/Hedder';
import Blogherocard from '../../components/blogHeroCard';
import VerticalScroll from '../../components/verticalScroll';


import herodata from '../../assets/data/blogData';
import populardata from '../../assets/data/BlogPopular';

export default function Blog({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView style={{paddingHorizontal: widthToDp('3%'), top: heightToDp('2%')}}>
            <Hedder/>
                <View>
                    <Text style={{
                            fontFamily: "PoppinsSemiBold",
                            fontSize: widthToDp('6%'),
                            color: colours.text,
                            marginTop: heightToDp('6%')
                        }}>HEY ALEX!</Text>  
                </View>
                {/* <Blogherocard data={herodata} /> */}

                <View style={{marginVertical: heightToDp('2%')}}>
                    
                    <Blogherocard 
                    data={herodata} 
                    navigation={navigation} 
                    title={'BLOGS'}/>
                    <VerticalScroll 
                    data={populardata}   
                    navigation={navigation}
                    title={'POPULAR'} />
                </View> 
            </ScrollView>
        </SafeAreaView>
    );
}