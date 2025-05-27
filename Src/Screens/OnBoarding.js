import { View, Text, StyleSheet, StatusBar, Image, ImageBackground, Dimensions, SafeAreaView, Alert } from 'react-native'
import React from 'react'
import { actuatedNormalize } from '../Constants/PixelScaling'
import Fonts from '../Constants/Fonts'
import { PrimaryButton } from '../Components/Buttons'
import Colors from '../Constants/Colors'

const Onboarding = (props) => {

    return (

        <SafeAreaView style={{ flex: 1 }}>

            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

            <ImageBackground
                source={require('../../assets/Onboarding.png')}
                resizeMode='stretch'
                style={styles.imageBg}
            >

                <View style={{ alignItems: "center", justifyContent: "flex-end", flex: 1 }}>

                    <Image
                        source={require('../../assets/AppleWhite.png')}
                        style={{ marginBottom: actuatedNormalize(10)}}
                    />

                    <View>
                        <Text style={styles.mainText}>{`Welcome\nto our store`}</Text>
                        <Text style={styles.secondaryText}>Get your groceries in as fast as one hour</Text>
                    </View>

                </View>

                <PrimaryButton
                    label="Get Started"
                    onPressPrimaryBtn={() => props?.navigation?.push('Login')}
                    customPrimaryBtnStyle={{ marginVertical: actuatedNormalize(40) }}
                />

            </ImageBackground>

        </SafeAreaView>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    imageBg: {
        flex: 1,
        paddingHorizontal: actuatedNormalize(30),
        justifyContent: 'space-between'
    },
    mainText: {
        color: Colors.primaryTextColorWhite,
        fontSize: actuatedNormalize(48),
        textAlign: 'center',
        fontWeight: '600',
        fontFamily: Fonts.GilroyBold
    },
    secondaryText: {
        color: "rgba(252, 252, 252, 0.7)",
        textAlign: 'center',
        fontWeight: '400',
        fontFamily: Fonts.GilroyMedium
    }
})
