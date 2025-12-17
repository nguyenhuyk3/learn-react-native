import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { COLORS, SIZES } from '../../../constants';

interface HomeErrorProps {
    message: string | null;
    onRetry: () => void;
}

const Error: React.FC<HomeErrorProps> = ({ message, onRetry }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
            <Ionicons name="alert-circle-outline" size={48} color={COLORS.ERROR_COLOR} />

            <Text
                style={{
                    marginTop: 10,
                    marginBottom: 10,
                    textAlign: 'center',
                    fontSize: SIZES.H6_TITLE,
                    color: COLORS.ERROR_COLOR
                }}
            >
                {message || "Đã có lỗi xảy ra"}
            </Text>

            <TouchableOpacity
                onPress={onRetry}
                style={{
                    paddingHorizontal: 24,
                    paddingVertical: 12,
                    backgroundColor: COLORS.BUTTON_PRIMARY_COLOR,
                    borderRadius: 8,
                }}
            >
                <Text style={{ fontWeight: '600', color: COLORS.PRIMARY_TEXT_IN_BUTTON_COLOR }}>
                    Thử lại
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Error;