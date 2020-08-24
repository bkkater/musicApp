import React from 'react';
import { View, Text } from 'react-native';

import style from './styles';

function Header() {
    return (
        <View style={style.container}>
            <Text style={style.TitleText}></Text>
        </View>
    );
}

export default Header;