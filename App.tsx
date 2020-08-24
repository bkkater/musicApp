import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { AppLoading } from 'expo';

import { Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'
import { Montserrat_300Light, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat'


import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsloaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
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