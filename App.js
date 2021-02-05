import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Route from './src/navigation/Route';
import store from './src/store';

const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <StatusBar
                    barStyle={Platform.select({
                        ios: 'dark-content',
                        android: 'light-content',
                    })}
                />
                <Route />
            </SafeAreaProvider>
        </Provider>
    );
};

export default App;
