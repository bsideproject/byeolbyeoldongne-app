import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchListItem from '../../ListItem/Search';
import { SEARCH_LIST_ITEM_TYPE } from '../../../constants/search';

const RecentSearch = ({
    searchText,
    results,
    handleItemPress,
    clear,
    ...props
}) => {
    return (
        <View style={styles.result}>
            {results.map((result) => {
                const text = result.placeName
                    ? `${result.addressName} ${result.placeName}`
                    : result.addressName;
                return (
                    <SearchListItem
                        key={result.placeId}
                        type={SEARCH_LIST_ITEM_TYPE.RECENT}
                        text={text}
                        highlightText={searchText}
                        handlePress={() => handleItemPress(result, text)}
                        clear={() => clear(result)}
                    />
                );
            })}
        </View>
    );
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
