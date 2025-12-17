import { createBottomTabNavigator, BottomTabBarProps } from "@react-navigation/bottom-tabs";
import BottomNavigator from "../components/BottomNavigator";

import { TabParamList } from "../types/navigations/tab";
import ManageScreen from "../features/fake/ManageScreen";
import ShoppingScreen from "../features/fake/ShoppingScreen";
import NotificationsScreen from "../features/fake/NotificationsScreen";
import AccountScreen from "../features/account/screens/AccountScreen";
import HomeScreen from "../features/home/screens/HomeScreen";


const Tab = createBottomTabNavigator<TabParamList>();

// Main Tab Navigator (With Bottom Tab)
const TabNavigator = () => {
    return (
        <Tab.Navigator
            tabBar={(props: BottomTabBarProps) => <BottomNavigator {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name="home" component={HomeScreen} />
            <Tab.Screen name="manage" component={ManageScreen} />
            <Tab.Screen name="shopping" component={ShoppingScreen} />
            <Tab.Screen name="notifications" component={NotificationsScreen} />
            <Tab.Screen name="account" component={AccountScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;