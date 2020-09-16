import { StyleSheet } from 'react-native';
import { ceil } from 'react-native-reanimated';

const style = StyleSheet.create({
    container: {
        margin: 20,
        marginTop: 50,
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
        fontSize: 13,
        width: 90,
        alignSelf: "center",
        textAlign: 'center',
    },
    SubtitleText: {
        fontFamily: 'Montserrat_500Medium',
        letterSpacing: 1,
        fontSize: 15
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
        marginTop: 50,
        width: 110,
        alignSelf: "center",
        textAlign: 'center'
    },
    buttonDark: {
        width: 35,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    }
})

export default style;