// ShoppingScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShoppingScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Shopping</Text>
        </View>
    );
};

export default ShoppingScreen;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold' },
});
