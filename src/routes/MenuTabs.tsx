import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather, Octicons } from '@expo/vector-icons';

import Library from '../pages/Library';
import Playlists from '../pages/Playlists';
import Search from '../pages/Search';
import More from '../pages/More';

const Tab = createBottomTabNavigator();

export default function MenuTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 75,
                },
                tabStyle: {
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                labelStyle: {
                    fontFamily: 'Ubuntu_700Bold',
                    fontSize: 11,
                    marginBottom: 20
                },
                inactiveBackgroundColor: '#FAFAFC',
                activeBackgroundColor: '#FAFAFC',
                inactiveTintColor: '#C1BCCC',
                activeTintColor: '#FF6B16',
            }}>
            <Tab.Screen
                name="Library"
                component={Library}
                options={{
                    tabBarLabel: 'Library',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Feather name="inbox" size={24} color={focused ? '#FF6B16': color}/>
                        );
                    }
                }} />
            <Tab.Screen
                name="Playlists"
                component={Playlists}
                options={{
                    tabBarLabel: 'Playlists',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="ios-musical-notes" size={24} color={focused ? '#FF6B16': color} />                          
                        );
                    }
                }} />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Feather name="search" size={24} color={focused ? '#FF6B16': color} />
                        );
                    }
                }} />
            <Tab.Screen
                name="More"
                component={More}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Octicons name="settings" size={24} color={focused ? '#FF6B16': color} />

                        );
                    }
                }} />
        </Tab.Navigator>
    );
}