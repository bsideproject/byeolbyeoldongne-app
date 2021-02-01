import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CommonButton from '../components/Buttons/Common';

const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <Text>main</Text>
            <CommonButton
                text="홈으로"
                onPress={() => navigation.push('Home')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MainScreen;
