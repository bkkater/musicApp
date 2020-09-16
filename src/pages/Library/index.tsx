import React from 'react';
import { View, Text } from 'react-native';

import style from './styles';
import Header from '../../components/Header';
import BackgroundGradient from '../../components/BackgroundGradient';

function Home() {
    return (
        <View>
            <BackgroundGradient firstColor='#C9D6FF' secondColor='#C9D6FF' thirdColor='transparent'/>
            <Header title='Library'/>
        </View>
    );
}

export default Home;