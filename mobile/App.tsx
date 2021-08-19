import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';

import { Roboto_500Medium } from'@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import {Poppins_800ExtraBold } from '@expo-google-fonts/poppins';
import {Poppins_700Bold } from '@expo-google-fonts/poppins';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded]  = useFonts({
    Roboto_500Medium,
    Ubuntu_700Bold,
    Poppins_800ExtraBold,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      <Routes />
    </>
  );
}


