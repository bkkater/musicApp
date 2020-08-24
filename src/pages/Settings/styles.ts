import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    switch: {
        margin: 100,
        transform: [{ scale: 1.5}]
    },
    darkMode: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    darkModeText: {
        fontFamily: 'Ubuntu_400Regular'
    }
})

export default style;