import React from 'react';
import {View , Text} from "react-native";
import  GoogleMap from "../components/MapView";

const Main =()=> {
    return (        
        <View style={{ flex: 1 }}> 
           <GoogleMap/>
        </View>        
    );
}

export default Main;

