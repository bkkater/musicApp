import React from 'react';
import { View } from 'react-native';
import BackgroundGradient from '../../components/BackgroundGradient';
import Header from '../../components/Header';

export default function Playlists() {
    return (
        <View>
            <BackgroundGradient firstColor='#C9D6FF' secondColor='#C9D6FF' thirdColor='transparent'/>
            <Header title='Playlists'/>
        </View>
    )
}