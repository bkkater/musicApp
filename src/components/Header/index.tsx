import React, { ReactNode, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useTheme, themes } from "../../context/Theme";

import { Ionicons, Entypo } from '@expo/vector-icons'

import style from './styles';

interface HeaderProps {
    title: string;
    subtitle?: string;
    icon?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, icon }) => {
    const [darkMode, setDarkMode] = useState(false)

    const { theme, setTheme } = useTheme();

    function handleSwitchTheme() {
        setTheme(theme === themes.light ? themes.dark : themes.light)
    }

    if (subtitle != undefined) {
        return (
            <>
                {/* <BackgroundGradient firstColor={darkMode ? '#C9D6FF' : '#C9D6FF'} secondColor='#C9D6FF' thirdColor='transparent' /> */}
                <View style={style.container}>
                    {icon}
                    <Ionicons name="ios-arrow-down" size={25} color={darkMode ? '#FFF' : "#343434"} />
                    <View style={style.headerDescription}>
                        <Text style={[style.TitleText, { color: darkMode ? 'white' : 'black' }]}>{title}</Text>
                        <Text style={[style.SubtitleText, { color: darkMode ? 'white' : 'black' }]}>{subtitle}</Text>
                    </View>
                    <TouchableOpacity onPress={() => {}} style={[style.buttonDark, { backgroundColor: darkMode ? '#757575' : '#DBE1F6' }]}>
                        <Entypo name="light-up" size={20} color={darkMode ? 'white' : '#6A6A6A'} />
                    </TouchableOpacity>
                </View>
            </>
        )
    }
    return (
        <>
            <View style={style.containerNoSubtitle}>
                {icon}
                <Ionicons name="ios-arrow-down" size={25} color={darkMode ? '#FFF' : "#343434"} />
                <View style={style.headerDescription}>
                    <Text style={[style.TitleText, { color: darkMode ? 'white' : 'black' }]}>{title}</Text>
                </View>
                <TouchableOpacity onPress={handleDarkMode} style={[style.buttonDark, { backgroundColor: darkMode ? '#757575' : '#DBE1F6' }]}>
                    <Entypo name="light-up" size={20} color={darkMode ? 'white' : '#6A6A6A'} />
                </TouchableOpacity>
            </View>
        </>

    );
}

export default Header;