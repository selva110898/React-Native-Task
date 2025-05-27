import React from 'react'
import { Image, ScrollView, StatusBar, StyleSheet } from 'react-native'
import { PrimaryButton } from '../Components/Buttons'
import PageBackground from '../Components/PageBackground'
import TextDivider from '../Components/TextDivider'
import Fonts from '../Constants/Fonts'
import { actuatedNormalize } from '../Constants/PixelScaling'

const OrderAccepted = (props) => {

    return (

        <PageBackground type='DESIGNED'>

            <StatusBar backgroundColor={'transparent'} />

            <ScrollView style={styles.inputView}>

                <Image source={require('../../assets/Success.png')}
                    width={actuatedNormalize(269)}
                    height={actuatedNormalize(240)}
                    style={{ marginTop: actuatedNormalize(100), marginLeft: actuatedNormalize(23) }}
                />

                <TextDivider
                    type='IN PAGE'
                    title='Your Order has been accepted'
                    text='Your items has been placcd and is on it’s way to being processed'
                    alignment='CENTER'
                    mainContainerStyle={{ marginTop: actuatedNormalize(60) }}
                    headerTxtStyle={{ fontSize: actuatedNormalize(28), fontFamily: Fonts.GilroyBold }}
                    subInfoTxtStyle={{ width: actuatedNormalize(278), lineHeight: actuatedNormalize(21), marginTop: actuatedNormalize(15) }}
                />

            </ScrollView>

            <PrimaryButton
                label="Back to home"
                customPrimaryBtnStyle={{ marginBottom: actuatedNormalize(20) }}
                onPressPrimaryBtn={() => props?.navigation.push('Home')}
            />


        </PageBackground>
    )
}

export default OrderAccepted

const styles = StyleSheet.create({
    inputView: {
        // paddingHorizontal: actuatedNormalize(29)
    }
})