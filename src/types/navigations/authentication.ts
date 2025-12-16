import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

/**
 * Danh sách các màn hình thuộc Auth Stack
 * - Login: không nhận params
 * - ForgotPassword: không nhận params
 */
export type AuthenticationStackParamList = {
    'login': undefined;
    'forgot-password': undefined;
};

/**
 * Navigation prop dành cho LoginScreen
 * Giúp sử dụng: navigation.navigate('login'), navigation.goBack(), ...
 */
/*
    👉 Chỉ type cho navigation
    ❌ Không có route
    Khi nào dùng?
        - ✅ Khi component KHÔNG phải screen, nhưng vẫn cần navigation
            + Header
            + Button
            + Custom component
*/
export type LoginScreenNavigationProp = NativeStackNavigationProp<
    AuthenticationStackParamList,
    'login'
>;

/**
 * Navigation prop dành cho ForgotPasswordScreen
 */
export type ForgotPasswordScreenNavigationProp = NativeStackNavigationProp<
    AuthenticationStackParamList,
    'forgot-password'
>;

/**
 * Route prop dành cho LoginScreen
 * Dùng để lấy params gửi sang màn hình này (nếu có)
 */
export type LoginScreenRouteProp = RouteProp<AuthenticationStackParamList, 'login'>;

/**
 * Route prop dành cho ForgotPasswordScreen
 */
export type ForgotPasswordScreenRouteProp = RouteProp<
    AuthenticationStackParamList,
    'forgot-password'
>;
