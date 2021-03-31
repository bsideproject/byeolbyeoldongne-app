import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GoogleMap from '../components/MapView/MapView';
import SearchBox from '../components/ScreenComponent/Main/SearchBox';
import BottomBar from '../components/ScreenComponent/Main/BottomBar';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLocation } from '../store/search';
import SafeAreaView from 'react-native-safe-area-view';
import { initialCurrentLocation } from '../store/helper/initialStates';
import SideBar from '../components/ScreenComponent/Main/SideBar';

const Main = ({ navigation }) => {
    const dispatch = useDispatch();

    const [openSidebar, setOpenSideBar] = useState(false);

    const { currentSearchText } = useSelector((state) => state.search);
    const { town } = useSelector((state) => state.location);
    const { reviews, averagePoint } = useSelector((state) => state.review);

    const handleSearchBarPress = () => {
        navigation.navigate('Search');
    };

    const handleMoreButtonPress = () => {
        navigation.navigate('Review');
    };

    const clearInput = () => {
        dispatch(setCurrentLocation(initialCurrentLocation));
        navigation.navigate('Search');
    };

    return (
        <SafeAreaView style={styles.main}>
            <GoogleMap />
            <View style={styles.searchBox}>
                <SearchBox
                    searchText={currentSearchText}
                    handleSearchBarPress={handleSearchBarPress}
                    clear={clearInput}
                    handleMenuPress={() => setOpenSideBar(true)}
                />
            </View>
            <BottomBar
                averagePoint={averagePoint}
                hasReview={reviews.data && reviews.data.length}
                currentCategories={
                    town.data ? town.data.categoryGroupEnumsList : []
                }
                handleMoreButtonPress={handleMoreButtonPress}
            />
            <SideBar
                isVisible={openSidebar}
                handleClose={() => setOpenSideBar(false)}
                navigation={navigation}
            />
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
});

export default Main;
