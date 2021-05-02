import React from 'react'
import { View, StatusBar, SafeAreaView, Image, Text, TouchableOpacity, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';

import colours from '../../assets/colours/colours';
import { heightToDp, widthToDp } from '../../Utils';
import Button from '../../components/button'

const EventsDetails = ({navigation, route}) => {
    function buttonPress() {
        Alert.alert("Ooops", "You can't Register in beta")
    };
    const {item} = route.params;
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
                <TouchableOpacity 
                onPress={() => navigation.goBack()}
                style={{
                    position: 'absolute',
                    width: widthToDp('10%'),
                    height : widthToDp('10%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: 28,
                    left: 22,
                }}>
                    <Ionicons name="chevron-back-outline" size={widthToDp('10%')} color="black" />
                </TouchableOpacity>
            <StatusBar translucent backgroundColor="transparent" barStyle='light-content' />
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: widthToDp('92%'),
                // height: heightToDp('80%')
            }}>
                <Animatable.Image
                animation={"fadeInUp"} 
                source={{uri: item.image}}
                style={{
                    width: widthToDp('86%'),
                    height: heightToDp('42%'),
                    borderRadius: 26,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,
                }}
                />
                <Animatable.View
                animation={"fadeInUp"}
                style={{
                    top: '4%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical: 12,
                    height: heightToDp('28%'),
                    borderRadius : 10,
                    backgroundColor: colours.grey
                }}>
                    <Text style={{
                        color: colours.text,
                        width: widthToDp('90%'),
                        textAlign: 'center',
                        fontFamily: "PoppinsBold",
                        fontSize: widthToDp('6%'),
                    }}>{item.title}</Text>
                    <Text style={{
                        color: colours.text,
                        textAlign: 'center',
                        paddingHorizontal: '2%',
                        fontFamily: "PoppinsMedium",
                        fontSize: widthToDp('3%'),
                    }}>{item.discription}</Text>
                    <Button 
                    text={"REGISTER"} 
                    colour={colours.primary} 
                    width={widthToDp('32%')} 
                    height={widthToDp('12%')} 
                    FontSize={widthToDp('3%')}
                    onPress={buttonPress} />
                </Animatable.View>
            </View>
        </View>
    )
}

export default EventsDetails
