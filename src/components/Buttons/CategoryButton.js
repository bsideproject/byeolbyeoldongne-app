import React from 'react';
import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import theme from '../../context/theme';
import CategoryIcon from '../../components/Icon/Categories';

const categoryLabels = {
    CAFE: '카세권',
    GYM: '운세권',
    CONVENIENCE_STORE: '편세권',
    MEDICAL: '의세권',
    FOREST: '숲세권',
    HAMBUGER: '햄세권',
    MART: '몰세권',
};

const CategoryButton = ({ category, ...props }) => {
    const Image = CategoryIcon[category];
    const label = categoryLabels[category];

    if (!Image) return null;
    return (
        <TouchableNativeFeedback {...props}>
            <View style={styles.buttonWrapper}>
                <View style={styles.iconWrapper}>
                    <Image resizeMode="contain" style={styles.icon} />
                </View>
                <Text style={styles.button}>{label}</Text>
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
    iconWrapper: {
        width: 15,
        height: 15,
        marginRight: 3,
    },
    icon: {
        width: '100%',
        height: '100%',
        marginRight: 3,
    },
});

export default CategoryButton;
