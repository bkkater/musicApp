import React from 'react';
import { View, Text } from 'react-native';
import BackgroundGradient from '../../components/BackgroundGradient';

import Header from '../../components/Header';



function Home(){
    return (
        <View>
            <BackgroundGradient firstColor='#C9D6FF' secondColor='#C9D6FF' thirdColor='transparent'/>
            <Header title='Search'/>
        </View>
    );
}

export default Home;