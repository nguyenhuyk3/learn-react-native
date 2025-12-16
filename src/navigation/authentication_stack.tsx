import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthenticationStackParamList } from '../types/navigations';

import ROUTES from '../constants';

/*
  <AuthenticationStack.Navigator> là component gốc của một Stack Navigator trong React Navigation
  👉 AuthenticationStack KHÔNG phải component
  👉 Nó là đối tượng navigator factory
  Nó sinh ra 2 component:
    - AuthenticationStack.Navigator
    - AuthenticationStack.Screen

  <AuthenticationStack.Navigator> là gì?
    - 👉 Đây là component bao bọc (container) của Stack Navigation
    - Nó:
        - Quản lý navigation state
        - Quản lý history stack
        - Biết screen nào đang active
        - Cung cấp navigation, route cho các Screen con
*/

const AuthenticationStack = createNativeStackNavigator<AuthenticationStackParamList>();

// Auth Stack Navigator (No Bottom Tab)
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      initialRouteName={ROUTES.LOGIN.name}
      screenOptions={
        {
          headerShown: false
        }
      }>
      <AuthenticationStack.Screen name={ROUTES.LOGIN.name} component={ROUTES.LOGIN.screen} />
      <AuthenticationStack.Screen name={ROUTES.FORGOT_PASSWORD.name} component={ROUTES.FORGOT_PASSWORD.screen} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;