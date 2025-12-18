import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS, SIZES } from '../constants';
import { FaceIdScreen } from '../features/account/screens';
import AccountScreen from '../features/account/screens/AccountScreen';
import { AccountStackParamList } from '../types/navigations';

const Account = createNativeStackNavigator<AccountStackParamList>();

function AccountStackNavigator() {
    return (
        <Account.Navigator>
            <Account.Screen name="main-account" component={AccountScreen} options={{ headerShown: false }} />
            <Account.Screen
                name="face-id"
                component={FaceIdScreen}
                options={{
                    headerShown: true,
                    title: 'Cài đặt Face ID',

                    // Background header
                    headerStyle: {
                        backgroundColor: COLORS.PRIMARY_BACKGROUND_COLOR,
                    },

                    // Style title
                    headerTitleStyle: {
                        fontSize: SIZES.H5_TITLE,
                        fontWeight: '600',
                        color: COLORS.TEXT_PRIMARY_COLOR,
                    },

                    // Icon back color
                    headerTintColor: COLORS.BACK_BUTTON_COLOR,

                    // Center title (Android)
                    headerTitleAlign: 'center',
                }}
            />
        </Account.Navigator>
    );
}

export default AccountStackNavigator;