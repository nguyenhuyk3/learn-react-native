import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { COLORS, SIZES } from '../../../../constants';
import { FormInput } from '../../../../components';
import RememberForgot from './RememberForgot';

interface WelcomeBackProps {
    savedUsername: string;
    password: string;
    rememberMe: boolean;
    onPasswordChange: (text: string) => void;
    onToggleRemember: () => void;
    onForgotPassword: () => void;
}

const WelcomeBack: React.FC<WelcomeBackProps> = ({
    savedUsername,
    password,
    rememberMe,
    onPasswordChange,
    onToggleRemember,
    onForgotPassword,
}) => {
    const initial = savedUsername.charAt(0).toUpperCase();

    return (
        <View style={{ alignItems: 'center', width: '100%', marginTop: 0 }}>
            {/* Avatar */}
            <View
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                    backgroundColor: '#90A4AE',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 16,
                }}
            >
                <Text
                    style={{
                        fontSize: SIZES.MEDIUM_ICON_SIZE,
                        color: COLORS.PRIMARY_BACKGROUND_COLOR,
                        fontWeight: 'bold',
                    }}
                >
                    {initial}
                </Text>
            </View>

            {/* Greeting */}
            <Text
                style={{
                    fontSize: SIZES.H5_TITLE,
                    color: COLORS.TEXT_PRIMARY_COLOR,
                    marginBottom: 20,
                }}
            >
                Xin chào <Text style={{ fontWeight: 'bold' }}>{savedUsername}</Text>
            </Text>

            <FormInput
                label="Mật khẩu"
                placeholder="Nhập mật khẩu"
                value={password}
                onChangeText={onPasswordChange}
                isPassword
            />

            <RememberForgot
                rememberMe={rememberMe}
                onToggleRemember={onToggleRemember}
                onForgotPassword={onForgotPassword}
            />
        </View>
    );
};

export default WelcomeBack;