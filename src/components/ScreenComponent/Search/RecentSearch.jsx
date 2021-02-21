import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RecentSearch = ({ searchText, ...props }) => {
    return <View style={styles.recentSearch} />;
};

const styles = StyleSheet.create({
    recentSearch: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        width: '100%',
    },
});

export default RecentSearch;
