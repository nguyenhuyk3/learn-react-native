import { Ionicons } from '@expo/vector-icons';
import * as LocalAuthentication from 'expo-local-authentication';
import React, { useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const FaceIdScreen: React.FC = () => {
    const [faceIdSupported, setFaceIdSupported] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkFaceIdSupport();
    }, []);

    const checkFaceIdSupport = async () => {
        setLoading(true);
        // 1. Kiểm tra phần cứng chung
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        // 2. Kiểm tra user có cài đặt khóa màn hình chưa (Pattern/PIN/Bio)
        const isEnrolled = await LocalAuthentication.isEnrolledAsync();
        if (hasHardware && isEnrolled) {
            // 3. Lấy danh sách các loại xác thực được hỗ trợ
            const types = await LocalAuthentication.supportedAuthenticationTypesAsync();

            // LOG ra để debug xem máy hỗ trợ gì: 1=Fingerprint, 2=FaceID
            console.log("Các loại xác thực hỗ trợ:", types);

            // Kiểm tra xem có chứa số 2 (FACIAL_RECOGNITION) không
            const hasFace = types.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION);

            if (hasFace) {
                setFaceIdSupported(true);
            } else {
                // Máy có vân tay nhưng KHÔNG có khuôn mặt
                console.log("Thiết bị này chỉ có Vân tay, không có FaceID");

                setFaceIdSupported(false);
            }
        }

        setLoading(false);
    };

    const handleFaceScan = async () => {
        if (!faceIdSupported) {
            Alert.alert("Không hỗ trợ", "Thiết bị của bạn không hỗ trợ nhận diện khuôn mặt hoặc chưa cài đặt.");

            return;
        }

        try {
            const result = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Quét khuôn mặt để xác thực',
                cancelLabel: 'Huỷ bỏ',
                disableDeviceFallback: false, // Cho phép nhập Passcode nếu mặt không nhận
                fallbackLabel: 'Nhập Passcode',
            });

            if (result.success) {
                Alert.alert("Thành công", "Khuôn mặt hợp lệ! ✅");
                // TODO: Điều hướng hoặc lưu token đăng nhập tại đây
            } else {
                // @ts-ignore
                if (result.error !== 'user_cancel' && result.error !== 'app_cancel') {
                    Alert.alert("Thất bại", "Không nhận diện được khuôn mặt.");
                }
            }
        } catch (error) {
            console.error(error);

            Alert.alert("Lỗi", "Có lỗi hệ thống xảy ra.");
        }
    };

    return (
        <View style={{
            flex: 1,
            padding: 30,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.PRIMARY_BACKGROUND_COLOR
        }}>
            <View style={{ marginBottom: 20 }}>
                {/* Hiển thị icon tương ứng với trạng thái */}
                <Ionicons
                    name={faceIdSupported ? "scan-outline" : "alert-circle-outline"}
                    size={80}
                    color={faceIdSupported ? COLORS.SUCCESS_COLOR : COLORS.ERROR_COLOR}
                />
            </View>

            <Text style={{
                fontSize: SIZES.H3_TITLE,
                fontWeight: 'bold',
                color: COLORS.TEXT_PRIMARY_COLOR,
                marginBottom: 10
            }}>
                Cài đặt Face ID
            </Text>

            <Text style={{
                fontSize: SIZES.H6_TITLE,
                color: COLORS.TEXT_SECONDARY_COLOR,
                marginBottom: 30
            }}>
                Trạng thái: {loading ? "Đang kiểm tra..." : (faceIdSupported ? "Đã sẵn sàng" : "Không khả dụng")}
            </Text>

            {!faceIdSupported && !loading && (
                <Text style={{
                    color: COLORS.ERROR_COLOR,
                    textAlign: 'center',
                    marginBottom: 20,
                    paddingHorizontal: 20
                }}>
                    Thiết bị này không hỗ trợ nhận diện khuôn mặt (hoặc bạn đang chạy trên máy ảo Android chỉ hỗ trợ vân tay).
                </Text>
            )}

            <TouchableOpacity
                onPress={handleFaceScan}
                disabled={!faceIdSupported || loading}
                style={[
                    {
                        width: '100%',
                        backgroundColor: COLORS.BUTTON_PRIMARY_COLOR,
                        paddingVertical: 15,
                        borderRadius: 12,
                        alignItems: 'center',
                        shadowColor: COLORS.SHADOW_COLOR,
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 0.30,
                        shadowRadius: 4.65,
                        elevation: 8,
                    },
                    // Style khi bị disable (!faceIdSupported)
                    (!faceIdSupported) && {
                        backgroundColor: COLORS.BUTTON_SECONDARY_COLOR,
                        shadowOpacity: 0,
                        elevation: 0
                    }
                ]}
            >
                <Text style={{
                    color: COLORS.TEXT_SECONDARY_COLOR,
                    fontWeight: 'bold',
                    fontSize: SIZES.H6_TITLE,
                    textTransform: 'uppercase'
                }}>
                    {faceIdSupported ? "Quét Khuôn Mặt Ngay" : "Thiết bị không hỗ trợ"}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default FaceIdScreen;