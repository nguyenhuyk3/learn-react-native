import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { TabParamList } from '../../types/navigations/tab';
// 1. Import các component SVG từ thư viện
import Svg, { Circle, Path } from 'react-native-svg';
import { useAuthentication } from '../../context';
import { storageServices } from '../../storages';
import { STORAGE_KEYS } from '../../constants';

type Props = {
    navigation: BottomTabNavigationProp<TabParamList, 'account'>;
};

const AccountScreen: React.FC<Props> = ({ navigation }) => {
    const { isAuthenticated } = useAuthentication();
    const [titleMode, setTitleMode] = React.useState<string | null>('Chế độ khách');
    const [buttonMode, setButtonMode] = React.useState<string>('Đăng nhập');

    React.useEffect(() => {
        if (isAuthenticated) {
            storageServices.getString(STORAGE_KEYS.USERNAME)
                .then(username => {
                    setTitleMode(username);
                    setButtonMode('Đăng xuất');
                })
                .catch(() => {
                    setTitleMode('Chế độ khách');
                    setButtonMode('Đăng nhập');
                });

        }
    }, [isAuthenticated]);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#F5F5F5',
                alignItems: 'center',
                paddingTop: 10,
            }}
        >
            {/* Avatar */}
            <View style={{ marginBottom: 20 }}>
                <View
                    style={{
                        width: 120,
                        height: 120,
                        borderRadius: 60,
                        backgroundColor: '#E0E0E0',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 3,
                        borderColor: '#FFFFFF',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 4,
                        elevation: 3,
                    }}
                >
                    {/* 2. Thay svg -> Svg, circle -> Circle, path -> Path */}
                    <Svg width="80" height="80" viewBox="0 0 80 80">
                        <Circle cx="40" cy="40" r="40" fill="#E0E0E0" />
                        <Circle cx="40" cy="32" r="12" fill="#757575" />
                        <Path d="M 20 65 Q 20 50 40 50 Q 60 50 60 65" fill="#757575" />
                    </Svg>
                </View>
            </View>

            {/* Title */}
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: '600',
                    color: '#333333',
                    marginBottom: 30,
                }}
            >
                {titleMode}
            </Text>

            {/* Login Button */}
            <TouchableOpacity
                style={{
                    backgroundColor: '#D4AF37',
                    paddingHorizontal: 60,
                    paddingVertical: 16,
                    borderRadius: 25,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                    elevation: 4,
                }}
                onPress={() => { navigation.getParent()?.navigate('authentication') }}
            >
                <Text
                    style={{
                        color: '#FFFFFF',
                        fontSize: 16,
                        fontWeight: '600',
                    }}
                >
                    {buttonMode}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default AccountScreen;
