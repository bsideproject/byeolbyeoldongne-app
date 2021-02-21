import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import theme from '../context/theme';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchLocationListAsync,
    initializeFetchLocationList,
    setCurrentLocation,
} from '../store/search';
import SafeAreaView from 'react-native-safe-area-view';
import RecentSearch from '../components/ScreenComponent/Search/RecentSearch';
import SearchHeader from '../components/Header/SearchHeader';
import SearchResult from '../components/ScreenComponent/Search/SearchResult';

const Search = ({ navigation }) => {
    const dispatch = useDispatch();

    const { fetchLocationList, currentSearchText } = useSelector(
        (state) => state.search
    );
    const locationList = fetchLocationList.data || [];

    const [searchText, setSearchText] = useState(currentSearchText);

    const handlePressBack = () => {
        dispatch(initializeFetchLocationList());
        navigation.goBack();
    };

    const handleChangeText = (text) => {
        setSearchText(text);
    };

    const handleSubmit = () => {
        dispatch(fetchLocationListAsync(searchText));
    };

    const handleItemPress = (item) => {
        dispatch(setCurrentLocation(item));
    };

    const handleClear = () => {
        setSearchText('');
    };

    return (
        <SafeAreaView style={styles.main}>
            <SearchHeader
                autoFocus
                handlePressBack={handlePressBack}
                handleChange={handleChangeText}
                searchText={searchText}
                handleSubmit={handleSubmit}
            />
            {/*<RecentSearch />*/}
            <SearchResult
                searchText={searchText}
                results={locationList}
                handleItemPress={handleItemPress}
                clear={handleClear}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: theme.color.background,
    },
});

export default Search;
