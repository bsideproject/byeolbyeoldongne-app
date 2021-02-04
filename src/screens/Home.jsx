import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.home}>
            <Text>home</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.push('Main')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
