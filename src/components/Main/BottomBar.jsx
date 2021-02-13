import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '../context/theme';

const BottomBar = ({ ...props }) => {
    return (
        <View style={styles.bottomBar}>
            <View style={styles.areaContent} />
            <View style={styles.divider} />
            <View style={styles.evaluationBar}>
                <Text style={styles.evaluationBarText}>동네 거주 평점</Text>
                <View style={styles.evaluationRate}>
                    <Image
                        style={styles.starIcon}
                        source={require('../../static/images/icons/star.png')}
                    />
                    <Text style={styles.evaluationRateText}>3.75</Text>
                </View>
                <TouchableOpacity style={styles.moreButton}>
                    <Text style={styles.moreButtonText}>더보기</Text>
                    <Image
                        style={styles.arrowRightIcon}
                        source={require('../../static/images/icons/arrowRight.png')}
                    />
                </TouchableOpacity>
            </View>
            <Image
                style={styles.writingIcon}
                source={require('../../static/images/icons/main_bottom_writing.png')}
                transform={[{ translateX: -42.5 }]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        width: '100%',
    },
    writingIcon: {
        position: 'absolute',
        width: 85,
        height: 85,
        top: -32.5,
        left: '50%',
    },
    areaContent: {
        height: 130,
        backgroundColor: theme.color.background,
        shadowColor: '#000000',
        shadowOffset: { width: -10, height: 40 },
        shadowOpacity: 0.15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    divider: {
        backgroundColor: theme.color.subBackground,
        height: 6,
        width: '100%',
    },
    fixedBar: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        width: '100%',
    },
    evaluationBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 30,
        paddingTop: 20,
        backgroundColor: theme.color.background,
    },
    evaluationBarText: {
        width: '50%',
        fontSize: theme.font.size.large,
    },
    evaluationRate: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    starIcon: {
        width: 20,
        height: 20,
        marginRight: 14,
    },
    evaluationRateText: {
        fontWeight: 'bold',
        fontSize: theme.font.size.xxLarge,
    },
    moreButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    moreButtonText: {
        color: theme.color.subText,
        marginRight: 8,
    },
    arrowRightIcon: {
        width: 3,
        height: 7,
    },
});

export default BottomBar;
