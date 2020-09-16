import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import MenuTabs from './MenuTabs'
import Player from '../pages/Player';


const { Screen, Navigator } = createStackNavigator();

function AppStack() {

    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen
                    name='MenuTabs'
                    component={MenuTabs}
                />
                <Screen name='Player' component={Player} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;