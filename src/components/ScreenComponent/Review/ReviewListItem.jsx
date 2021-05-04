import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import StarPoint from '../../Icon/StarPoint';
import theme from '../../../context/theme';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import ReviewComments from './ReviewComments';

const formatDate = (date) => {
    const dt = new Date(date);
    return `${dt.getFullYear()}.${dt.getMonth() + 1}.${dt.getDate()}`;
};

const ReviewListItem = ({ review, ...props }) => {
    const [openComment, setOpenComment] = useState(false);

    const onPressCommentIcon = () => {
        setOpenComment(true);
    };

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
                <View>
                    <Image
                        style={styles.clockImage}
                        source={require('../../../static/images/icons/icon_clock.png')}
                    />
                </View>
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
            <View style={styles.bottomView}>
                <TouchableNativeFeedback onPress={onPressCommentIcon}>
                    <View style={styles.iconTextView}>
                        <Image
                            style={styles.clockImage}
                            source={require('../../../static/images/icons/icon_review.png')}
                        />
                        <Text style={styles.iconText}>
                            {review.comments ? review.comments.length : 0}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={styles.iconTextView}>
                    <Image
                        style={styles.clockImage}
                        source={require('../../../static/images/icons/icon_like.png')}
                    />
                    <Text style={styles.iconText}>{review.like || 0}</Text>
                </View>
            </View>
            <ReviewComments comments={review.comments} />
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
    clockImage: {
        width: 11,
        height: 11,
        marginRight: 5,
    },
    bottomView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 10,
    },
    iconTextView: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 7.5,
    },
    iconText: {
        fontWeight: 'normal',
        fontSize: theme.font.size.normal,
    },
});

export default ReviewListItem;
