import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const GoogleMap = ({
    regionType,
    currentLocation,
    geolocation,
    handleMapDragEnd,
    ...props
}) => {
    const coords = regionType === 'ADDRESS' ? currentLocation : geolocation;
    const { latitude, longitude } = coords;

    const [currentRegion, setCurrentRegion] = useState({
        latitude,
        longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    });

    const mapRef = useRef(null);

    const onRegionChange = (region) => {
        setCurrentRegion(region);
    };
    useEffect(() => {
        const { latitude, longitude } = coords;
        const newRegion = {
            ...currentRegion,
            latitude,
            longitude,
        };

        setCurrentRegion(newRegion);
        mapRef.current.animateToRegion(newRegion);
    }, [coords]);

    return (
        <View style={styles.mapView}>
            <MapView
                {...props}
                showsUserLocation
                followsUserLocation
                ref={mapRef}
                initialRegion={currentRegion}
                style={styles.mapView}
                provider={PROVIDER_GOOGLE}
                onRegionChangeComplete={onRegionChange}
                onMarkerDragEnd={() => console.log('dragend')}
            >
                <Marker
                    coordinate={{
                        latitude: currentRegion.latitude,
                        longitude: currentRegion.longitude,
                    }}
                    // title={marker.title}
                    // description={marker.description}
                    image={require('../../static/images/map/marker.png')}
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    mapView: { ...StyleSheet.absoluteFillObject },
});

export default GoogleMap;
