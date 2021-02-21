import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const GoogleMap = ({ geolocation, currentLocation, ...props }) => {
    const { x, y } = currentLocation;
    const { latitude, longitude } = geolocation;

    return (
        <View style={styles.mapView}>
            <MapView
                {...props}
                initialRegion={{
                    latitude: x || latitude,
                    longitude: y || longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                style={styles.mapView}
                provider={PROVIDER_GOOGLE}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mapView: { ...StyleSheet.absoluteFillObject },
});

export default GoogleMap;
