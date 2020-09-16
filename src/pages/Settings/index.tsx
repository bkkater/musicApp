import React, { useState } from 'react';
import { View, Text } from 'react-native';

import style from './styles';
import BackgroundGradient from '../../components/BackgroundGradient';
import { Switch } from 'react-native-gesture-handler';
import Header from '../../components/Header';

function Settings() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        
    };

    return (
        <View>
            <BackgroundGradient firstColor='#C9D6FF' secondColor='#C9D6FF' thirdColor='transparent'/>
            <Header title='Settings' subtitle={'SETTINGS'}/>

        </View>
    );
}

export default Settings;