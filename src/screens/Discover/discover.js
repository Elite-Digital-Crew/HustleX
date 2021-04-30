import React from 'react';
import { Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import colours from '../../assets/colours/colours';
import Hedder from '../../components/hedder';


const Discover = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Discover</Text>
            <Hedder navigation={navigation}/>
        </View>
    );
}

export default Discover;
