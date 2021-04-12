import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Geolocation from '@react-native-community/geolocation';
import MainScreen from '../screens/Main';
import SettingScreen from '../screens/Settings';
import HomeScreen from '../screens/Home';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import OnBoardScreen from '../screens/OnBorad';
import WelcomeScreen from '../screens/Welcome';
import SearchScreen from '../screens/Search';
import { setCurrentGeolocation } from '../store/geolocation';
import ReviewEditScreen from '../screens/ReviewEdit';


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
            <Stack.Navigator initialRouteName="Signin" headerMode="none">
                <Stack.Screen
                    name="Signin"
                    component={SignInScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="Signup" component={SignUpScreen} />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="ReviewEdit" component={ReviewEditScreen}/>
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="Settings" component={SettingScreen} />
                <Stack.Screen
                    name="Onboard"
                    component={OnBoardScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Route;
