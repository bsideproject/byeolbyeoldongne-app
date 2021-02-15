import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import GoogleMap from '../components/MapView/MapView';
import SearchBox from '../components/Main/SearchBox';
import theme from '../components/context/theme';
import BottomBar from '../components/Main/BottomBar';
import { useSelector } from 'react-redux';

const Main = () => {
    const [searchText, setSearchText] = useState('ddgasdgasdg');

    const geolocation = useSelector((state) => state.geolocation);
    const { currentCategories } = useSelector((state) => state.categories);
    console.log(currentCategories);
    return (
        <View style={styles.main}>
            <GoogleMap geolocation={geolocation} />
            <View style={styles.searchBox}>
                <SearchBox
                    searchText={searchText}
                    handleChange={(text) => setSearchText(text)}
                    clear={() => setSearchText('')}
                />
                <View style={styles.currentLocation}>
                    <Image
                        style={styles.currentLocationIcon}
                        source={require('../static/images/icons/current_location.png')}
                    />
                </View>
            </View>
            <BottomBar currentCategories={currentCategories} />
        </View>
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
