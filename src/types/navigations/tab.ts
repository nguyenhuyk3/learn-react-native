import { NavigatorScreenParams } from "@react-navigation/native";

import { AccountStackParamList } from "./account";

/*
  Tab Navigator
  ├── home
  ├── manage
  ├── shopping
  ├── notifications
  └── account  → Stack Navigator
                  ├── account-main
                  └── face-id
  👉 Nghĩa là:
    - account không phải là 1 screen đơn
    - mà là một navigator khác (AccountStack)

*/

export type TabStackParamList = {
  'home': undefined;
  'manage': undefined;
  'shopping': undefined;
  'notifications': undefined;
  'account': NavigatorScreenParams<AccountStackParamList>;
};

