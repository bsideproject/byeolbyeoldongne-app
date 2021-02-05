import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import theme from '../context/theme';

const SearchBox = ({ searchText, handleChange, clear }) => {
    return (
        <View style={styles.search}>
            <Image
                style={styles.gnbMenuIcon}
                source={require('../../static/images/icons/gnb_menu.png')}
            />
            <Image
                style={styles.addressIcon}
                source={require('../../static/images/icons/icon_address.png')}
            />

            <TextInput
                returnKeyType="search"
                style={styles.searchInput}
                onChangeText={handleChange}
                value={searchText}
                // onSubmitEditing={() => console.log('submit')}
            />
            <Image
                style={styles.cancelIcon}
                source={require('../../static/images/icons/input_cancel.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    search: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.color.background,
        borderRadius: 50,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 23,
        paddingRight: 23,
        height: 50,
    },
    searchInput: {
        fontSize: theme.font.size.large,
    },
    gnbMenuIcon: {
        width: 19,
        height: 14,
        marginRight: 15,
    },
    addressIcon: {
        width: 13,
        height: 13,
        marginRight: 6,
    },
    cancelIcon: {
        position: 'absolute',
        top: 15,
        right: 20,
        width: 20,
        height: 20,
    },
});

export default SearchBox;