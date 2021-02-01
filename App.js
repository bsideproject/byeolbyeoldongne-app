import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomeScreen from './src/screens/Home';
import MainScreen from './src/screens/Main';

const Stack = createStackNavigator();

const App = () => {
    console.log('coco', process.env.NODE_ENV);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: '홈 화면' }}
                />
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                    options={{ title: '메인 화면' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
