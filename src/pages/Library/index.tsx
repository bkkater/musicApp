import React from 'react';
import { View, Text } from 'react-native';

import style from './styles';
import Header from '../../components/Header';
import BackgroundGradient from '../../components/BackgroundGradient';

function Home() {
    return (
        <View>
            <BackgroundGradient/>
            <Header title='Library'/>
        </View>
    );
}

export default Home;