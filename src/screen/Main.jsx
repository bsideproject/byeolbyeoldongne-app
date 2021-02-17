import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import GoogleMap from '../components/MapView/MapView';
import SearchBox from '../components/Main/SearchBox';
import theme from '../components/context/theme';
import BottomBar from '../components/Main/BottomBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocationListAsync } from '../store/search';
import SafeAreaView from 'react-native-safe-area-view';

const Main = ({ navigation }) => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');

    const { geolocation, categories, search } = useSelector((state) => {
        const { geolocation, categories, search } = state;
        return { geolocation, categories, search };
    });
    const { currentCategories } = categories;
    const { fetchLocationList } = search;

    const handleSearch = () => {
        dispatch(fetchLocationListAsync(searchText));
    };

    const navigateSearchScreen = () => {
        navigation.navigate('Search', { searchText });
    };

    return (
        <SafeAreaView style={styles.main}>
            <GoogleMap geolocation={geolocation} />
            <View style={styles.searchBox}>
                <SearchBox
                    searchText={searchText}
                    handleClick={navigateSearchScreen}
                    handleChange={(text) => setSearchText(text)}
                    handleSearch={handleSearch}
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
