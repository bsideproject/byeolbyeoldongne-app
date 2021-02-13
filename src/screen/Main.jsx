import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import GoogleMap from '../components/MapView/MapView';
import SearchBox from '../components/Main/SearchBox';
import theme from '../components/context/theme';
import BottomBar from '../components/Main/BottomBar';

const Main = () => {
    const [searchText, setSearchText] = useState('ddgasdgasdg');

    return (
        <View style={styles.main}>
            <GoogleMap />
            <View style={styles.searchBox}>
                <SearchBox
                    searchText={searchText}
                    handleChange={(text) => setSearchText(text)}
                    clear={() => setSearchText('')}
                />
            </View>
            <BottomBar />
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
