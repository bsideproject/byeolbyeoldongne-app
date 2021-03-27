import React from 'react';
import { Image } from 'react-native';

export const categoryImageMap = {
    CAFE: {
        Image: (
            <Image source={require('../static/images/categories/cafe.png')} />
        ),
        label: '카세권',
    }, // 카세권
    GYM: {
        image: (
            <Image source={require('../static/images/categories/cafe.png')} />
        ),
        label: '운세권',
    }, // 운세권
    CONVENIENCE_STORE: {
        image: (
            <Image source={require('../static/images/categories/cafe.png')} />
        ),
        label: '편세권',
    }, // 편세권
    MEDICAL: {
        image: (
            <Image source={require('../static/images/categories/cafe.png')} />
        ),
        label: '의세권',
    }, // 의세권
    FOREST: {
        image: (
            <Image source={require('../static/images/categories/cafe.png')} />
        ),
        label: '숲세권',
    }, // 숲세권
    HAMBUGER: {
        image: (
            <Image source={require('../static/images/categories/cafe.png')} />
        ),
        label: '햄세권',
    }, // 햄세권
    MART: {
        image: (
            <Image source={require('../static/images/categories/cafe.png')} />
        ),
        label: '몰세권',
    }, // 몰세권
};
