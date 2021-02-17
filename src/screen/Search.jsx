import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import theme from '../components/context/theme';
import { useDispatch } from 'react-redux';
import { fetchLocationListAsync } from '../store/search';
import SafeAreaView from 'react-native-safe-area-view';

const Search = () => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');

    const onChangeText = (text) => {
        setSearchText(text);
    };

    const onSubmitEditing = () => {
        dispatch(fetchLocationListAsync(searchText));
    };

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.search}>
                <TouchableOpacity>
                    <View style={styles.gnbBack}>
                        <Image
                            style={styles.gnbBackIcon}
                            source={require('../static/images/icons/gnb_back.png')}
                        />
                    </View>
                </TouchableOpacity>

                <View style={styles.searchBox}>
                    <TextInput
                        returnKeyType="search"
                        style={styles.searchInput}
                        onChangeText={onChangeText}
                        value={searchText}
                        onSubmitEditing={onSubmitEditing}
                        placeholder="도로명 주소 또는 건물 검색"
                    />
                </View>

                <TouchableOpacity>
                    <View style={styles.gnbSearch}>
                        <Text style={styles.gnbSearchText}>검색</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: theme.color.background,
    },
    search: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        borderBottomWidth: 1,
        borderBottomColor: '#878787',
    },
    searchBox: {
        flex: 1,
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
});

export default Search;
