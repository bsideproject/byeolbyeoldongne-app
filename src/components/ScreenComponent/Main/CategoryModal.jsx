import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import theme from '../../../context/theme';
import SimpleModal from '../../Modal';

const CategoryModal = ({ modalVisible, handleClose }) => {
    console.log('open');
    return (
        <SimpleModal isVisible={modalVisible} handleClose={handleClose}>
            <View style={styles.innerModal}>
                <Text>dgasdgasdg</Text>
            </View>
        </SimpleModal>
    );
};

const styles = StyleSheet.create({
    innerModal: {
        width: 100,
        height: 100,
    },
});

export default CategoryModal;
