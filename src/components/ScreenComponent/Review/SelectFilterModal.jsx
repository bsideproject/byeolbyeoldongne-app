import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import theme from '../../../context/theme';
import { useDispatch } from 'react-redux';
import {
    sortByPopularReviews,
    sortByRecentReviews,
} from '../../../store/review';

const SelectFilterModal = ({ modalVisible, handleClose }) => {
    const dispatch = useDispatch();

    const handleClickRecent = () => {
        dispatch(sortByRecentReviews());
        handleClose();
    };

    const handleClickPopular = () => {
        dispatch(sortByPopularReviews());
        handleClose();
    };

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
                <View style={styles.content}>
                    <TouchableOpacity onPress={handleClickRecent}>
                        <View>
                            <Text style={styles.title}>최신순</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleClickPopular}>
                        <View>
                            <Text style={styles.title}>평점순</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    innerModal: {
        display: 'flex',
        width: 200,
        height: 200,
        borderRadius: 15,
        backgroundColor: theme.color.background,
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
        fontSize: 20,
        marginTop: 10,
        marginBottom: 20,
    },
});

export default SelectFilterModal;
