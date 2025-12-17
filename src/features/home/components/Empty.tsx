import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { COLORS, SIZES } from '../../../constants';

const Empty: React.FC = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Ionicons name="search" size={40} color="#ccc" />
            <Text style={{ marginTop: 10, color: COLORS.TEXT_SECONDARY_COLOR, fontSize: SIZES.H7_TITLE }}>
                Không tìm thấy dự án nào.
            </Text>
        </View>
    );
};

export default Empty;