import { View, Text, StyleSheet, StatusBar, Image, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import PrimaryColors from '../Constants/Colors'
import { AppleWhite, SplashIcon } from '../Constants/SvgLocations'
import Colors from '../Constants/Colors'
import { actuatedNormalize } from '../Constants/PixelScaling'
import Fonts from '../Constants/Fonts'

const SplashScreen = () => {

    return (

        <SafeAreaView style={styles.bgview}>

            <StatusBar backgroundColor={"transparent"} animated translucent barStyle={'light-content'} />

            <View style={{ flexDirection: "row" }}>

                <Image source={require('../../assets/AppleWhite.png')} style={{ alignSelf: "center" }} />

                <View style={{ alignItems: "flex-start", marginLeft: actuatedNormalize(20) }}>
                    <Text style={styles.mainText}>Fresh</Text>
                    <Text style={styles.secondaryText}>online groceriet</Text>
                </View>

            </View>

        </SafeAreaView>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    bgview: {
        flex: 1,
        backgroundColor: Colors.primayBackground,
        alignItems: "center",
        justifyContent: "center"
    },
    mainText: {
        color: Colors.primaryTextColorWhite,
        fontSize: actuatedNormalize(54),
        textAlign: 'center',
        fontWeight: '600',
        fontFamily: Fonts.GilroyBold
    },
    secondaryText: {
        color: "rgba(252, 252, 252, 0.7)",
        textAlign: 'center',
        fontWeight: '400',
        letterSpacing: actuatedNormalize(5.5),
        fontFamily: Fonts.GilroyMedium
    }
})