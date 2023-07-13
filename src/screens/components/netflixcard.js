import { Button, Image, Linking, StyleSheet, Text, View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen';
import {
    useFonts,
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic,
} from '@expo-google-fonts/josefin-sans';

SplashScreen.preventAutoHideAsync();

const Netflixcard = () => {
    let [fontsLoaded] = useFonts({
        JosefinSans_100Thin,
        JosefinSans_200ExtraLight,
        JosefinSans_300Light,
        JosefinSans_400Regular,
        JosefinSans_500Medium,
        JosefinSans_600SemiBold,
        JosefinSans_700Bold,
        JosefinSans_100Thin_Italic,
        JosefinSans_200ExtraLight_Italic,
        JosefinSans_300Light_Italic,
        JosefinSans_400Regular_Italic,
        JosefinSans_500Medium_Italic,
        JosefinSans_600SemiBold_Italic,
        JosefinSans_700Bold_Italic,
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    else {
        SplashScreen.hideAsync();
        return (
            <View>
                <Text style={styles.header}>
                    Netflix Card
                </Text>
                <View style={styles.poster}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: "https://th.bing.com/th/id/OIP.aC6Rd5Y-3zoj2ECGPs19ZQHaKY?w=113&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                        }}
                    />
                    <Text style={styles.name}>War</Text>
                    <Text style={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil numquam doloremque facere aut fuga, eaque dolore non, quos ex magnam reiciendis maiores laboriosam dolor id quas beatae, exercitationem neque quaerat.</Text>
                    <Button
                        color={'#E50914'}
                        title='Watch Now'
                        onPress={() => { Linking.openURL('https://www.netflix.com/in/title/80223226') }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10,
        fontFamily: 'JosefinSans_100Thin',
    },
    tinyLogo: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
        margin: "auto"
    },
    poster: {
        width: 320,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },
    text: {
        marginBottom: 20,
        paddingHorizontal: 20,
        fontFamily: 'JosefinSans_100Thin',
    }
})

export default Netflixcard;