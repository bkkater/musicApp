import React from 'react';
import { View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface BackgroundGradientProps {
  firstColor: string,
  secondColor: string,
  thirdColor: string,
}

const BackgroundGradient: React.FC<BackgroundGradientProps> = ({ firstColor, secondColor, thirdColor }) => {
    let height = Dimensions.get("window").height;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'C9D6FF',
        }}>
        <LinearGradient
          // Background Linear Gradient
          colors={[firstColor, secondColor, thirdColor]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: height,
          }}
        />
      </View>
    );
}

export default BackgroundGradient;