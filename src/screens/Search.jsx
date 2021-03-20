import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import theme from '../context/theme';
import { batch, useDispatch, useSelector } from 'react-redux';
import {
    fetchLocationListAsync,
    initializeFetchLocationList,
    setCurrentLocation,
    setCurrentSearchText,
} from '../store/search';
import SafeAreaView from 'react-native-safe-area-view';
import RecentSearch from '../components/ScreenComponent/Search/RecentSearch';
import SearchHeader from '../components/Header/SearchHeader';
import SearchResult from '../components/ScreenComponent/Search/SearchResult';
import AsyncStorageService from '../service/AsyncStorageService';
import { setCurrentCoords } from '../store/geolocation';

const RECENT_SEARCH_STORAGE_KEY = '__recent_search_keywords__';

/**
 * 테스트 검색어 : 남부순환로144길 24
 */

const Search = ({ navigation }) => {
    const dispatch = useDispatch();

    const { fetchLocationList, currentSearchText } = useSelector(
        (state) => state.search
    );
    const locationList = fetchLocationList.data || [];

    const [searchText, setSearchText] = useState(currentSearchText);
    const [recentSearchKeywords, setRecentSearchKeywords] = useState([]);

    const getRecentSearchKeywords = async () => {
        const recentSearchKeywords = await AsyncStorageService.getItem(
            RECENT_SEARCH_STORAGE_KEY
        );
        setRecentSearchKeywords(recentSearchKeywords || []);
    };

    const handlePressBack = () => {
        navigation.goBack();
    };

    const handleChangeText = (text) => {
        setSearchText(text);
    };

    const handleSubmit = () => {
        dispatch(fetchLocationListAsync(searchText));
    };

    const handleItemPress = (item, searchText) => {
        const hasItem = recentSearchKeywords.find(
            (v) => console.log(v, item) || v.placeId === item.placeId
        );

        if (!hasItem) {
            const newRecentKeywords = [...recentSearchKeywords, item];

            AsyncStorageService.setItem(
                RECENT_SEARCH_STORAGE_KEY,
                newRecentKeywords
            );
        }

        batch(() => {
            dispatch(setCurrentSearchText(searchText));
            dispatch(setCurrentLocation(item));
            dispatch(setCurrentCoords(item.y, item.x));
        });

        navigation.goBack();
    };

    const handleSearchTextClear = () => {
        setSearchText('');
        dispatch(initializeFetchLocationList());
    };

    const handleRecentSearchTextClear = async (item) => {
        const removedRecentSearch = recentSearchKeywords.filter(
            (v) => v.placeId !== item.placeId
        );
        await AsyncStorageService.setItem(
            RECENT_SEARCH_STORAGE_KEY,
            removedRecentSearch
        );

        await getRecentSearchKeywords();
    };

    useEffect(() => {
        getRecentSearchKeywords();

        if (searchText) {
            dispatch(fetchLocationListAsync(searchText));
        } else {
            dispatch(initializeFetchLocationList());
        }
    }, []);

    return (
        <SafeAreaView style={styles.main}>
            <SearchHeader
                autoFocus
                handlePressBack={handlePressBack}
                handleChange={handleChangeText}
                searchText={searchText}
                handleSubmit={handleSubmit}
                clear={handleSearchTextClear}
            />
            <ScrollView>
                <RecentSearch
                    searchText={searchText}
                    results={recentSearchKeywords}
                    handleItemPress={handleItemPress}
                    clear={handleRecentSearchTextClear}
                />
                <SearchResult
                    searchText={searchText}
                    results={locationList}
                    handleItemPress={handleItemPress}
                />
            </ScrollView>
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
