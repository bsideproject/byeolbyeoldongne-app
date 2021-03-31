import { round } from 'lodash';
import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const countStars = (number) => {
    const stars = Math.floor(number);
    if ((number * 10) % 10 < 5) {
        return stars;
    }
    return stars + 0.5;
};

const StarPoint = ({ count }) => {
    if (typeof count !== 'number') return null;

    const stars = countStars(count);
    return (
        <View style={styles.stars}>
            <Image
                style={styles.starIcon}
                source={require('../../../static/images/icons/filled_star.png')}
            />
            <Image
                style={styles.starIcon}
                source={require('../../../static/images/icons/empty_star.png')}
            />
            <Image
                style={styles.starIcon}
                source={require('../../../static/images/icons/empty_star.png')}
            />
            <Image
                style={styles.starIcon}
                source={require('../../../static/images/icons/empty_star.png')}
            />
            <Image
                style={styles.starIcon}
                source={require('../../../static/images/icons/empty_star.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    stars: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 150,
    },
    starIcon: {
        width: 25,
        height: 25,
    },
});

export default StarPoint;
