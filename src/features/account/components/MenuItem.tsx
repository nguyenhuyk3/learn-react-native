import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { COLORS, SIZES } from '../../../constants';
import { ChevronIcon } from '../assets';

interface Props {
    icon: React.ReactNode,
    title: string,
    isLastElement?: boolean,
    onPress?: () => void
}

const MenuItem: React.FC<Props> = ({ icon, title, isLastElement, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 16,
                paddingHorizontal: 16,
            }}
            onPress={onPress}
        >
            <View style={{ marginRight: 12 }}>
                {icon}
            </View>

            <Text
                style={{
                    flex: 1,
                    fontSize: SIZES.H6_TITLE,
                    color: COLORS.TEXT_PRIMARY_COLOR,
                }}
            >
                {title}
            </Text>

            <ChevronIcon />

            {!isLastElement && (
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '3%',          // 👈 chỉnh chiều rộng ở đây
                        right: '3%',         // 👈 chỉnh chiều rộng ở đây
                        height: 1,
                        backgroundColor: COLORS.BOTTOM_DIVIDER_BORDER_COLOR,
                    }}
                />
            )}
        </TouchableOpacity>

    )
};

export default MenuItem;
