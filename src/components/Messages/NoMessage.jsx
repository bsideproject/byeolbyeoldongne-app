import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import theme from '../../context/theme';

const NoMessage = ({ text, imoji, children }) => {
    return (
        <View style={styles.noMessage}>
            <Text style={styles.noMessageText}>{text}</Text>
            {imoji && <Image style={styles.imojiIcon} source={imoji} />}
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    imojiIcon: {
        width: 16,
        height: 16,
    },
    noMessage: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
    },
    noMessageText: {
        marginRight: 5,
        fontSize: theme.font.size.middle,
    },
});

export default NoMessage;
