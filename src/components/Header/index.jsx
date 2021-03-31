import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import theme from '../../context/theme';

const Header = ({ handlePressBack, children, ...props }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={handlePressBack}>
                <View style={styles.gnbBack}>
                    <Image
                        style={styles.gnbBackIcon}
                        source={require('../../static/images/icons/gnb_back.png')}
                    />
                </View>
            </TouchableOpacity>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        borderBottomWidth: 1,
        borderBottomColor: theme.color.border,
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
});

export default Header;
