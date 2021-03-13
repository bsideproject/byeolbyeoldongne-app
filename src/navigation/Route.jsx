import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "../screens/Main";
import SettingScreen  from "../screens/Settings";
import HomeScreen from '../screens/Home';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import OnBoardScreen from "../screens/OnBorad";
import WelcomeScreen from "../screens/Welcome" ;
import { Button ,TouchableOpacity, View, Text } from 'react-native';

const Stack = createStackNavigator();

const Route = () =>{
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Signin" headerMode="screen">
            <Stack.Screen name="Signin" component={SignInScreen} 
              options = {{
                headerShown : false 
              }}            
            />
            <Stack.Screen name="Signup" component={SignUpScreen}/>            
            <Stack.Screen name="Home" component={HomeScreen}
              options = {{
                headerShown : false,                
              }}
            />
            <Stack.Screen name="Main" component={MainScreen}
                options = {{
                  headerShown : false,                
                }}
            />
            <Stack.Screen name="Settings" component={SettingScreen}/>            
            <Stack.Screen name="Onboard" component={OnBoardScreen}
                options = {{
                  headerShown : false 
                }}
            />
            <Stack.Screen name="Welcome" component={WelcomeScreen}
                options = {{
                  headerShown : false ,
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;