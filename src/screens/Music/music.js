import React from 'react';
import { Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import colours from '../../assets/colours/colours';
import Hedder from '../../components/hedder';


const Music = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Music</Text>
            <Hedder navigation={navigation}/>
        </View>
    );
}

export default Music;