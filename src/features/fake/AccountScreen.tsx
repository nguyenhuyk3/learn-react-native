import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { TabParamList } from '../../types/navigations/tab';
import Svg, { Circle, Path } from 'react-native-svg';
import { useAuthentication } from '../../context';
import { storageServices } from '../../storages';
import { COLORS, SIZES, STORAGE_KEYS } from '../../constants';
import { useLoginStore } from '../../stores/authentication';

type Props = {
    navigation: BottomTabNavigationProp<TabParamList, 'account'>;
};

const AccountScreen: React.FC<Props> = ({ navigation }) => {
    const { isAuthenticated, logout: logoutContext } = useAuthentication();
    const { logout } = useLoginStore();
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

    const handleOnPress = async () => {
        if (isAuthenticated) {
            logoutContext();
            await logout();
        }

        navigation.getParent()?.navigate('authentication')
    }


    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.BACKGROUND_COLOR,
                alignItems: 'center',
                paddingTop: 10,
            }}
        >
            {/* Avatar */}
            <View style={{ marginBottom: 10, marginTop: 50 }}>
                <View
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 60,
                        backgroundColor: '#E0E0E0',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 3,
                        borderColor: '#FFFFFF',
                        shadowColor: COLORS.SHADOW_COLOR,
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 4,
                        elevation: 3,
                    }}
                >
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
                    fontSize: SIZES.H3_TITLE,
                    fontWeight: '600',
                    color: COLORS.TEXT_PRIMARY_COLOR,
                }}
            >
                {titleMode}
            </Text>

            {/* Login Button */}
            <TouchableOpacity
                style={{
                    backgroundColor: COLORS.BUTTON_PRIMARY_COLOR,
                    paddingHorizontal: 40,
                    paddingVertical: 16,
                    borderRadius: 25,
                    shadowColor: COLORS.SHADOW_COLOR,
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                    elevation: 4,
                    marginTop: 20,
                }}
                onPress={handleOnPress}
            >
                <Text
                    style={{
                        color: COLORS.PRIMARY_TEXT_IN_BUTTON_COLOR,
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
