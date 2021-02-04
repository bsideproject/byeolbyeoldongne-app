import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <Text>사용자로그인</Text>
            <Button
                title="Go to Home"
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

export default LoginScreen;
