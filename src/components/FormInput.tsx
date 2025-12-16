import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Text, HelperText } from "react-native-paper";

import { COLORS, SIZES } from "../constants/theme";

interface FormInputProps {
    label: string;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    isPassword?: boolean;
    errorMessage?: string;
}

const FormInput: React.FC<FormInputProps> = ({
    label,
    placeholder,
    value,
    onChangeText,
    isPassword = false,
    errorMessage = null,
}) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <View style={{ marginBottom: 20, width: '100%' }}>
            {/* Label */}
            <Text
                style={{
                    fontSize: SIZES.INPUT_LABEL,
                    fontWeight: "500",
                    color: COLORS.TEXT_PRIMARY_COLOR,
                    marginBottom: 8,
                }}
            >
                {label}
            </Text>

            {/* Text Input */}
            <TextInput
                mode="outlined"
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={isPassword && !showPassword}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={{
                    backgroundColor: COLORS.INPUT_BACKGROUND_COLOR,
                    fontSize: SIZES.INPUT_TEXT,
                    height: SIZES.INPUT_HEIGHT,
                    paddingVertical: 2,
                    width: "100%",
                }}
                outlineStyle={{
                    borderWidth: isFocused ? 1 : 1,
                }}
                outlineColor={errorMessage ? COLORS.ERROR_COLOR : COLORS.OUTLINE_INPUT_COLOR}
                activeOutlineColor={errorMessage ? COLORS.ERROR_COLOR : COLORS.ACTIVE_OUTLINE_INPUT_COLOR}
                placeholderTextColor={COLORS.PLACE_HOLDER_TEXT_COLOR}
                cursorColor={COLORS.CURSOR_PRIMARY_COLOR_IN_INPUT}
                autoCapitalize="none"
                right={
                    isPassword ? (
                        <TextInput.Icon
                            icon={showPassword ? "eye" : "eye-off"}
                            onPress={() => setShowPassword(!showPassword)}
                            style={{ marginTop: 10 }}
                        />
                    ) : null
                }
            />
            {errorMessage && (
                <HelperText style={{
                    color: COLORS.ERROR_COLOR,
                    paddingLeft: 0,
                    marginTop: 2,
                }}
                    type="error" visible={true}>
                    {errorMessage}
                </HelperText>
            )}
        </View>
    );
};

export default FormInput;