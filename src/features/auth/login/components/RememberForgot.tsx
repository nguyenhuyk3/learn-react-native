import React from "react";
import { Pressable, View } from "react-native";
import { Checkbox, Text } from "react-native-paper";

import { COLORS } from "../../../../constants/index";

interface Props {
    rememberMe: boolean;
    onToggleRemember: () => void;
    onForgotPassword?: () => void;
}

const RememberForgot: React.FC<Props> = ({
    rememberMe,
    onToggleRemember,
    onForgotPassword,
}) => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 26,
                width: '100%'
            }}
        >
            {/* Remember Me */}
            <Pressable
                onPress={onToggleRemember}
                android_ripple={{ radius: 0 }}
                style={{ flexDirection: "row", alignItems: "center" }}
            >
                <Checkbox
                    uncheckedColor={COLORS.CHECKBOX_UNCHECKED_COLOR}
                    status={rememberMe ? "checked" : "unchecked"}
                    onPress={onToggleRemember}
                    color={COLORS.CHECKBOX_ACTIVE_COLOR}
                />
                <Text
                    style={{
                        fontSize: 14,
                        color: COLORS.TEXT_PRIMARY_COLOR,
                        marginLeft: 2,
                    }}
                >
                    Ghi nhớ
                </Text>
            </Pressable>

            {/* Forgot Password */}
            <Pressable onPress={onForgotPassword}>
                <Text
                    style={{
                        fontSize: 14,
                        color: COLORS.CHECKBOX_ACTIVE_COLOR,
                    }}
                >
                    Quên mật khẩu
                </Text>
            </Pressable>
        </View>
    );
};

export default RememberForgot;
