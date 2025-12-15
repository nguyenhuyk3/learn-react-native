import ForgotPasswordScreen from "../features/auth/forgot_password/screens/ForgotPasswordScreen";
import LoginScreen from "../features/auth/login/screens/LoginScreen";

const ROUTES = {
    LOGIN: {
        name: 'login',
        screen: LoginScreen,
    },
    FORGOT_PASSWORD: {
        name: 'forgot-password',
        screen: ForgotPasswordScreen,
    },
} as const;

export default ROUTES;