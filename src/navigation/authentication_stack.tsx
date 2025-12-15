import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthenticationStackParamList } from '../types/navigations';
import ROUTES from '../constants';

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