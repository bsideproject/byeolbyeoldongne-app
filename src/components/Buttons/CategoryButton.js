import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableNativeFeedback,
    Image,
} from 'react-native';
import theme from '../context/theme';

const CategoryButton = ({ category, ...props }) => {
    const { name, label } = category;

    return (
        <TouchableNativeFeedback {...props}>
            <View style={styles.buttonWrapper}>
                <Image
                    style={styles.icon}
                    source={require('../../static/images/categories/cafe.png')}
                />
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
    icon: {
        width: 17,
        marginRight: 3,
    },
});

export default CategoryButton;
