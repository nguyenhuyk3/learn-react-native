import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import React from 'react';
import { ScrollView } from 'react-native';

import { COLORS, STORAGE_KEYS } from '../../../constants';
import { useAuthentication } from '../../../context';
import { storageServices } from '../../../storages';
import { useLoginStore } from '../../../stores/authentication';
import { TabParamList } from '../../../types/navigations';
import {
    BookIcon,
    ChatIcon,
    FingerprintIcon,
    GlobeIcon,
    LockIcon,
    LogoutIcon,
    PeopleIcon,
    ShieldIcon,
} from '../assets';
import { AccountHeader, AccountSection, MenuItem, VersionInfo } from '../components';


type Props = {
    navigation: BottomTabNavigationProp<TabParamList, 'account'>;
};

const AccountScreen: React.FC<Props> = ({ navigation }) => {
    const { isAuthenticated, logout: logoutContext } = useAuthentication();
    const { logout } = useLoginStore();
    const [titleMode, setTitleMode] = React.useState('Chế độ khách');

    React.useEffect(() => {
        if (!isAuthenticated) {
            setTitleMode('Chế độ khách');
            return;
        }

        storageServices
            .getString(STORAGE_KEYS.USERNAME)
            .then(username => setTitleMode(username || 'Người dùng'))
            .catch(() => setTitleMode('Chế độ khách'));
    }, [isAuthenticated]);

    return (
        <ScrollView style={{ flex: 1, backgroundColor: COLORS.SECONDARY_BACKGROUND_COLOR }}>
            <AccountHeader
                isAuthenticated={isAuthenticated}
                title={titleMode}
                onLoginPress={() => {
                    navigation.getParent()?.navigate('authentication')
                }}
            />

            <AccountSection title="Tổng quát" style={{ marginTop: 16 }}>
                {isAuthenticated && (
                    <MenuItem icon={<PeopleIcon />} title="Nhập mã mời" onPress={() => { }} />
                )}
                <MenuItem icon={<PeopleIcon />} title="Về chúng tôi" onPress={() => { }} />
                <MenuItem
                    icon={<GlobeIcon />}
                    title="Ngôn ngữ"
                    isLastElement
                    onPress={() => { }}
                />
            </AccountSection>

            <AccountSection title="Hỗ trợ">
                <MenuItem icon={<ChatIcon />} title="Câu hỏi thường gặp" onPress={() => { }} />
                <MenuItem
                    icon={<BookIcon />}
                    title="Hướng dẫn sử dụng"
                    isLastElement
                    onPress={() => { }}
                />
            </AccountSection>

            {isAuthenticated && (
                <AccountSection title="Cài đặt" style={{ marginBottom: 20 }}>
                    <MenuItem icon={<LockIcon />} title="Đổi mật khẩu" onPress={() => { }} />
                    <MenuItem icon={<ShieldIcon />} title="Cài đặt mã PIN" onPress={() => { }} />
                    <MenuItem icon={<FingerprintIcon />} title="Kích hoạt vân tay" onPress={() => { }} />
                    <MenuItem
                        icon={<LogoutIcon />}
                        title="Đăng xuất"
                        isLastElement
                        onPress={async () => {
                            logoutContext();

                            await logout();
                        }}
                    />
                </AccountSection>
            )}

            <VersionInfo />
        </ScrollView>
    );
};

export default AccountScreen;
