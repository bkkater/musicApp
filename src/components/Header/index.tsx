import React, { ReactNode, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Ionicons, Entypo } from '@expo/vector-icons'

import style from './styles';

interface HeaderProps {
    title: string;
    subtitle?: string;
    icon?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, icon }) => {
    const [darkMode, setDarkMode] = useState(false)

    function handleDarkMode() {
        setDarkMode(!darkMode)
    }

    if (subtitle) {
        <View style={style.container}>
            {icon}
            <Ionicons name="ios-arrow-down" size={25} color={darkMode ? '#FFF' : "#343434"} />
            <View style={style.headerDescription}>
                <Text style={[style.TitleTextNoSub, { color: darkMode ? 'white' : 'black' }]}>{title}</Text>
            </View>
            <Entypo name="dots-three-vertical" size={20} color={darkMode ? 'white' : 'black'} style={{ marginTop: 2 }} />
        </View>
    }
    return (
        <View style={style.container}>
            {icon}
            <Ionicons name="ios-arrow-down" size={25} color={darkMode ? '#FFF' : "#343434"} />
            <View style={style.headerDescription}>
                <Text style={[style.TitleText, { color: darkMode ? 'white' : 'black' }]}>{title}</Text>
            </View>
            <TouchableOpacity onPress={handleDarkMode} style={[style.buttonDark, { backgroundColor: darkMode ? '#757575' : '#DBE1F6' }]}>
                <Entypo name="light-up" size={20} color={darkMode ? 'white' : '#6A6A6A'} />
            </TouchableOpacity>
        </View>

    );
}

export default Header;