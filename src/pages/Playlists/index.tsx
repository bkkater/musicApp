import React from 'react';
import { View } from 'react-native';
import BackgroundGradient from '../../components/BackgroundGradient';
import Header from '../../components/Header';

export default function Playlists() {
    return (
        <View>
            <BackgroundGradient/>
            <Header title='Playlists'/>
        </View>
    )
}