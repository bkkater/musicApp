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
            <Header title='Settings' subtitle='alo' />

            <View style={style.darkMode}>
                <Text style={style.darkModeText}>Dark Mode</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#F2994A" }}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={style.switch}
                />
            </View>

        </View>
    );
}

export default Settings;