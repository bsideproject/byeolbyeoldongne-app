import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SEARCH_LIST_ITEM_TYPE } from '../../constants/search';
import theme from '../../context/theme';
import InputDeleteButton from '../Buttons/InputDeleteButton';

const SearchListItem = ({
    type,
    text,
    highlightText,
    handlePress,
    clear,
    ...props
}) => {
    const renderText = () => {
        const noneHighlightTexts = text.split(highlightText);

        if (noneHighlightTexts.length === 2) {
            return (
                <Text style={styles.searchText}>
                    {noneHighlightTexts[0]}
                    <Text style={styles.highlight}>{highlightText}</Text>
                    {noneHighlightTexts[1]}
                </Text>
            );
        }
        return <Text style={styles.searchText}>{text}</Text>;
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.listItem}>
                {type === SEARCH_LIST_ITEM_TYPE.RESULT && (
                    <View>
                        <Image
                            style={styles.pinIcon}
                            source={require('../../static/images/icons/pin_grey.png')}
                        />
                    </View>
                )}
                {renderText()}
                {type === SEARCH_LIST_ITEM_TYPE.RECENT && (
                    <InputDeleteButton clear={clear} />
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: theme.color.lightBorder,
        paddingLeft: 20,
        paddingRight: 20,
    },
    pinIcon: {
        width: 13,
        height: 20,
        marginRight: 7,
    },
    searchText: {
        fontSize: 13,
    },
    highlight: {
        color: theme.color.main,
    },
});

export default SearchListItem;
