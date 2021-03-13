import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import Modal from 'react-native-modal';

const SimpleModal = ({ children, isVisible, handleClose, ...props }) => {
    return (
        <View style={styles.centeredView}>
            <Modal isVisible={isVisible} {...props}>
                <View>{children}</View>
                <Button title={'ddddd'} onPress={handleClose}>
                    <Text>dkdjkdj</Text>
                </Button>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
    },
});

export default SimpleModal;
