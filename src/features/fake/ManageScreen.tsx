// ManageScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ManageScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Manage</Text>
        </View>
    );
};

export default ManageScreen;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold' },
});
