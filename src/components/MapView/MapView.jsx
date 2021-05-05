import React, { useState, useRef, useEffect } from 'react';
import { Image, StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import theme from '../../context/theme';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTownAsync, setCoords } from '../../store/location';

const regionTypes = {
    GEOLOCATION: 'GEOLOCATION',
    ADDRESS: 'ADDRESS',
};

const GoogleMap = ({ ...props }) => {
    const dispatch = useDispatch();

    const { coords, town } = useSelector((state) => state.location);
    const { currentLocation } = useSelector((state) => state.search);

    const { latitude, longitude } = coords;
    const townInfo = town.data;
    const townLine = townInfo && townInfo.locationLineByAddressNameResponse;

    const [regionType, setRegionType] = useState(regionTypes.GEOLOCATION);
    const [currentRegion, setCurrentRegion] = useState({
        latitude,
        longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    });

    const mapRef = useRef(null);

    const updateRegion = (latitude, longitude) => {
        const newRegion = {
            ...currentRegion,
            latitude,
            longitude,
        };

        setCurrentRegion(newRegion);
        mapRef.current.animateToRegion(newRegion);
    };

    const onCurrentLocationButtonPress = () => {
        if (regionType === regionTypes.GEOLOCATION) {
            setRegionType(regionTypes.ADDRESS);
            return;
        }

        Geolocation.getCurrentPosition(async ({ coords }) => {
            const { latitude, longitude } = coords;

            setRegionType(regionTypes.GEOLOCATION);

            await dispatch(setCoords(latitude, longitude));
            updateRegion(latitude, longitude);
        });
    };

    useEffect(() => {
        updateRegion(latitude, longitude);
    }, [latitude, longitude]);

    useEffect(() => {
        dispatch(
            fetchTownAsync(currentLocation.latitude, currentLocation.longitude)
        );
    }, [currentLocation]);

    return (
        <View style={styles.mapView}>
            <MapView
                {...props}
                showsUserLocation
                followsUserLocation={regionType === regionTypes.GEOLOCATION}
                ref={mapRef}
                initialRegion={currentRegion}
                style={styles.mapView}
                provider={PROVIDER_GOOGLE}
                onMarkerDragEnd={() => console.log('dragend')}
            >
                <Marker
                    style={{ width: 10, height: 10 }}
                    coordinate={{
                        latitude: currentRegion.latitude,
                        longitude: currentRegion.longitude,
                    }}
                    // title={marker.title}
                    // description={marker.description}
                >
                    <Image
                        style={styles.markerIcon}
                        source={require('../../static/images/map/marker.png')}
                    />
                </Marker>

                <Polyline
                    coordinates={
                        townLine
                            ? [
                                {
                                    latitude: townLine.startLocation.lng,
                                    longitude: townLine.startLocation.lat,
                                },
                                {
                                    latitude: townLine.endLocation.lng,
                                    longitude: townLine.endLocation.lat,
                                },
                            ]
                            : []
                    }
                    strokeColor={theme.color.polyLine}
                    strokeColors={[theme.color.polyLine]}
                    fillColor={theme.color.polyLine}
                    strokeWidth={10}
                />
            </MapView>

            <TouchableNativeFeedback onPress={onCurrentLocationButtonPress}>
                <View style={styles.currentLocation}>
                    {regionType === regionTypes.GEOLOCATION ? (
                        <Image
                            style={styles.currentLocationIcon}
                            source={require('../../static/images/icons/current_location_active.png')}
                        />
                    ) : (
                        <Image
                            style={styles.currentLocationIcon}
                            source={require('../../static/images/icons/current_location.png')}
                        />
                    )}
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    mapView: { ...StyleSheet.absoluteFillObject },

    currentLocation: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: 38,
        height: 38,
        borderRadius: 50,
        top: 120,
        right: 20,
        backgroundColor: theme.color.background,
    },
    currentLocationIcon: {
        width: 21,
        height: 21,
    },
    markerIcon: {
        width: 40,
        height: 65,
    },
});

export default GoogleMap;
