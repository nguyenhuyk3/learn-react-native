import React from "react";
import { View, Modal } from "react-native";
import { Button, Text } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";

import { COLORS, SIZES } from "../constants";

interface ConfirmModalProps {
    visible: boolean;
    icon: keyof typeof Ionicons.glyphMap;
    iconColor: string;
    title: string;
    subtitle: string;

    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
    visible,
    icon,
    iconColor,
    title,
    subtitle,

    onClose,
    onConfirm,
}) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.BACKDROP_COLOR,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 20,
                }}
            >
                <View
                    style={{
                        backgroundColor: COLORS.PRIMARY_BACKGROUND_COLOR,
                        borderRadius: 16,
                        padding: 24,
                        width: "100%",
                        maxWidth: '100%',
                        alignItems: "center",
                    }}
                >
                    {/* Icon */}
                    <View style={{ marginBottom: 24 }}>
                        <MaterialCommunityIcons name={icon} size={70} color={iconColor} />
                    </View>

                    {/* Title */}
                    <Text
                        style={{
                            fontSize: SIZES.H4_TITLE,
                            fontWeight: "700",
                            color: COLORS.TEXT_PRIMARY_COLOR,
                            marginBottom: 12,
                            textAlign: "center",
                        }}
                    >
                        {title}
                    </Text>

                    {/* Subtitle */}
                    <Text
                        style={{
                            fontSize: SIZES.H6_TITLE,
                            color: COLORS.TEXT_PRIMARY_COLOR,
                            textAlign: "center",
                            marginBottom: 24,
                            lineHeight: 22,
                        }}
                    >
                        {subtitle}
                    </Text>

                    {/* Buttons */}
                    <View
                        style={{
                            flexDirection: "row",
                            width: "100%",
                            gap: 12,
                        }}
                    >
                        <Button
                            mode="outlined"
                            onPress={onClose}
                            style={{
                                flex: 1,
                                borderRadius: 8,
                                borderColor: COLORS.SECONDARY_TEXT_IN_BUTTON_COLOR,
                                borderWidth: 1,
                            }}
                            textColor={COLORS.TEXT_PRIMARY_COLOR}
                            labelStyle={{
                                fontSize: 15,
                                fontWeight: "600",
                            }}
                        >
                            Hủy
                        </Button>

                        <Button
                            mode="contained"
                            onPress={onConfirm}
                            style={{
                                flex: 1,
                                borderRadius: 8,
                            }}
                            buttonColor={COLORS.BUTTON_PRIMARY_COLOR}
                            textColor={COLORS.PRIMARY_BACKGROUND_COLOR}
                            labelStyle={{
                                fontSize: SIZES.H7_TITLE,
                                fontWeight: "600",
                            }}
                        >
                            Xác nhận
                        </Button>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ConfirmModal;
