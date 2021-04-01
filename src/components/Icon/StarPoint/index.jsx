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

const StarPoint = ({ count, small }) => {
    if (typeof count !== 'number') return null;

    const stars = countStars(count);
    console.log(count, stars);
    const starStyle = small ? styles.smallStarIcon : styles.starIcon;

    return (
        <View style={styles.stars}>
            {new Array(5).fill(null).map((_, i) => {
                if (i > stars) {
                    return (
                        <Image
                            key={i}
                            style={starStyle}
                            source={require('../../../static/images/icons/empty_star.png')}
                        />
                    );
                }
                if (i <= stars) {
                    return (
                        <Image
                            key={i}
                            style={starStyle}
                            source={require('../../../static/images/icons/filled_star.png')}
                        />
                    );
                }
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    stars: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    starIcon: {
        width: 25,
        height: 25,
        margin: 3.5,
    },
    smallStarIcon: {
        width: 15,
        height: 15,
        margin: 2,
    },
});

export default StarPoint;
