import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        margin: 20,
        marginTop: 40,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-around',
    },
    containerNoSubtitle: {
        margin: 20,
        marginTop: 50,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-around',
    },
    TitleText: {
        textTransform: 'uppercase',
        fontFamily: 'Montserrat_400Regular',
        letterSpacing: 1,
        fontSize: 13
    },
    SubtitleText: {
        fontFamily: 'Montserrat_500Medium',
        letterSpacing: 1,
        fontSize: 17
    },
    headerDescription: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 100,
        marginRight: 100
    },
    TitleTextNoSub: {
        textTransform: 'uppercase',
        fontFamily: 'Montserrat_400Regular',
        letterSpacing: 1,
        fontSize: 13,
        marginTop: 50
    }
})

export default style;