import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "../screens/Main";
import SettingScreen  from "../screens/Settings";
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';


const Stack = createStackNavigator();

const Route = () =>{
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" headerMode="none">
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Main" component={MainScreen}/>
            <Stack.Screen name="Settings" component={SettingScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;