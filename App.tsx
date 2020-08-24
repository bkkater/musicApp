import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { AppLoading } from 'expo';

import { Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'

import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsloaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold
  })
  if (!fontsloaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="auto" />
      </>
    );
  }
}