import React from 'react';
import { Modal, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS, SIZES } from '../constants/index';

/*
    <Button mode="contained">: có nghĩa là bạn đang dùng Button kiểu “contained” – tức là nút có nền màu (filled button).

*/
interface ErrorModalProps {
    visible: boolean;
    title?: string;
    message: string;
    onClose: () => void;
    buttonText?: string;
}

const ErrorModal: React.FC<ErrorModalProps> = ({
    visible,
    title = 'Lỗi',
    message,
    onClose,
    buttonText = 'Đóng',
}) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            statusBarTranslucent
            onRequestClose={onClose}
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.BACKDROP_COLOR,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 24,
                }}
            >
                <View
                    style={{
                        backgroundColor: 'white',
                        borderRadius: 20,
                        padding: 20,
                        width: '100%',
                        maxWidth: '100%',
                        alignItems: 'center',
                        shadowColor: COLORS.SHADOW_COLOR,
                        // Chỉ áp dung cho IOS
                        // shadowOffset: { width: 0, height: 4 },
                        // shadowOpacity: 0.3,
                        // shadowRadius: 8,
                        /*
                            Giá trị là số
                            Số càng lớn → bóng càng đậm & xa
                            Chỉ hoạt động trên Android
                        */
                        elevation: 8,
                    }}
                >
                    {/* Icon */}
                    <View style={{ marginBottom: 24 }}>
                        <MaterialCommunityIcons name="close-circle" size={70} color={COLORS.ERROR_COLOR} />
                    </View>

                    {/* Title */}
                    <Text
                        style={{
                            fontSize: SIZES.H5_TITLE,
                            fontWeight: '700',
                            color: COLORS.TEXT_PRIMARY_COLOR,
                            textAlign: 'center',
                        }}
                    >
                        {title}
                    </Text>

                    {/* Message */}
                    <Text
                        style={{
                            fontSize: SIZES.H7_TITLE,
                            color: COLORS.TEXT_PRIMARY_COLOR,
                            textAlign: 'center',
                            marginVertical: 22,
                            lineHeight: 20,
                        }}
                    >
                        {message}
                    </Text>

                    {/* Button */}
                    <Button
                        mode="contained"
                        onPress={onClose}
                        style={{
                            width: 'auto',
                            paddingVertical: 4,
                            borderRadius: 12,
                        }}
                        buttonColor={COLORS.BUTTON_PRIMARY_COLOR}
                        textColor={COLORS.TEXT_PRIMARY_COLOR}
                        labelStyle={{
                            fontSize: SIZES.BUTTON_TEXT,
                            fontWeight: '600',

                        }}
                    >
                        {buttonText}
                    </Button>
                </View>
            </View>
        </Modal>
    );
};

export default ErrorModal;
