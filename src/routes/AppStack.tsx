import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from '../context/Theme'

import MenuTabs from './MenuTabs'
import Player from '../pages/Player';


const { Screen, Navigator } = createStackNavigator();

function AppStack() {

    return (
        <NavigationContainer>
            <ThemeProvider>
                <Navigator screenOptions={{ headerShown: false }}>
                    <Screen
                        name='MenuTabs'
                        component={MenuTabs}
                    />
                    <Screen name='Player' component={Player} />
                </Navigator>
            </ThemeProvider>
        </NavigationContainer>
    )
}

export default AppStack;