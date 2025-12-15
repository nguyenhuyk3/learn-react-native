import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthenticationStackParamList } from './src/types/navigations';

import { RootNavigator } from './src/navigation';
import { AuthenticationProvider } from './src/context/';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',
    secondary: '#03dac6',
  },
};

const Stack = createNativeStackNavigator<AuthenticationStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <AuthenticationProvider>
          <RootNavigator />
        </AuthenticationProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}