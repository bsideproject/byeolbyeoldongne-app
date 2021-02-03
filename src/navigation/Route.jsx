import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from "../screen/Main";
import Settings from "../screen/Settings";


const Stack = createStackNavigator();

const Route = () =>{
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen name="Main" component={Main}/>
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;