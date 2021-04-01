import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SearchListItem from '../../ListItem/Search';
import { SEARCH_LIST_ITEM_TYPE } from '../../../constants/search';
import StarPoint from '../../Icon/StarPoint';
import theme from '../../../context/theme';

const formatDate = (date) => {
    const dt = new Date(date);
    return `${dt.getFullYear()}.${dt.getMonth() + 1}.${dt.getDate()}`;
};

const ReviewListItem = ({ review, ...props }) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.totalPointView}>
                <StarPoint small count={review.averagePoint} />
                <Text style={styles.totalPointText}>
                    {(review.averagePoint * 10) % 10
                        ? review.averagePoint.toString()
                        : review.averagePoint + '.0'}
                </Text>
            </View>
            <Text style={styles.mainContent}>{review.reviewMainContent}</Text>
            <View style={styles.subContent}>
                <Text style={styles.subContentText}>
                    {review.nickname || '닉네임'}
                </Text>
                <Text style={styles.subContentText}>|</Text>
                <Text style={styles.subContentText}>
                    {formatDate(review.createdAt)}
                </Text>
            </View>
            <View>
                <Text style={styles.detailTitleText}>장점</Text>
                <Text style={styles.detailText}>
                    {review.reviewGoodContent}
                </Text>
            </View>
            <View>
                <Text style={styles.detailTitleText}>단점</Text>
                <Text style={styles.detailText}>{review.reviewBadContent}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: theme.color.lightBorder,
        marginBottom: 15,
    },
    totalPointView: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    totalPointText: {
        marginLeft: 10,
        fontWeight: '600',
        fontSize: theme.font.size.large,
    },
    mainContent: {
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 25,
        marginBottom: 7,
    },
    subContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
    },
    subContentText: {
        color: '#909090',
        marginRight: 5,
    },
    detailTitleText: {
        marginBottom: 10,
        fontSize: theme.font.size.middle,
    },
    detailText: {
        marginBottom: 25,
        fontSize: theme.font.size.middle,
    },
});

export default ReviewListItem;
