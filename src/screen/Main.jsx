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
        top: 20,
        padding: 20,
        width: '100%',
    },
});

export default Main;
