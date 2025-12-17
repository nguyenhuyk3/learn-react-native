import React from 'react';
import { Button } from 'react-native-paper';

import { COLORS, SIZES } from '../../../../constants';

interface LoginButtonProps {
    isLoading: boolean;
    onPress: () => void;
    hasMarginTop?: boolean;
}

export const LoginButton: React.FC<LoginButtonProps> = ({
    isLoading,
    onPress,
    hasMarginTop = false,
}) => (
    <Button
        mode="contained"
        rippleColor="transparent"
        onPress={onPress}
        loading={isLoading}
        disabled={isLoading}
        style={{
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: hasMarginTop ? 10 : 0,
        }}
        buttonColor={COLORS.BUTTON_PRIMARY_COLOR}
        textColor={COLORS.PRIMARY_TEXT_IN_BUTTON_COLOR}
        labelStyle={{ fontSize: SIZES.H6_TITLE, fontWeight: '700' }}
    >
        {isLoading ? 'Đang xử lý...' : 'Đăng nhập'}
    </Button>
);

export default LoginButton;