import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Button, Text } from 'react-native-paper';
import { View } from 'react-native';

import {
    AuthScreenLayout,
    ErrorModal,
    FormInput,
    LoadingOverlay
} from '../../../../components';
import {
    COLORS,
    STORAGE_KEYS
} from '../../../../constants';
import { useLoginStore } from '../../../../stores/authentication';
import { AuthenticationStackParamList } from '../../../../types/navigations';
import { RememberForgot } from '../components';
import { useAuthentication } from '../../../../context';
import { storageServices } from '../../../../storages';

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
    } = useLoginStore();

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

    const renderDefaultLogin = () => (
        <>
            <FormInput
                label="Tên đăng nhập"
                placeholder="Nhập tên đăng nhập"
                value={username}
                onChangeText={setUsername}
            />
            <FormInput
                label="Mật khẩu"
                placeholder="Nhập mật khẩu"
                value={password}
                onChangeText={setPassword}
                isPassword
            />
            <RememberForgot
                rememberMe={rememberMe}
                onToggleRemember={() => setRememberMe(!rememberMe)}
                onForgotPassword={() => navigation.navigate('forgot-password')}
            />
        </>
    );

    const renderWelcomeBack = () => {
        const initial = savedUsername ? savedUsername.charAt(0).toUpperCase() : 'U';

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
                            fontSize: 32,
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                        }}
                    >
                        {initial}
                    </Text>
                </View>
                {/* Greeting */}
                <Text
                    style={{
                        fontSize: 18,
                        color: '#333',
                        marginBottom: 20,
                    }}
                >
                    Xin chào <Text style={{ fontWeight: 'bold' }}>{savedUsername}</Text>
                </Text>

                <View style={{ width: '100%' }}>
                    <FormInput
                        label="Mật khẩu"
                        placeholder="Nhập mật khẩu"
                        value={password}
                        onChangeText={setPassword}
                        isPassword
                    />
                </View>

                <View style={{ width: '100%' }}>
                    <RememberForgot
                        rememberMe={rememberMe}
                        onToggleRemember={() => setRememberMe(!rememberMe)}
                        onForgotPassword={() => navigation.navigate('forgot-password')}
                    />
                </View>
            </View>
        );
    };

    return (
        <AuthScreenLayout
            title={savedUsername ? '' : 'Đăng nhập'}
            isWelcomeBack={savedUsername ? true : false}>
            {savedUsername ? renderWelcomeBack() : renderDefaultLogin()}

            {/* Main Login Button */}
            <Button
                mode="contained"
                onPress={handleLogin}
                loading={isLoading}
                disabled={isLoading}
                style={{
                    paddingVertical: 6,
                    borderRadius: 25,
                    marginTop: savedUsername ? 10 : 0,
                }}
                buttonColor={COLORS.BUTTON_PRIMARY_COLOR}
                textColor="#fff"
                labelStyle={{ fontSize: 16, fontWeight: '700' }}
            >
                {isLoading ? 'Đang xử lý...' : 'Đăng nhập'}
            </Button>

            {/* Secondary buttons */}
            {savedUsername && (
                <View style={{ width: '100%', marginTop: 15 }}>
                    {[
                        'Tiếp tục với chế độ khách',
                        'Đăng nhập bằng mã PIN',
                        'Đăng nhập bằng tài khoản khác',
                    ].map((label, index) => (
                        <Button
                            key={index}
                            mode="outlined"
                            onPress={index === 2 ? handleSwitchAccount : () => { }}
                            style={{
                                marginTop: 10,
                                borderRadius: 25,
                                borderColor: '#E0E0E0',
                                backgroundColor: '#F5F5F5',
                                borderWidth: 1,
                            }}
                            textColor="#757575"
                            labelStyle={{
                                fontSize: 14,
                                fontWeight: '500',
                                textTransform: 'none',
                            }}
                        >
                            {label}
                        </Button>
                    ))}
                </View>
            )}

            <LoadingOverlay visible={isLoading} />
            <ErrorModal
                visible={showErrorModal}
                title="Thông báo"
                message={error || ''}
                onClose={clearError}
                buttonText="Đồng ý"
            />
        </AuthScreenLayout>
    );
};

export default LoginScreen;
