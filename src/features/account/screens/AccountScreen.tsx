import React, { useState } from "react";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ConfirmModal } from "../../../components";
import { COLORS, STORAGE_KEYS } from "../../../constants";
import { useAuthentication } from "../../../context";
import { storageServices } from "../../../storages";
import { useLogInOutStore } from "../../../stores/authentication";
import { AccountStackParamList } from "../../../types/navigations";
import {
    BookIcon,
    ChatIcon,
    FaceRecognitionIcon,
    FingerprintIcon,
    GlobeIcon,
    LockIcon,
    LogoutIcon,
    PeopleIcon,
    ShieldIcon,
} from "../assets";
import {
    AccountHeader,
    AccountSection,
    MenuItem,
    VersionInfo,
} from "../components";

type Props = {
    navigation: NativeStackNavigationProp<AccountStackParamList, "main-account">;
};

const AccountScreen: React.FC<Props> = ({ navigation }) => {
    const { isAuthenticated, logout: logoutContext } = useAuthentication();
    const insets = useSafeAreaInsets();
    const { logout } = useLogInOutStore();
    const [titleMode, setTitleMode] = React.useState("Chế độ khách");
    const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);

    React.useEffect(() => {
        if (!isAuthenticated) {
            setTitleMode("Chế độ khách");

            return;
        }

        storageServices
            .getString(STORAGE_KEYS.USERNAME)
            .then((username) => setTitleMode(username || "Người dùng"))
            .catch(() => setTitleMode("Chế độ khách"));
    }, [isAuthenticated]);

    const handleConfirmLogout = async () => {
        setShowLogoutModal(false);
        logoutContext();

        await logout();
    };

    const handleCancelLogout = () => {
        setShowLogoutModal(false);
    };

    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: COLORS.SECONDARY_BACKGROUND_COLOR,
                marginTop: insets.top,
            }}
        >
            <AccountHeader
                isAuthenticated={isAuthenticated}
                title={titleMode}
                onLoginPress={() => {
                    navigation.getParent()?.navigate("authentication");
                }}
            />

            <AccountSection title="Tổng quát" style={{ marginTop: 16 }}>
                {isAuthenticated && (
                    <MenuItem
                        icon={<PeopleIcon />}
                        title="Nhập mã mời"
                        onPress={() => { }}
                    />
                )}
                <MenuItem
                    icon={<PeopleIcon />}
                    title="Về chúng tôi"
                    onPress={() => { }}
                />
                <MenuItem
                    icon={<GlobeIcon />}
                    title="Ngôn ngữ"
                    isLastElement
                    onPress={() => { }}
                />
            </AccountSection>

            <AccountSection title="Hỗ trợ">
                <MenuItem
                    icon={<ChatIcon />}
                    title="Câu hỏi thường gặp"
                    onPress={() => { }}
                />
                <MenuItem
                    icon={<BookIcon />}
                    title="Hướng dẫn sử dụng"
                    isLastElement
                    onPress={() => { }}
                />
            </AccountSection>

            {isAuthenticated && (
                <AccountSection title="Cài đặt" style={{ marginBottom: 20 }}>
                    <MenuItem
                        icon={<LockIcon />}
                        title="Đổi mật khẩu"
                        onPress={() => { }}
                    />
                    <MenuItem
                        icon={<ShieldIcon />}
                        title="Cài đặt mã PIN"
                        onPress={() => { }}
                    />
                    <MenuItem
                        icon={<FingerprintIcon />}
                        title="Kích hoạt vân tay"
                        onPress={() => { }}
                    />
                    <MenuItem
                        icon={<FaceRecognitionIcon />}
                        title="Nhận diện khuôn mặt"
                        onPress={() => { navigation.navigate('face-id'); }}
                    />
                    <MenuItem
                        icon={<LogoutIcon />}
                        title="Đăng xuất"
                        isLastElement
                        onPress={() => {
                            setShowLogoutModal(!showLogoutModal);
                        }}
                    />
                </AccountSection>
            )}

            <VersionInfo />

            {/* Modal */}
            <ConfirmModal
                visible={showLogoutModal}
                icon="alert"
                iconColor={COLORS.WARNING_COLOR}
                title="Xác nhận đăng xuất"
                subtitle="Bạn có chắc chắn muốn đăng xuất khỏi tài khoản không?"
                onClose={handleCancelLogout}
                onConfirm={handleConfirmLogout}
            />
        </ScrollView>
    );
};

export default AccountScreen;
