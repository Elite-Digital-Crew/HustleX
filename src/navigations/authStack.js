import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//importing screens
import Landing from '../screens/Auth/landing';
import Login from '../screens/Auth/login';
import Register from '../screens/Auth/register';
import CreateProfile from '../screens/Auth/createProflie';


//createing stack navigator
const AuthStack = createStackNavigator(); 

const AuthIndex = () => {
  return (
    <AuthStack.Navigator
    screenOptions={{
    headerShown: false
    }}>
      <AuthStack.Screen name="Landing" component={Landing}/>
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="Register" component={Register} />
    <AuthStack.Screen name="CreateProfile" component={CreateProfile} />
    </AuthStack.Navigator>
  );
}

// expoting stack
export default AuthIndex;