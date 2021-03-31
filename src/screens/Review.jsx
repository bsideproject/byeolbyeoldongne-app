import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';
import SafeAreaView from 'react-native-safe-area-view';
import theme from '../context/theme';
import Header from '../components/Header';
import StarPoint from '../components/Icon/StarPoint';

const ReviewScreen = ({ navigation }) => {
    const { reviews, averagePoint } = useSelector((state) => state.review);
    const { town } = useSelector((state) => state.location);

    const targetReviews = reviews.data;
    const targetTown = town.data;

    if (!targetReviews || !targetTown) {
        navigation.navigate('Main');
    }

    return (
        <SafeAreaView style={styles.main}>
            <Header handlePressBack={() => navigation.goBack()}>
                <View style={styles.headerView}>
                    <Text style={styles.headerText}>
                        {targetTown.roadAddress}
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={() => console.log('리뷰 쓰기로 이동')}
                >
                    <Text style={styles.postReviewButton}>평가</Text>
                </TouchableOpacity>
            </Header>

            <View style={styles.totalPoint}>
                <Text style={styles.averagePoint}>{averagePoint}</Text>
                <View style={styles.diagonalLineIconView}>
                    <Image
                        style={styles.diagonalLineIcon}
                        source={require('../static/images/icons/diagonal_line.png')}
                    />
                </View>
                <Text style={styles.totalText}>5.0</Text>
            </View>
            <View style={styles.centerView}>
                <StarPoint count={averagePoint} />
            </View>
            <View style={styles.centerView}>
                <View style={styles.thinDivider} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: theme.color.background,
    },
    headerView: {
        flex: 1,
        alignItems: 'center',
    },
    headerText: {
        fontSize: theme.font.size.large,
    },
    postReviewButton: {
        position: 'absolute',
        right: 10,
        top: -17,
        color: theme.color.main,
        fontSize: theme.font.size.middle,
        padding: 10,
    },
    totalPoint: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 28,
        marginBottom: 15,
    },
    centerView: {
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    averagePoint: {
        fontSize: 36,
        fontWeight: 'bold',
        marginRight: 5,
    },
    totalText: {
        paddingTop: 25,
        fontSize: theme.font.size.normal,
        fontWeight: 'bold',
        color: '#C1C1C1',
    },
    diagonalLineIconView: {
        paddingTop: 20,
        marginRight: 5,
    },
    diagonalLineIcon: {
        width: 12,
        height: 17,
    },
    thinDivider: {
        width: '100%',
        height: 1,
        backgroundColor: theme.color.lightBorder,
        marginTop: 25,
        marginBottom: 25,
    },
});

export default ReviewScreen;
