import React from 'react';
import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import theme from '../../context/theme';

const categoryImageMap = {
    CAFE: { image: '../../static/images/categories/cafe.png', label: '카세권' }, // 카세권
    GYM: { image: '../../static/images/categories/cafe.png', label: '운세권' }, // 운세권
    CONVENIENCE_STORE: {
        image: '../../static/images/categories/cafe.png',
        label: '편세권',
    }, // 편세권
    MEDICAL: {
        image: '../../static/images/categories/cafe.png',
        label: '의세권',
    }, // 의세권
    FOREST: {
        image: '../../static/images/categories/cafe.png',
        label: '숲세권',
    }, // 숲세권
    HAMBUGER: {
        image: '../../static/images/categories/cafe.png',
        label: '햄세권',
    }, // 햄세권
    MART: { image: '../../static/images/categories/cafe.png', label: '몰세권' }, // 몰세권
};

const CategoryButton = ({ category, ...props }) => {
    const { Image } = category;

    if (!Image) return null;

    return (
        <TouchableNativeFeedback {...props}>
            <View style={styles.buttonWrapper}>
                <Image style={styles.icon} />
                <Text style={styles.button}>{category.label}</Text>
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    button: {
        color: theme.font.button,
        fontSize: theme.font.size.normal,
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
        height: 32,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: theme.color.lightButton,
        borderRadius: 50,
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 7,
    },
    icon: {
        width: 17,
        marginRight: 3,
    },
});

export default CategoryButton;
