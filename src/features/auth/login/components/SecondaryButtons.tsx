import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import { COLORS, SIZES } from '../../../../constants';

interface SecondaryButtonsProps {
    onSwitchAccount: () => void;
}

const SecondaryButtons: React.FC<SecondaryButtonsProps> = ({
    onSwitchAccount,
}) => {
    const buttons = [
        { label: 'Tiếp tục với chế độ khách', onPress: () => { } },
        { label: 'Đăng nhập bằng mã PIN', onPress: () => { } },
        { label: 'Đăng nhập bằng tài khoản khác', onPress: onSwitchAccount },
    ];

    return (
        <View style={{ width: '100%', marginTop: 15 }}>
            {buttons.map(({ label, onPress }, index) => (
                <Button
                    key={index}
                    mode="outlined"
                    onPress={onPress}
                    style={{
                        marginTop: 10,
                        borderRadius: 25,
                        borderColor: COLORS.BUTTON_BORDER_SECONDARY_COLOR,
                        backgroundColor: COLORS.BUTTON_SECONDARY_COLOR,
                        borderWidth: 1,
                    }}
                    textColor={COLORS.SECONDARY_TEXT_IN_BUTTON_COLOR}
                    labelStyle={{
                        fontSize: SIZES.H7_TITLE,
                        fontWeight: '500',
                        textTransform: 'none',
                    }}
                >
                    {label}
                </Button>
            ))}
        </View>
    );
};

export default SecondaryButtons;