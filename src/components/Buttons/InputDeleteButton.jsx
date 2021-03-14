import React from 'react';
import { StyleSheet, Image, TouchableNativeFeedback } from 'react-native';

const InputDeleteButton = ({ clear, customStyles }) => {
    return (
        <TouchableNativeFeedback onPress={clear}>
            <Image
                style={{ ...styles.cancelIcon, ...customStyles }}
                source={require('../../static/images/icons/input_cancel.png')}
            />
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
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

export default InputDeleteButton;
