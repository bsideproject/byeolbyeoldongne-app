import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import theme from '../../../context/theme';

const ReviewComments = ({ comments, ...props }) => {
    if (!comments || !comments.length) return null;
    return (
        <View style={styles.listContainer}>
            <View style={styles.ProfileView} />
            <Text>리뷰자리</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        backgroundColor: '#F5F7FA',
        marginRight: -20,
        marginLeft: -20,
        padding: 20,
    },
    ProfileView: {
        flexDirection: 'row',
    },
});

export default ReviewComments;
