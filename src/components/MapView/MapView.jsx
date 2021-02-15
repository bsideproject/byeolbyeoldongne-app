import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const GoogleMap = ({ geolocation, ...props }) => {
    const { latitude, longitude } = geolocation;

    return (
        <View style={styles.mapView}>
            <MapView
                {...props}
                initialRegion={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
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
