import { NavigatorScreenParams } from "@react-navigation/native";

import { TabStackParamList } from "./tab";

export type RootStackParamList = {
    'authentication': undefined;
    'tab': NavigatorScreenParams<TabStackParamList>;
};