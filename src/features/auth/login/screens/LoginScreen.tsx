import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';

import {
    AuthenticationLayout,
    ErrorModal,
    LoadingOverlay
} from '../../../../components';
import {
    STORAGE_KEYS
} from '../../../../constants';
import { useAuthentication } from '../../../../context';
import { storageServices } from '../../../../storages';
import { useLogInOutStore } from '../../../../stores/authentication';
import { AuthenticationStackParamList } from '../../../../types/navigations';
import { DefaultLogin, LoginButton, SecondaryButtons, WelcomeBack } from '../components';

/*
    Type đầy đủ cho props của một Screen
    Bao gồm CẢ:
        - navigation
        - route
    Props = {
            navigation: NativeStackNavigationProp<...>;
            route: RouteProp<...>;
        }
    Khi nào dùng?
    ✅ Khi component chính là Screen:
        - LoginScreen
        - ForgotPasswordScreen
        - ProfileScreen

    mode="contained" -> react-native-paper sẽ tự động thêm:
        - 📱 Android:
            + Ripple effect (sóng lan tròn)
        - 🍎 iOS
            + Opacity / overlay (màu phủ mờ khi nhấn)
    -> rippleColor="transparent" tắt đi hiệu ứng trên
*/
type Props = NativeStackScreenProps<AuthenticationStackParamList, 'login'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const {
        username,
        password,
        rememberMe,
        isLoading,
        error,
        showErrorModal,
        
        setUsername,
        setPassword,
        setRememberMe,
        clearError,
        login
    } = useLogInOutStore();
    const { login: loginContext } = useAuthentication();
    const [savedUsername, setSavedUsername] = useState<string | null>(null);
    const [isCheckingStorage, setIsCheckingStorage] = useState(true);

    useEffect(() => {
        const checkSavedUsername = async () => {
            const storedUsername = await storageServices.getString(STORAGE_KEYS.USERNAME);

            if (storedUsername) {
                setSavedUsername(storedUsername);
                setUsername(storedUsername);
            }

            setIsCheckingStorage(false);
        };

        checkSavedUsername();
    }, []);

    const handleLogin = async () => {
        const success = await login();

        if (success) {
            loginContext();

            navigation.getParent()?.navigate('tab');
        }
    };

    const handleSwitchAccount = async () => {
        setSavedUsername(null);
        setUsername('');
        setPassword('');

        await storageServices.remove(STORAGE_KEYS.USERNAME);
    };

    if (isCheckingStorage) {
        return <LoadingOverlay visible />;
    }

    return (
        <AuthenticationLayout
            title={savedUsername ? '' : 'Đăng nhập'}
            isWelcomeBack={!!savedUsername}
        >
            {savedUsername ? (
                <WelcomeBack
                    savedUsername={savedUsername}
                    password={password}
                    rememberMe={rememberMe}
                    onPasswordChange={setPassword}
                    onToggleRemember={() => setRememberMe(!rememberMe)}
                    onForgotPassword={() => navigation.navigate('forgot-password')}
                />
            ) : (
                <DefaultLogin
                    username={username}
                    password={password}
                    rememberMe={rememberMe}
                    onUsernameChange={setUsername}
                    onPasswordChange={setPassword}
                    onToggleRemember={() => setRememberMe(!rememberMe)}
                    onForgotPassword={() => navigation.navigate('forgot-password')}
                />
            )}

            <LoginButton
                isLoading={isLoading}
                onPress={handleLogin}
                hasMarginTop={!!savedUsername}
            />

            {savedUsername && (
                <SecondaryButtons onSwitchAccount={handleSwitchAccount} />
            )}

            <LoadingOverlay visible={isLoading} />

            <ErrorModal
                visible={showErrorModal}
                title="Thông báo"
                message={error || ''}
                onClose={clearError}
                buttonText="Đồng ý"
            />
        </AuthenticationLayout>
    );
};

export default LoginScreen;
