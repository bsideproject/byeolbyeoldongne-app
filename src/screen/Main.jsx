import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import GoogleMap from '../components/MapView/MapView';
import SearchBox from '../components/Main/SearchBox';
import theme from '../components/context/theme';

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
            <View style={styles.bottomBar}>
                <View style={styles.evaluationBar}>
                    <Text style={styles.evaluationBarText}>동네 거주 평점</Text>
                    <View style={styles.evaluationRate}>
                        <Image
                            style={styles.starIcon}
                            source={require('../static/images/icons/star.png')}
                        />
                        <Text style={styles.evaluationRateText}>3.75</Text>
                    </View>
                    <TouchableOpacity style={styles.moreButton}>
                        <Text style={styles.moreButtonText}>더보기</Text>
                        <Image
                            style={styles.arrowRightIcon}
                            source={require('../static/images/icons/arrowRight.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
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
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        width: '100%',
    },
    evaluationBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 30,
        paddingTop: 20,
        backgroundColor: theme.color.background,
    },
    evaluationBarText: {
        width: '50%',
        fontSize: theme.font.size.large,
    },
    evaluationRate: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    starIcon: {
        width: 20,
        height: 20,
        marginRight: 14,
    },
    evaluationRateText: {
        fontWeight: 'bold',
        fontSize: theme.font.size.xxLarge,
    },
    moreButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    moreButtonText: {
        color: theme.color.subText,
        marginRight: 8,
    },
    arrowRightIcon: {
        width: 3,
        height: 7,
    },
});

export default Main;
