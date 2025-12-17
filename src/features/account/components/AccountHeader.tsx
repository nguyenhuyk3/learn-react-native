import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import { COLORS, SIZES } from '../../../constants';

type Props = {
    isAuthenticated: boolean;
    title: string;
    onLoginPress: () => void;
};

const AccountHeader: React.FC<Props> = ({
    isAuthenticated,
    title,
    onLoginPress,
}) => {

    return (
        <View
            style={{
                paddingTop: 20,
                paddingBottom: 10,
                alignItems: 'center',
            }}
        >
            {/* Avatar */}
            <View
                style={{
                    width: 90,
                    height: 90,
                    borderRadius: 50,
                    backgroundColor: COLORS.PRIMARY_BACKGROUND_COLOR,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 16,
                }}
            >
                <Svg width="60" height="60" viewBox="0 0 60 60">
                    <Circle cx="30" cy="22" r="10" fill="#666" />
                    <Path d="M10 50c0-11 9-20 20-20s20 9 20 20" fill="#666" />
                </Svg>
            </View>

            {/* Username */}
            <Text
                style={{
                    fontSize: SIZES.H4_TITLE,
                    fontWeight: '600',
                    color: COLORS.TEXT_PRIMARY_COLOR,
                    marginBottom: 6,
                }}
            >
                {title}
            </Text>

            {/* Login Button */}
            {!isAuthenticated && (
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.BUTTON_PRIMARY_COLOR,
                        paddingHorizontal: 30,
                        paddingVertical: 12,
                        borderRadius: 14,
                    }}
                    onPress={onLoginPress}
                >
                    <Text
                        style={{
                            color: COLORS.PRIMARY_TEXT_IN_BUTTON_COLOR,
                            fontSize: SIZES.H6_TITLE,
                            fontWeight: '600',
                        }}
                    >
                        Đăng nhập
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default AccountHeader;