import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <Text>main</Text>
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

export default MainScreen;
