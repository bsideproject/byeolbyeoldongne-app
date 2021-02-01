import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../context/theme';

const CommonButton = ({ text, ...props }) => {
    return (
        <TouchableOpacity
            style={styles.buttonWrapper}
            activeOpacity={1}
            {...props}>
            <Text style={styles.button}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        color: theme.font.white,
        fontSize: 15,
        lineHeight: 22,
    },
    buttonWrapper: {
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 33,
        paddingRight: 33,
        backgroundColor: theme.color.main,
        borderRadius: 50,
    },
});

export default CommonButton;
