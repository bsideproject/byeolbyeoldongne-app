import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Geolocation from '@react-native-community/geolocation';
import Main from '../screen/Main';
import Settings from '../screen/Settings';
import { setCurrentGeolocation } from '../store/geolocation';

const Stack = createStackNavigator();

const Route = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        Geolocation.getCurrentPosition(({ coords }) => {
            const { latitude, longitude } = coords;
            dispatch(setCurrentGeolocation(latitude, longitude));
        });
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main" headerMode="none">
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Settings" component={Settings} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Route;
