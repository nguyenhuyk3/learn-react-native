import React from 'react';

import { FormInput } from '../../../../components';
import RememberForgot from './RememberForgot';

interface DefaultLoginProps {
    username: string;
    password: string;
    rememberMe: boolean;
    onUsernameChange: (text: string) => void;
    onPasswordChange: (text: string) => void;
    onToggleRemember: () => void;
    onForgotPassword: () => void;
}

const DefaultLogin: React.FC<DefaultLoginProps> = ({
    username,
    password,
    rememberMe,
    onUsernameChange,
    onPasswordChange,
    onToggleRemember,
    onForgotPassword,
}) => (
    <>
        <FormInput
            label="Tên đăng nhập"
            placeholder="Nhập tên đăng nhập"
            value={username}
            onChangeText={onUsernameChange}
        />
        
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
    </>
);

export default DefaultLogin;