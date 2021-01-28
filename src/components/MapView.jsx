import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const GoogleMap = (props) => {
    useEffect(() => {
        Geolocation.getCurrentPosition((position) => console.log(position));
    }, []);

    return (
        <MapView
            {...props}
            style={styles.mapView}
            mapType="standard"
            provider={PROVIDER_GOOGLE}
        />
    );
};

const styles = StyleSheet.create({
    mapView: { width: '100%', height: '100%' },
});

export default GoogleMap;
