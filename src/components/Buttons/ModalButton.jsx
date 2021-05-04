import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../context/theme';

const ModalButton = ({ text, ...props }) => {
    return (
        <TouchableOpacity
            style={styles.buttonWrapper}
            activeOpacity={1}
            {...props}
        >
            <Text style={styles.button}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        color: theme.font.white,
        fontSize: 15,
        lineHeight: 22,
        textAlign: 'center',
    },
    buttonWrapper: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 33,
        paddingRight: 33,
        backgroundColor: theme.color.main,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
});

export default ModalButton;
