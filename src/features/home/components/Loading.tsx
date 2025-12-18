import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import { COLORS, SIZES } from '../../../constants';

const Loading: React.FC = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color={COLORS.APP_PRIMARY_COLOR} />
            <Text style={{ marginTop: 12, color: COLORS.TEXT_SECONDARY_COLOR, fontSize: SIZES.H7_TITLE }}>
                Đang tải dữ liệu...
            </Text>
        </View>
    );
};

export default Loading;