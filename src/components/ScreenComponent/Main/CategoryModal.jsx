import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Modal from 'react-native-modal';
import theme from '../../../context/theme';
import ModalButton from '../../Buttons/ModalButton';
import categoryContents from '../../../constants/category';
import CategotyIcon from '../../Icon/Categories';

const CategoryModal = ({ category, modalVisible, handleClose }) => {
    console.log(category);

    const Icon = CategotyIcon.gray[category];
    console.log(Icon);
    if (!categoryContents[category] || !Icon) return null;

    return (
        <Modal
            isVisible={modalVisible}
            handleClose={handleClose}
            backdropColor="black"
            animationIn="slideInUp"
            animationOut="slideOutDown"
            onBackdropPress={handleClose}
            backdropOpacity={0.3}
            style={{
                margin: 0,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <View style={styles.innerModal}>
                <View style={styles.topImage}>
                    <Image
                        style={{
                            width: 130,
                            height: 130,
                        }}
                        resizeMode="contain"
                        source={require('../../../static/images/symbol/main_rectangle.png')}
                    />
                    <View style={styles.categoryImage}>
                        <Icon
                            style={styles.categoryImage}
                            resizeMode="contain"
                        />
                    </View>
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>
                        {categoryContents[category].title}
                    </Text>
                    <Text style={styles.message}>
                        {categoryContents[category].message}
                    </Text>
                    <Text style={styles.description}>
                        {categoryContents[category].description}
                    </Text>
                </View>
                <ModalButton text={'확인'} onPress={handleClose} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    innerModal: {
        display: 'flex',
        width: 250,
        height: 325,
        borderRadius: 15,
        backgroundColor: theme.color.background,
    },
    topImage: {
        position: 'absolute',
        top: -50,
        left: 125 - 65,
        width: 130,
        height: 130,
    },
    categoryImage: {
        position: 'absolute',
        width: 40,
        height: 40,
        top: 16.5,
        left: 22.5,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 35,
        paddingRight: 35,
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 30,
        color: '#E2E2E2',
        marginTop: 10,
        marginBottom: 20,
    },
    message: {
        width: 120,
        fontWeight: '500',
        fontSize: 16,
        marginBottom: 10,
    },
    description: {
        width: 170,
        fontSize: 14,
    },
});

export default CategoryModal;
