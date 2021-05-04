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

const GrayCafe = (props) => {
    return (
        <Image
            source={require('../../../static/images/categories/gray/cafe.png')}
            {...props}
        />
    );
};

const GrayGym = (props) => {
    return (
        <Image
            source={require('../../../static/images/categories/gray/gym.png')}
            {...props}
        />
    );
};

const GrayConvenienceStore = (props) => {
    return (
        <Image
            source={require('../../../static/images/categories/gray/convenience_store.png')}
            {...props}
        />
    );
};

const GrayMedical = (props) => {
    return (
        <Image
            source={require('../../../static/images/categories/gray/medical.png')}
            {...props}
        />
    );
};

const GrayForest = (props) => {
    return (
        <Image
            source={require('../../../static/images/categories/gray/forest.png')}
            {...props}
        />
    );
};

const GrayHamberger = (props) => {
    return (
        <Image
            source={require('../../../static/images/categories/gray/hamberger.png')}
            {...props}
        />
    );
};

const GrayMart = (props) => {
    return (
        <Image
            source={require('../../../static/images/categories/gray/mart.png')}
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
    gray: {
        CAFE: GrayCafe,
        GYM: GrayGym,
        CONVENIENCE_STORE: GrayConvenienceStore,
        MEDICAL: GrayMedical,
        FOREST: GrayForest,
        HAMBUGER: GrayHamberger,
        MART: GrayMart,
    },
};
