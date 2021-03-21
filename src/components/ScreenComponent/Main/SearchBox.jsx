import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback,
} from 'react-native';
import theme from '../../../context/theme';
import InputDeleteButton from '../../Buttons/InputDeleteButton';

const SearchBox = ({
    searchText,
    handleSearchBarPress,
    handleMenuPress,
    clear,
}) => {
    return (
        <TouchableNativeFeedback onPress={handleSearchBarPress}>
            <View style={styles.search}>
                <TouchableNativeFeedback onPress={handleMenuPress}>
                    <Image
                        style={styles.gnbMenuIcon}
                        source={require('../../../static/images/icons/gnb_menu.png')}
                    />
                </TouchableNativeFeedback>
                <Image
                    style={styles.addressIcon}
                    source={require('../../../static/images/icons/icon_address.png')}
                />
                <View style={styles.searchText}>
                    <Text>{searchText}</Text>
                </View>
                {!!searchText && <InputDeleteButton clear={clear} />}
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    search: {
        position: 'relative',
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
    searchText: {
        flex: 1,
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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 15,
        right: 20,
        width: 20,
        height: 20,
    },
});

export default SearchBox;
