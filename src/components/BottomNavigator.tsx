import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { COLORS, SIZES } from '../constants';

type TabId = 'home' | 'manage' | 'shopping' | 'notifications' | 'account';

interface TabItem {
    id: TabId;
    icon: keyof typeof Ionicons.glyphMap;
    iconOutline: keyof typeof Ionicons.glyphMap;
    label: string;
}

interface BottomNavigatorProps {
    state: any;
    navigation: any;
}

const BottomNavigator: React.FC<BottomNavigatorProps> = ({
    state,
    navigation,
}) => {
    // Lấy thông số vùng an toàn hiện tại
    const insets = useSafeAreaInsets();

    const tabs: TabItem[] = [
        { id: 'home', icon: 'home', iconOutline: 'home-outline', label: 'Trang chủ' },
        { id: 'manage', icon: 'calendar', iconOutline: 'calendar-outline', label: 'Quản lý' },
        { id: 'shopping', icon: 'wallet', iconOutline: 'wallet-outline', label: 'Mua sắm' },
        { id: 'notifications', icon: 'notifications', iconOutline: 'notifications-outline', label: 'Thông báo' },
        { id: 'account', icon: 'person', iconOutline: 'person-outline', label: 'Tài khoản' },
    ];

    return (
        <View
            style={{
                flexDirection: 'row',
                backgroundColor: COLORS.BACKGROUND_COLOR,
                borderTopWidth: 1,
                borderTopColor: '#E5E5E5',
                paddingTop: 8,

                // SỬA DÒNG NÀY: Cộng insets.bottom với một khoảng đệm nhỏ (ví dụ 10px)
                // Nếu máy không có tai thỏ (insets.bottom = 0) thì dùng mặc định 12px
                paddingBottom: Math.max(insets.bottom, 12),

                justifyContent: 'space-around',
                alignItems: 'center',
                shadowColor: COLORS.SHADOW_COLOR,
                shadowOffset: { width: 0, height: -2 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
                elevation: 8,
            }}
        >
            {tabs.map((tab, index) => {
                const isActive = state.index === index;
                const iconName = isActive ? tab.icon : tab.iconOutline;

                return (
                    <TouchableOpacity
                        key={tab.id}
                        onPress={() => navigation.navigate(tab.id)}
                        activeOpacity={0.7}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            // Có thể thêm padding top/bottom nhẹ ở đây nếu muốn button thoáng hơn
                            paddingVertical: 4,
                            paddingHorizontal: 8,
                        }}
                    >
                        <Ionicons
                            name={iconName}
                            size={SIZES.SMALL_ICON_SIZE}
                            color={
                                isActive
                                    ? COLORS.APP_PRIMARY_COLOR
                                    : COLORS.PLACE_HOLDER_TEXT_COLOR
                            }
                        />
                        <Text
                            style={{
                                fontSize: SIZES.H8_TITLE,
                                color: isActive
                                    ? COLORS.APP_PRIMARY_COLOR
                                    : COLORS.PLACE_HOLDER_TEXT_COLOR,
                                marginTop: 4,
                                fontWeight: isActive ? '600' : '400',
                            }}
                        >
                            {tab.label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default BottomNavigator;