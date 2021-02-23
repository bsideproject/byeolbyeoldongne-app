import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import theme from '../../context/theme';
import InputDeleteButton from '../Buttons/InputDeleteButton';

const SearchHeader = ({
    handlePressBack,
    handleChange,
    searchText,
    handleSubmit,
    clear,
    ...props
}) => {
    return (
        <View style={styles.search}>
            <TouchableOpacity onPress={handlePressBack}>
                <View style={styles.gnbBack}>
                    <Image
                        style={styles.gnbBackIcon}
                        source={require('../../static/images/icons/gnb_back.png')}
                    />
                </View>
            </TouchableOpacity>
            {<View />}
            <View style={styles.searchBox}>
                <TextInput
                    returnKeyType="search"
                    style={styles.searchInput}
                    onChangeText={handleChange}
                    value={searchText}
                    onSubmitEditing={handleSubmit}
                    placeholder="도로명 주소 또는 건물 검색"
                    {...props}
                />
                {!!searchText && (
                    <InputDeleteButton
                        clear={clear}
                        customStyles={styles.cancelIcon}
                    />
                )}
            </View>
            <TouchableOpacity disabled={!searchText} onPress={handleSubmit}>
                <View style={styles.gnbSearch}>
                    <Text style={styles.gnbSearchText}>검색</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    search: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        borderBottomWidth: 1,
        borderBottomColor: theme.color.border,
    },
    searchBox: {
        flex: 1,
        paddingRight: 50,
        marginRight: 50,
        marginLeft: 50,
    },
    searchInput: {
        fontSize: theme.font.size.large,
    },
    gnbBack: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        left: 0,
        top: -25,
    },
    gnbBackIcon: {
        width: 7.5,
        height: 15,
    },
    gnbSearch: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        right: 10,
        top: -25,
    },
    gnbSearchText: {
        color: theme.color.main,
    },
    cancelIcon: {
        top: 0,
    },
});

export default SearchHeader;
