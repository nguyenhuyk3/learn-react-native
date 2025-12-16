import React from 'react';
import { Button } from 'react-native-paper';

import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';

import { AuthScreenLayout, FormInput } from '../../../../components';
import {
    COLORS,
    SIZES
} from '../../../../constants/index';
import { ForgotPasswordFormData, useForgotPasswordStore } from '../../../../stores/authentication';
import { AuthenticationStackParamList, ForgotPasswordScreenNavigationProp } from '../../../../types/navigations';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

/*
    Tạo một schema Zod để:
        - Kiểm tra dữ liệu người dùng nhập
        - Trả lỗi có message tiếng Việt
        - Dùng cho form (React / React Native)
    .refine(...): Kiểm tra điều kiện tuỳ chỉnh
        - val = giá trị người dùng nhập
*/

const forgotPasswordSchema = z.object({
    username: z.string()
        .min(1, "Vui lòng nhập tên đăng nhập")
        .refine((val) => val.length >= 8, {
            message: "Tên đăng nhập không hợp lệ (tối thiểu 8 ký tự)",
        }),
    registeredEmail: z.string()
        .min(1, "Vui lòng nhập email đăng ký")
        .email("Địa chỉ email không hợp lệ")
        .refine((val) => val.length >= 8, {
            message: "Email đăng ký không hợp lệ (tối thiểu 8 ký tự)",
        }),
});

/*
    resolver: zodResolver(forgotPasswordSchema)
        👉 Kết nối Zod với react-hook-form
    forgotPasswordSchema = schema validate bạn đã định nghĩa
    Khi submit:
        - react-hook-form gọi Zod
        - Zod validate dữ liệu
        - Trả lỗi về cho errors

    reValidateMode: "onSubmit"
        👉 Khi nào validate lại sau khi đã có lỗi
        Nghĩa là:
        - Submit → có lỗi
        - Người dùng sửa
        - Submit lần nữa → mới validate lại

    control
        👉 Dùng cho Controller để kết nối input không phải native input

    formState: { errors }
        👉 Chứa lỗi validate theo từng field
*/

type Props = NativeStackScreenProps<AuthenticationStackParamList, 'forgot-password'>;

const ForgotPasswordScreen: React.FC<Props> = ({ navigation }) => {
    const { sendOtp } = useForgotPasswordStore();
    const { control, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema),
        mode: "onSubmit",               // Chỉ validate khi submit
        reValidateMode: "onSubmit",     // lần sau cũng chỉ validate khi submit
        defaultValues: {
            username: '',
            registeredEmail: '',
        },
    });
    const onSubmit = async (data: ForgotPasswordFormData) => {
        await sendOtp(data);
    };

    return (
        <AuthScreenLayout
            title="Quên mật khẩu"
            allowBack
            onBack={() => navigation.goBack()}
        >
            <Controller
                control={control}
                name="username"
                render={({ field: { onChange, value } }) => (
                    <FormInput
                        label="Tên đăng nhập"
                        placeholder="Nhập tên đăng nhập"
                        value={value}
                        onChangeText={onChange}
                        errorMessage={errors.username?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="registeredEmail"
                render={({ field: { onChange, value } }) => (
                    <FormInput
                        label="Email đăng ký"
                        placeholder="Nhập email đăng ký"
                        value={value}
                        onChangeText={onChange}
                        errorMessage={errors.registeredEmail?.message}
                    />
                )}
            />

            <Button
                mode="contained"
                onPress={handleSubmit(onSubmit)}
                loading={false}
                disabled={false}
                style={{ marginTop: 10, paddingVertical: 2, borderRadius: 16 }}
                buttonColor={COLORS.BUTTON_PRIMARY_COLOR}
                textColor={COLORS.TEXT_PRIMARY_COLOR}
                labelStyle={{ fontSize: SIZES.BUTTON_TEXT, fontWeight: '600' }}
            >
                Gửi mã OTP
            </Button>
        </AuthScreenLayout>
    )
}

export default ForgotPasswordScreen;