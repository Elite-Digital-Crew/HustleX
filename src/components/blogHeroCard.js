import React from 'react';
import { Text, View, TouchableWithoutFeedback, ImageBackground, ScrollView, FlatList } from 'react-native';


import { heightToDp, widthToDp } from '../Utils';
import colours from '../assets/colours/colours';

export default function blogHeroCard({ navigation, data, title }) {
    return(
        <View>
            <Text style={{
                color: colours.text,
                fontFamily: "PoppinsBold",
                fontSize: widthToDp('8%'),
            }}>{title}</Text>  
            <FlatList 
            showsHorizontalScrollIndicator={false}
            data={data}
            horizontal={true}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
                <ScrollView>
                    <TouchableWithoutFeedback
                    onPress={() => navigation.push('BlogDetails', {data: item})}
                    >
                    <View style={{
                        marginRight: widthToDp('4%'),
                        borderRadius: 200
                    }}>
                        <ImageBackground
                            resizeMode="cover"
                            source={{uri: item.image}} 
                            imageStyle={{ borderRadius: 16}}
                            style={{
                            width: widthToDp('80%'),
                            height: widthToDp('80%'),
                        }}>
                            <Text style={{
                                position: 'absolute',
                                bottom: heightToDp('4%'),
                                left: widthToDp('4%'),
                                width: widthToDp('76%'),
                                fontFamily: "PoppinsSemiBold",
                                color: colours.white,
                                fontSize: widthToDp('5%'),
                            }}>{item.title}</Text>
                            <Text style={{
                                position: 'absolute',
                                bottom: heightToDp('2%'),
                                left: widthToDp('4%'),
                                fontFamily: "PoppinsRegular",
                                color: colours.white,
                                fontSize: widthToDp('3%'),
                            }}>~ {item.readtime}</Text>
                            <Text style={{
                                position: 'absolute', 
                                bottom: heightToDp('2%'),
                                right: widthToDp('4%'),
                                fontFamily: "PoppinsMedium",
                                color: colours.white,
                                fontSize: widthToDp('3%'),
                            }}>By {item.username}</Text>
                        </ImageBackground>
                    </View>
                    </TouchableWithoutFeedback> 
                </ScrollView>
        )}/>
        </View>
    );
}