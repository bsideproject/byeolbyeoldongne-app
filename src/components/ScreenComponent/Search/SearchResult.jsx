import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchListItem from '../../ListItem/Search';
import { SEARCH_LIST_ITEM_TYPE } from '../../../constants/search';

const SearchResult = ({
    searchText,
    results,
    handleItemPress,
    clear,
    ...props
}) => {
    return (
        <View style={styles.result}>
            {results.map((result) => {
                return (
                    <SearchListItem
                        key={result.placeId}
                        type={SEARCH_LIST_ITEM_TYPE.RESULT}
                        text={result.addressName}
                        highlightText={searchText}
                        handlePress={() => handleItemPress(result)}
                        clear={clear}
                    />
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    result: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        width: '100%',
    },
});

export default SearchResult;
