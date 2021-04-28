import React from 'react';
import { Text, View } from 'react-native';

// styling components
import colours from '../../assets/colours/colours';
import { heightToDp, widthToDp } from '../../Utils';

// importing components 
import Button from '../../components/button'

const Home = ({ navigation }) => {
 
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Home</Text>
        </View>
    );
}

export default Home;
