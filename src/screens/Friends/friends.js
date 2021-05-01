import React from 'react';
import { Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import colours from '../../assets/colours/colours';
import Hedder from '../../components/hedder';


const Friends = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Friends</Text>
            <Hedder navigation={navigation}/>
        </View>
    );
}

export default Friends;
