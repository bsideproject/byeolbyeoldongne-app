import React from 'react';
import { StatusBar , Platform } from 'react-native';
import { SafeAreaProvider} from "react-native-safe-area-context";
import Route from "./src/navigation/Route" ;

const App = ()=> {
    return (
      <SafeAreaProvider>
        <StatusBar
              barStyle={Platform.select({
                ios: 'dark-content',
                android: 'light-content',
              })}
        />
        <Route/>
    </SafeAreaProvider>       
    );
};

export default App;

