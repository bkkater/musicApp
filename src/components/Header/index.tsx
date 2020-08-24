import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';

import { Ionicons, Entypo } from '@expo/vector-icons'

import style from './styles';

interface HeaderProps {
    title: string;
    subtitle?: string;
    icon?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, icon }) => {
    if(subtitle){
        <View style={style.container}>
        {icon}
        

        <Ionicons name="ios-arrow-back" size={25} color="#343434" />
        <View style={style.headerDescription}>
            <Text style={style.TitleTextNoSub}>{title}</Text>
        </View>
        <Entypo name="dots-three-vertical" size={20} color="black" style={{ marginTop: 2 }} />
    </View>
    }
    return (
        <View style={style.container}>
            {icon}
            <Ionicons name="ios-arrow-back" size={25} color="#343434" />
            <View style={style.headerDescription}>
                <Text style={style.TitleText}>{title}</Text>
            </View>
            <Entypo name="dots-three-vertical" size={20} color="black" style={{ marginTop: 2 }} />
        </View>
    );
}

export default Header;