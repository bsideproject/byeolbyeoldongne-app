import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import theme from '../../../context/theme';
import CategoryButton from '../../Buttons/CategoryButton';
import NoMessage from '../../Messages/NoMessage';
import CategoryModal from './CategoryModal';

const BottomBar = ({
    currentCategories,
    hasReview,
    averagePoint,
    handleMoreButtonPress,
    handleWritePress,
    ...props
}) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <View style={styles.bottomBar}>
            <View style={styles.categories}>
                {currentCategories.length ? (
                    currentCategories.map((category) => {
                        return (
                            <CategoryButton
                                key={category}
                                category={category}
                                onPress={() => setSelectedCategory(category)}
                            />
                        );
                    })
                ) : (
                    <NoMessage
                        text="이 동네는 가까운 편의시설이 많지 않네요"
                        imoji={require('../../../static/images/imoji/imoji_cry.png')}
                    />
                )}
            </View>
            <View style={styles.divider} />
            <View style={styles.evaluationBar}>
                {hasReview ? (
                    <React.Fragment>
                        <Text style={styles.evaluationBarText}>
                            동네 거주 평점
                        </Text>
                        <View style={styles.evaluationRate}>
                            <Image
                                style={styles.starIcon}
                                source={require('../../../static/images/icons/star.png')}
                            />
                            <Text style={styles.evaluationRateText}>
                                {averagePoint}
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={styles.moreButton}
                            onPress={handleMoreButtonPress}
                        >
                            <Text style={styles.moreButtonText}>더보기</Text>
                            <Image
                                style={styles.arrowRightIcon}
                                source={require('../../../static/images/icons/arrowRight.png')}
                            />
                        </TouchableOpacity>
                    </React.Fragment>
                ) : (
                    <View style={styles.noReviewMessage}>
                        <NoMessage
                            text="아직 등록된 동네 후기가 없어요."
                            imoji={require('../../../static/images/imoji/imoji_cry.png')}
                        />
                    </View>
                )}
            </View>

            <View
                style={styles.writingIconWrapper}
                transform={[{ translateX: -37.5 }]}
            >
                <TouchableOpacity activeOpacity={1} onPress={handleWritePress}>
                    <Image
                        style={styles.writingIcon}
                        source={require('../../../static/images/icons/main_bottom_writing.png')}
                    />
                </TouchableOpacity>
            </View>
            <CategoryModal
                modalVisible={!!selectedCategory}
                category={selectedCategory}
                handleClose={() => setSelectedCategory(null)}
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
    writingIconWrapper: {
        position: 'absolute',
        width: 85,
        top: -32.5,
        left: '50%',
        overflow: 'hidden',
    },
    writingIcon: {
        width: 85,
        height: 95,
    },
    imojiIcon: {
        width: 16,
        height: 16,
    },
    noMessage: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
    },
    categories: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: theme.color.background,
        shadowColor: '#000000',
        shadowOffset: { width: -10, height: 40 },
        shadowOpacity: 0.15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: 40,
        paddingBottom: 15,
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
    noReviewMessage: {
        flex: 1,
        alignItems: 'center',
    },
});

export default BottomBar;
