import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';

import { COLORS, SIZES } from '../constants';
import Logo from './Logo';


interface AuthScreenLayoutProps {
    title: string;
    children: React.ReactNode;
    allowBack?: boolean;
    isWelcomeBack?: boolean;
    onBack?: () => void;
}

const AuthScreenLayout: React.FC<AuthScreenLayoutProps> = (
    { title, children, allowBack = false, isWelcomeBack, onBack }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.PRIMARY_BACKGROUND_COLOR }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        paddingHorizontal: 24,
                        paddingTop: 60,
                        paddingBottom: 40,
                    }}
                    keyboardShouldPersistTaps="handled"
                >
                    {/* Back Button */}
                    {allowBack && onBack && (
                        <View style={{ alignItems: 'flex-start', marginLeft: -12, marginBottom: 20 }}>
                            <IconButton
                                icon="arrow-left"
                                iconColor={COLORS.BACK_BUTTON_COLOR}
                                size={28}
                                onPress={onBack}
                            />
                        </View>
                    )}

                    {/* Logo */}
                    <View style={{ marginVertical: isWelcomeBack === null ? 60 : 20 }}>
                        <Logo />
                    </View>

                    {/* Title */}
                    <Text style={{
                        fontSize: SIZES.H4_TITLE,
                        fontWeight: '600',
                        color: COLORS.TEXT_PRIMARY_COLOR,
                        textAlign: 'center',
                        marginBottom: 20,
                    }}>
                        {title}
                    </Text>

                    {/* Content */}
                    {children}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default AuthScreenLayout;
