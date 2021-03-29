import React from 'react';
import { Image } from 'react-native';

const Cafe = (props) => {
    return (
        <Image
            source={require('../../../static/images/categories/cafe.png')}
            {...props}
        />
    );
};

const Gym = (props) => {
    return (
        <Image
            source={require('../../../static/images/categories/gym.png')}
            {...props}
        />
    );
};

const ConvenienceStore = (props) => {
    return (
        <Image
            source={require('../../../static/images/categories/convenience_store.png')}
            {...props}
        />
    );
};

const Medical = (props) => {
    return (
        <Image
            source={require('../../../static/images/categories/medical.png')}
            {...props}
        />
    );
};

const Forest = (props) => {
    return (
        <Image
            source={require('../../../static/images/categories/forest.png')}
            {...props}
        />
    );
};

const Hamberger = (props) => {
    return (
        <Image
            source={require('../../../static/images/categories/hamberger.png')}
            {...props}
        />
    );
};

const Mart = (props) => {
    return (
        <Image
            source={require('../../../static/images/categories/mart.png')}
            {...props}
        />
    );
};

export default {
    CAFE: Cafe,
    GYM: Gym,
    CONVENIENCE_STORE: ConvenienceStore,
    MEDICAL: Medical,
    FOREST: Forest,
    HAMBUGER: Hamberger,
    MART: Mart,
};
