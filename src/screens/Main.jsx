import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableNativeFeedback } from 'react-native';
import GoogleMap from '../components/MapView/MapView';
import SearchBox from '../components/ScreenComponent/Main/SearchBox';
import theme from '../context/theme';
import BottomBar from '../components/ScreenComponent/Main/BottomBar';
import { useDispatch, useSelector } from 'react-redux';
import { initializeCurrentLocation, setCurrentLocation } from '../store/search';
import SafeAreaView from 'react-native-safe-area-view';
import { initialCurrentLocation } from '../store/helper/initialStates';
import Geolocation from '@react-native-community/geolocation';
import { setCurrentGeolocation } from '../store/geolocation';
import mapLocationToCoords from '../util/mapLocationToCoords';

const regionTypes = {
    GEOLOCATION: 'GEOLOCATION',
    ADDRESS: 'ADDRESS',
};

const Main = ({ navigation }) => {
    const dispatch = useDispatch();

    const [regionType, setRegionType] = useState(regionTypes.GEOLOCATION);
    const { geolocation, categories, search } = useSelector((state) => {
        const { geolocation, categories, search } = state;
        return { geolocation, categories, search };
    });
    const { currentCategories } = categories;
    const { currentLocation, currentSearchText } = search;

    const handleSearchBarPress = () => {
        navigation.navigate('Search');
    };

    const clearInput = () => {
        dispatch(setCurrentLocation(initialCurrentLocation));
        navigation.navigate('Search');
    };

    const onCurrentLocationButtonPress = () => {
        if (regionType === regionTypes.GEOLOCATION) {
            setRegionType(regionTypes.ADDRESS);
            return;
        }

        Geolocation.getCurrentPosition(({ coords }) => {
            const { latitude, longitude } = coords;

            setRegionType(regionTypes.GEOLOCATION);
            dispatch(setCurrentGeolocation(latitude, longitude));
        });
    };

    const handleMapDragEnd = () => {
        setRegionType(regionTypes.ADDRESS);
    };

    useEffect(() => {
        if (currentLocation.placeId) {
            setRegionType(regionTypes.ADDRESS);
        }
    }, [currentLocation.placeId]);

    return (
        <SafeAreaView style={styles.main}>
            <GoogleMap
                regionType={regionType}
                currentLocation={mapLocationToCoords(currentLocation)}
                geolocation={geolocation}
                handleMapDragEnd={handleMapDragEnd}
            />
            <View style={styles.searchBox}>
                <SearchBox
                    searchText={currentSearchText}
                    handleSearchBarPress={handleSearchBarPress}
                    clear={clearInput}
                />
                <TouchableNativeFeedback onPress={onCurrentLocationButtonPress}>
                    <View style={styles.currentLocation}>
                        {regionType === regionTypes.GEOLOCATION ? (
                            <Image
                                style={styles.currentLocationIcon}
                                source={require('../static/images/icons/current_location_active.png')}
                            />
                        ) : (
                            <Image
                                style={styles.currentLocationIcon}
                                source={require('../static/images/icons/current_location.png')}
                            />
                        )}
                    </View>
                </TouchableNativeFeedback>
            </View>
            <BottomBar currentCategories={currentCategories} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: { ...StyleSheet.absoluteFillObject },
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        top: 25,
        padding: 20,
        width: '100%',
    },
    currentLocation: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: 38,
        height: 38,
        borderRadius: 50,
        bottom: -50,
        right: 20,
        backgroundColor: theme.color.background,
    },
    currentLocationIcon: {
        width: 21,
        height: 21,
    },
});

export default Main;
