import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigations";

import AuthenticationNavigator from "./authentication_stack";
import TabNavigator from "./tab_stack";
import AccountStackNavigator from "./account_stack";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="tab" component={TabNavigator} />
                <RootStack.Screen name="authentication" component={AuthenticationNavigator} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;